import { Router } from "express";

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res)=>{
    return res.status(200).send({message: `get all Students`})
})

studentsRoutes.get("/:id", (req, res)=>{
    const{id} = req.params;
    return res.status(200).send({message: `get students with id${id}`})
})

export default studentsRoutes;
