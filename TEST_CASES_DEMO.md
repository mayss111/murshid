# Murshid — Cas de Test Globale pour Démo

## Pré-requis
- Backend démarré sur `http://localhost:8085`
- Frontend démarré sur `http://localhost:4200`
- Base de données PostgreSQL accessible
- Clé API Groq configurée dans `.env` backend
- Navigateur en mode incognito (pour éviter les tokens/cache existants)

---

## Scénario 1 : Health Check
**Objectif :** Vérifier que le backend répond.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | `GET http://localhost:8085/health` | Status 200, JSON `{"status":"UP"}` |
| 2 | `GET http://localhost:8085/` | Status 200, infos app |

---

## Scénario 2 : Inscription (Register)
**Objectif :** Créer un nouveau compte utilisateur.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Ouvrir `http://localhost:4200/register` | Formulaire d'inscription affiché |
| 2 | Remplir : Prénom `Demo`, Nom `User`, Email `demo@murshid.app`, Mot de passe `Test@123456`, Dialecte `Darija` | Champs valides |
| 3 | Cliquer sur **"إنشاء حسابي"** | Redirection vers `/dashboard`, badge de bienvenue affiché |

**Vérifications API :**
- `POST /api/auth/register` → 201 Created
- Réponse contient `token`, `userId`, `role: "ELEVE"`
- Token stocké dans `localStorage`

---

## Scénario 3 : Dashboard
**Objectif :** Vérifier l'affichage du tableau de bord après connexion.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Observer le **welcome banner** | "As-salamu alaykum, Demo ! 👋" |
| 2 | Observer les **3 stat-cards** | إجمالي النقاط, المسارات المكتملة, المواد النشative |
| 3 | Vérifier la section **"مسارات تعلّمي"** | Au moins 1 parcours seedé (Tajweed par défaut) |
| 4 | Cliquer sur **"مسار ذكي جديد"** | Redirection vers `/parcours/new` |

**Vérifications API :**
- `GET /api/users/me` → 200, user profile
- `GET /api/users/me/stats` → 200, stats
- `GET /api/parcours/mes-parcours` → 200, liste parcours

---

## Scénario 4 : Génération de Parcours IA
**Objectif :** Générer un nouveau parcours personnalisé avec l'IA.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Sur `/parcours/new`, sélectionner **Fiqh (الفقه الإسلامي)** | Select rempli |
| 2 | Cliquer sur **"توليد مساري المخصّص"** | Loading state affiché |
| 3 | Attendre ~10-15s | Redirection automatique vers `/parcours` avec nouveau parcours |

**Vérifications API :**
- `POST /api/parcours/generer` → 200
- Corps de réponse : `id`, `titre`, `matiere: "Fiqh"`, `lecons[]` (3 leçons)
- Chaque `lecon` contient `contenu` (texte généré) et `questions[]` (5 questions)

**Vérifications UI :**
- Nouvelle carte parcours apparaît dans la liste
- Badge vert "Fiqh", badge or "المست niveau 1"
- Progression à 0%

---

## Scénario 5 : Détail du Parcours
**Objectif :** Consulter les leçons d'un parcours.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Cliquer sur **"متابعة المسار"** d'un parcours | Page détail affichée |
| 2 | Vérifier l'en-tête | Titre, matière, niveau, progression |
| 3 | Observer la liste des leçons | 3 leçons numérotées (1, 2, 3) |
| 4 | Cliquer sur **"قراءة الدرس"** d'une leçon | Modal s'ouvre avec contenu arabe |
| 5 | Vérifier le contenu du modal | Texte généré par IA, badge "الدرس N", boutons fermer/quiz |
| 6 | Cliquer sur **"الانتقال إلى الاختبار"** | Redirection vers `/quiz/:leconId` |

**Vérifications API :**
- `GET /api/parcours/:id` → 200 avec `lecons` et `questions`

---

## Scénario 6 : Quiz et Évaluation IA
**Objectif :** Répondre à un quiz et obtenir une évaluation IA.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Sur `/quiz/:leconId`, lire la question | Question en arabe affichée |
| 2 | Écrire une réponse dans le textarea | Réponse enregistrée |
| 3 | Cliquer sur **"إرسال إجابتي"** | Loading "جارٍ التقييم بالذكاء الاصطناعي..." |
| 4 | Attendre ~3-5s | Évaluation affichée avec points, feedback |
| 5 | Cliquer sur **"السؤال التالي"** | Question suivante (ou fin si dernière) |

**Vérifications API :**
- `POST /api/question/soumettre` → 200
- Réponse : `evaluation` (texte arabe), `points` (0-10), `estCorrect` (boolean)
- `GET /api/question/lecon/:leconId` → questions avec `reponseAttendue`

**Vérifications UI :**
- Compteur de questions (ex: "السؤال 1 من 5")
- Badge points : "+X نقاط مكتسبة !"
- Bouton désactivé pendant soumission
- Animation fade-in sur la box d'évaluation

---

## Scénario 7 : Statistiques
**Objectif :** Vérifier la page des statistiques.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Naviguer vers `/stats` | Page stats affichée |
| 2 | Vérifier les 3 stat-cards | سلسلة الدراسة, الأسئلة المجابة, دقة الذكاء الاصطناعي |
| 3 | Vérifier le badge de réussite | "وسام التميّز: طالب مجتهد" |

**Note :** Les valeurs sont actuellement statiques (hardcodées).

---

## Scénario 8 : Logout / Sécurité
**Objectif :** Vérifier la déconnexion et la protection des routes.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Cliquer sur **"تسجيل الخروج"** dans la navbar | Redirection vers `/login` |
| 2 | Vérifier `localStorage` | Token JWT supprimé |
| 3 | Tenter d'accéder à `/dashboard` directement | Redirection vers `/login` (AuthGuard) |
| 4 | Se reconnecter avec `demo@murshid.app` / `Test@123456` | Accès restauré |

---

## Scénario 9 : Responsive Mobile
**Objectif :** Vérifier l'interface sur petit écran.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Ouvrir DevTools, activer mode mobile (iPhone 12 Pro : 390x844) | Layout adapté |
| 2 | Vérifier la navbar | Hamburger menu apparaît, liens cachés |
| 3 | Cliquer sur hamburger | Menu déroulant s'ouvre/ferme |
| 4 | Naviguer vers Dashboard | Stats en colonne unique, cartes empilées |
| 5 | Ouvrir un parcours | Leçons en pile, boutons pleine largeur |
| 6 | Ouvrir le quiz | Header empilé, actions en colonne |
| 7 | Ouvrir modal leçon | Modal plein écran, actions empilées |

---

## Scénario 10 : Navigation & Erreurs
**Objectif :** Vérifier la navigation et les états d'erreur.

| Étape | Action | Attendu |
|-------|--------|---------|
| 1 | Accéder à `/parcours/99999` (ID inexistant) | Affichage erreur backend ou message adapté |
| 2 | Naviguer vers `/quiz/abc` (ID invalide) | Message "لا توجد أسئلة متاحة" |
| 3 | Utiliser le bouton retour du navigateur | Navigation fonctionne, AuthGuard protège |
| 4 | Rafraîchir la page sur `/dashboard` | Session conservée (token valide) |

---

## Checklist Rapide Démo (5 min)
1. ☐ Health check OK
2. ☐ Register → Login → Dashboard
3. ☐ Générer parcours IA (Tajweed ou Fiqh)
4. ☐ Voir parcours dans la liste
5. ☐ Ouvrir leçon → Lire contenu
6. ☐ Quiz → Répondre → Voir évaluation IA
7. ☐ Stats
8. ☐ Logout
9. ☐ Responsive mobile check
