

const validate_body = (request, response, next) => {
    const {body} = request;

    if (body.title == undefined ){
        return response.status(400).json({message:'titulo indefinido'})
    };
    if (body.title == '' ){
        return response.status(400).json({message: 'titulo vazio'})
    };

    next();
};

const validate_status = (request, response, next) => {
    const { body } = request;
  
    if (body.status === undefined) {
      return response.status(400).json({ message: 'status indefinido' });
    }
  
    if (body.status === '') {
      return response.status(400).json({ message: 'status vazio' });
    }
  
    next();
  };

const validate_description = (request, response, next) => {
    const { body } = request;
  
    if (body.description === undefined) {
      return response.description(400).json({ message: 'descrição indefinido' });
    }
  
    if (body.status === '') {
      return response.description(400).json({ message: 'descrição vazia' });
    }
  
    next();
  };
module.exports = {
    validate_body,
    validate_status,
    validate_description,
}