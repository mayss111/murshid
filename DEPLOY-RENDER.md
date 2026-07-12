# Deploiement Murshid sur Render (gratuit) + Groq

Ce guide deploie toute l'application **gratuitement** :

| Composant | Hebergement | Plan |
|-----------|-------------|------|
| Base de donnees PostgreSQL | Render | Free |
| Backend Spring Boot (Docker) | Render Web Service | Free |
| Frontend Angular (statique) | Render Static Site | Free |
| IA | API **Groq** (cloud) | Free |

> L'ancienne IA locale **Ollama** est remplacee par **Groq** (API compatible OpenAI),
> car aucun hebergement gratuit ne peut faire tourner un LLM local.

---

## 1. Prerequis

1. Un compte **GitHub** avec ce depot pousse en ligne.
2. Un compte **Render** : https://render.com (connexion via GitHub).
3. Une cle API **Groq** (gratuite) : https://console.groq.com/keys

---

## 2. Recuperer la cle Groq

1. Aller sur https://console.groq.com/keys
2. `Create API Key` -> copier la cle (commence par `gsk_...`).

---

## 3. Deploiement via Blueprint (recommande)

Le fichier `render.yaml` a la racine decrit deja les 3 services.

1. Sur Render : **New** > **Blueprint**.
2. Selectionner ce depot GitHub.
3. Render detecte `render.yaml` et liste : `murshid-db`, `murshid-backend`, `murshid-frontend`.
4. Render demandera la valeur de **`GROQ_API_KEY`** (marquee `sync: false`) -> coller votre cle Groq.
5. Cliquer **Apply**. Render cree la base, build le backend (Docker) puis le frontend.

Le premier build du backend (Maven) prend ~5-10 min.

---

## 4. Verifier / ajuster l'URL de l'API

Le frontend appelle le backend a l'adresse definie dans
`frontend/src/environments/environment.prod.ts` :

```ts
apiUrl: 'https://murshid-backend.onrender.com/api'
```

- Si votre service backend s'appelle bien **`murshid-backend`**, c'est bon.
- Si Render lui a donne un autre nom/URL, mettez a jour cette ligne, committez,
  puis relancez le deploiement du frontend.

---

## 5. Verification

- **Backend** : ouvrir `https://murshid-backend.onrender.com/health`
  -> doit repondre `{"status":"healthy", ...}`.
- **Frontend** : ouvrir `https://murshid-frontend.onrender.com`
  -> creer un compte, generer un parcours (teste l'IA Groq).

---

## 6. Points importants (plan gratuit)

- **Mise en veille** : le backend gratuit s'endort apres ~15 min d'inactivite.
  Le premier appel suivant met ~30-60 s a repondre (cold start). Normal.
- **PostgreSQL gratuit** : expire apres ~90 jours (limite Render).
  Prevoir une sauvegarde ou passer a un plan payant / Neon / Supabase ensuite.
- **Groq** : gratuit avec des limites de debit (rate limits) genereuses.
  Le code a des reponses de secours (fallback) si l'IA echoue.

---

## 7. Variables d'environnement du backend

| Variable | Source | Role |
|----------|--------|------|
| `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | base Render | connexion PostgreSQL |
| `APP_JWTSECRET` | genere par Render | secret JWT |
| `GROQ_API_KEY` | **a saisir** | cle API Groq |
| `GROQ_MODEL` | `llama-3.3-70b-versatile` | modele IA |

Modeles Groq alternatifs : `llama-3.1-8b-instant` (plus rapide), `llama-3.3-70b-versatile` (meilleure qualite).
