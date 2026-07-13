// URL de l'API backend deploye sur Render.
// Doit correspondre au nom du service backend defini dans render.yaml :
//   https://<nom-du-service-backend>.onrender.com/api
// Si vous renommez le service, mettez cette valeur a jour.
export const environment = {
  production: true,
  apiUrl: 'https://backend.onrender.com/api'
};
