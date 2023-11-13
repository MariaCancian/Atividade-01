import { Student } from "../models/students/Students.js"
import { StudentList } from '../models/students/StudentsList.js'

const list = new StudentList();

export const getStudents = (req, res) => {
    const students = list.getAllStudents();

    if (students.length) {
        return res.status(200).send(students)
    }
    return res.status(200).send({ message: "não há alunos cadastrados" })
};

export const getStudentsById = (req, res) => {
    const { id } = req.params;
    const student = list.getStudents(id)

    if(!student){
        return res.status(404).send({message: "aluno não encontrado"})

    }
    return res.status(200).send(student)
};

export const CreateStudents = (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send
            ({ message: "missing required informations" })
    }
    const student = new Student(name,email, age);
    list.addStudents(student);

    // age > 18 ? res.status(201).send({
    //     message: "aluno com idade certa ",
    // })
    //     : res.status(201).send({ message: "aluno menor de 18 anos" })

  
    return res.status(200).send({ message: student })


};
export const Update = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;


    if (!name || !email || !age) {
        return res.status(400).send
            ({ message: "não foi" })

    }

    const student = list.getStudents(id);

    if(!student){
    return res.status(404).send({ message: `aluno não encontrado` })
    }
    const updateStudante= list.updateStudante(id,name, age, email)
return res.status(200).send({message: updateStudante})

}


export const deleteStudents = (req, res) => {
    const { id } = req.params;
    const student = list.getStudents(id);

    if(!student){
        return res.status(404).send({message: "foi nao"})
    }
    list.removeStudent(id)
    return res.status(200).send({ message: "deletou poha", student })
};
