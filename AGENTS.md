# AGENTS.md — Murshid

## Stack
- Backend: Spring Boot 3.3 (Java 17, Maven, Lombok, JWT, JPA/PostgreSQL)
- Frontend: Angular 17 (TypeScript 5.3)
- AI: Ollama (`llama3.2`) via `backend/src/main/java/com/murshid/service/GroqService.java`
- Goal: Migrate AI from Groq to local Ollama (already installed)

## Commands
- Backend dev: `backend/run-backend.ps1` (auto-detects JDK 17, downloads Maven 3.9.6 to `.mvn/`)
- Frontend dev: `cd frontend && npm start` (port 4200)
- Full stack: `docker-compose up -d` (postgres:5432, backend:8085, frontend:80)
- Frontend prod build: `cd frontend && npm run build` → outputs to `dist/murshid-web`

## Architecture
- Backend entrypoint: `backend/src/main/java/com/murshid/MurshidApplication.java`
- Frontend entrypoint: `frontend/src/main.ts`
- API base: `/api`
- DB schema managed by Hibernate `ddl-auto=update`

## AI Provider
- Current: Ollama local (`llama3.2`). Env `OLLAMA_API_URL` defaults to `http://localhost:11434`, model defaults to `llama3.2`.
- Endpoint: `http://localhost:11434/api/generate` (non-streaming).
- Note: `.env` is NOT in `.gitignore` and contains a live Groq key. Remove or rotate it.

## Testing
- No backend or frontend tests exist.
- Frontend `npm test` is configured but has no project-specific specs.

## Security / Lint
- After any file edit, run Codacy analysis per `.github/instructions/codacy.instructions.md`.
- Lombok requires IDE annotation processing enabled.
