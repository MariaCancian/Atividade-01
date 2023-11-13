import { Router } from "express";

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res) => {
    return res.status(200).send({ message: `get all Students` })
})

studentsRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `get students with id${id}` })
})

studentsRoutes.post("/", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send
            ({ message: "missing required informations" })
    }
    return res.status(200).send({ message: `create studentes whith name${name}, email ${email}, age${age}` })

   
});

studentsRoutes.put("/:id", (req, res)=>{
    const {id} = req.params;
    const{name, email, age} = req.body;
    if(!name|| !email || ! age){
        return res.status(400).send
        ({ message: "não foi" })

    }
    return res.status(400).send({ message: `estitado seu nome é ${name}, email ${email}, age${age}` })

})


studentsRoutes.delete("/:id",(req, res)=>{
    const{id} = req.params;
    return res.status(200).send({message: `deletou poha ${id}`})
});


export default studentsRoutes;
