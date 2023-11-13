export const getCurso = (req, res)=>{
    return res.status(200).send({message: "get all students controller"})
};

export const getCursosById = (req, res)=>{
    const {id} = req.params;
    return res.status(200).send({message: `get  students whith id ${id} ontroller`})
};


export const createCursos = (req, res)=>{
    const { name, descricao, limAlunos } = req.body;

    if (!name || !descricao || !limAlunos) {
        return res.status(400).send
            ({ message: "sem nenhuma informação" })
    }
    return res.status(200).send({ message: `Olá${name}!!,  sua descrição é ${descricao}, o limite de alunos é${limAlunos}` })

   
};


export const Update =(req, res)=>{
    const {id} = req.params;
    const{name, descricao, limAlunos} = req.body;


    if(!name|| !descricao || ! limAlunos){
        return res.status(400).send
        ({ message: "não foi" })

    }
    return res.status(400).send({ message: `estitado seu nome é ${name}, descricao ${descricao}, limAlunos${limAlunos}` })
}


export const deleteCursos = (req, res)=>{
    const{id} = req.params;
    return res.status(200).send({message: `deletou ${id}😂😁`})
};