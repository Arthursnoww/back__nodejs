const { request, response } = require("../app");
const tasksModel = require("../models/taskmodels");

const verProjeto = async(_request, response) =>{
    const tasks = await tasksModel.verProjeto();
    return response.status(200).json(tasks);
};

const criarProjeto = async(request, response) =>{
    const tarefacriada = await tasksModel.criarProjeto(request.body);
    return response.status(201).json(tarefacriada);
};
const deletarProjeto = async(request, response) =>{
    const { id } = request.params;

    await tasksModel.deletarProjeto(id);
    return response.status(204).json();
  };

const editarProjeto = async (request, response) => {
    const {id} = request.params;
  
    await tasksModel.editarProjeto(id, request.body);
    return response.status(204).json();
  };
  


module.exports = {
    verProjeto,
    criarProjeto,
    deletarProjeto,
    editarProjeto,
}