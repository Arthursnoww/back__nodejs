const express = require('express');
const taskscontroller = require('./controllers/taskscontrollers');
const tasksmiddlewares = require('./middlewares/middlewares');
const router = express.Router();

router.get('/tasks', taskscontroller.verProjeto);
router.post('/tasks',tasksmiddlewares.validate_body, taskscontroller.criarProjeto);
router.delete('/tasks/:id', taskscontroller.deletarProjeto);
router.put('/tasks/:id', tasksmiddlewares.validate_body, tasksmiddlewares.validate_status, taskscontroller.editarProjeto);

module.exports = router;