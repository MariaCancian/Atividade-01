import { Router } from "express";
//sempre importar o ROUTER
import { getStudents } from "../controllers/students.controller.js";
import { getStudentsById, CreateStudents, Update, deleteStudents } from "../controllers/students.controller.js";


const studentsRoutes = Router();
//criada uma variavel

//criada para pegar os students
studentsRoutes.get("/", getStudents)

studentsRoutes.get("/:id", getStudentsById )

studentsRoutes.post("/", CreateStudents)

studentsRoutes.put("/:id", Update)


studentsRoutes.delete("/:id",deleteStudents);


export default studentsRoutes;
