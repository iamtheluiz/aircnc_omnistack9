/* Rotas do backend */

const express = require('express'); // Importa o express
const multer = require('multer'); // Importa o multer
const uploadConfig = require('./config/upload');  // Importa as configurações de upload

// Importa os controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

// Define a variável que guardará todas as rotas
const routes = express.Router();

// Determina as configurações de upload
const upload = multer(uploadConfig);

// Define as possíveis rotas
routes.post('/sessions/', SessionController.store);

routes.get('/spots/', SpotController.index);
routes.post('/spots/', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard/', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

// Exporta as rotas
module.exports = routes;