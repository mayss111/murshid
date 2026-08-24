# Murshid (مرشد)

Murshid is an AI-powered Islamic learning platform designed to generate personalized learning paths (Tajweed, Fiqh, etc.) and evaluate user knowledge through interactive quizzes.

## Features
- **AI-Generated Learning Paths:** Create dynamic lessons based on the selected topic.
- **Interactive Quizzes:** Answer questions and receive detailed, AI-evaluated feedback in Arabic.
- **User Dashboard:** Track progress, completed paths, and points.
- **Authentication:** Secure JWT-based authentication.
- **Responsive UI:** Modern Arabic RTL design tailored for desktop and mobile.

## Technology Stack
- **Backend:** Spring Boot 3.3 (Java 17, Maven, Lombok, JWT, JPA)
- **Database:** PostgreSQL
- **Frontend:** Angular 17 (TypeScript 5.3)
- **AI Provider:** Local Ollama (`llama3.2`) with a Groq API alternative (`GroqService.java`)

## Getting Started

### Prerequisites
- JDK 17
- Node.js (for Angular frontend)
- PostgreSQL (or Docker)
- [Ollama](https://ollama.com/) (installed locally with `llama3.2` model)

### Run via Docker Compose
To run the full stack (PostgreSQL, Backend, Frontend) with Docker:
```bash
docker-compose up -d
```
Services exposed:
- Frontend: `http://localhost:80`
- Backend API: `http://localhost:8085`
- Database: `localhost:5432`

### Local Development

#### 1. Backend
Navigate to the `backend` directory. Ensure you have a `.env` file (based on `.env.example`).
If you're using a local PostgreSQL, ensure it matches your DB credentials.
```bash
# Uses PowerShell script to run
cd backend
./run-backend.ps1
```
The backend API starts on `http://localhost:8085`.

#### 2. Frontend
Navigate to the `frontend` directory.
```bash
cd frontend
npm install
npm start
```
The Angular app will run on `http://localhost:4200`.

## AI Setup
The project defaults to a local Ollama instance running `llama3.2`.
- Ensure Ollama is running (`http://localhost:11434`).
- Pull the model: `ollama run llama3.2`.
- To use Groq instead, provide a valid API key in the backend `.env` file and adjust the service logic. Note: Remember not to commit your `.env` file.

## Testing & Demos
For comprehensive test scenarios, please check [TEST_CASES_DEMO.md](./TEST_CASES_DEMO.md).

## Production Build (Frontend)
To build the Angular frontend for production:
```bash
cd frontend
npm run build
```
The build artifacts will be located in the `dist/murshid-web` directory.
