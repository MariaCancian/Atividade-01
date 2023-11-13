import { Router } from "express";
import studentsRoutes from "./students.routes.js";
import cursosRoust from "./cursos.routes.js";

const rotas = Router();

rotas.use("/students", studentsRoutes)

rotas.use("/cursos", cursosRoust )
 
rotas.get("/", (req, res)=>{
    return res.status(200).send({message: "servidor ok!"})
})

export default rotas;