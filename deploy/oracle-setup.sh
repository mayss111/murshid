#!/usr/bin/env bash
# Setup complet sur Oracle Cloud Free Tier (Ubuntu 22.04 ARM) avec Ollama LOCAL.
# Usage: bash oracle-setup.sh
set -euo pipefail

echo "== Mise a jour du systeme =="
sudo apt-get update -y
sudo apt-get upgrade -y

echo "== Installation de Docker =="
if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sudo sh
  sudo usermod -aG docker "$USER"
fi
if ! docker compose version >/dev/null 2>&1; then
  sudo apt-get install -y docker-compose-plugin
fi

echo "== Clonage du projet =="
REPO_URL="https://github.com/VOTRE_USER/VOTRE_REPO.git"
APP_DIR="$HOME/murshid"
if [ ! -d "$APP_DIR" ]; then
  git clone "$REPO_URL" "$APP_DIR"
fi
cd "$APP_DIR"

echo "== Generation des secrets (.env) =="
if [ ! -f .env ]; then
  cp .env.example .env
  sed -i "s#^POSTGRES_PASSWORD=.*#POSTGRES_PASSWORD=$(openssl rand -base64 18)#" .env
  sed -i "s#^JWT_SECRET=.*#JWT_SECRET=$(openssl rand -base64 32)#" .env
fi

echo "== Build et lancement =="
sudo docker compose -f docker-compose.prod.yml --env-file .env up -d --build

echo "== Pull du modele Ollama (llama3.2) =="
sudo docker compose -f docker-compose.prod.yml exec -T ollama ollama pull llama3.2

echo "== Nettoyage automatique de l'espace disque =="
# Supprime images/volumes/containers inutilises 1x/semaine (dim 03h00)
CRON_LINE="0 3 * * 0 docker image prune -af && docker container prune -f && docker volume prune -f && journalctl --vacuum-time=7d"
( sudo crontab -l 2>/dev/null | grep -v "docker image prune" ; echo "$CRON_LINE" ) | sudo crontab -
# Nettoyage immediate des couches de build intermediaires
sudo docker builder prune -af

echo "== Statut =="
sudo docker compose -f docker-compose.prod.yml ps
echo "Espace disque restant :"
df -h /
echo "FIN. Ouvrez http://<IP_PUBLIQUE> dans le navigateur."
