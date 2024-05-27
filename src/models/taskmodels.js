const connection = require('./connection');

const verProjeto = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
  };

const criarProjeto = async(tarefa /*estado, descricao*/) => {
    const {title} = tarefa; 
    //const {status} = estado;    
    const dateUTC = new Date(Date.now()).toUTCString();
    //const {description} = descricao;

    const frase = 'INSERT INTO tasks (title, status, created_at, description) VALUES (?, ?, ?, ?)';

    const [tarefacriada] = await connection.execute(frase, [title, 'pendente', dateUTC, 'pendente']);
    return {insertId: tarefacriada.insertId};
};

const deletarProjeto = async (id) => {
    const removetarefa = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removetarefa;
};

const editarProjeto = async (id, tasks) => {
    const { title, status, description } = tasks;

    const frase = 'UPDATE tasks SET title = ?, status = ?, description = ? WHERE id = ?';

    const {editarProjeto} = await connection.execute(frase, [title, status, description, id]);
    return editarProjeto;

}

module.exports = {
    verProjeto,
    criarProjeto,
    deletarProjeto,
    editarProjeto,
}