import { Router } from "express";

import { getCurso, getCursosById,createCursos,Update, deleteCursos } from "../controllers/cursos.controller.js";


const cursosRoust = Router();

cursosRoust.get("/", getCurso);


cursosRoust.get("/:id", getCursosById );
cursosRoust.post("/", createCursos);
cursosRoust.put("/:id", Update );
cursosRoust.delete("/:id", deleteCursos)


export default cursosRoust;