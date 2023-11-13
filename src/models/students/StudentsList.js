export class StudentList{
    constructor(){
        this.students = [];
    }


getAllStudents(){
    return this.students;
}

getStudents(id){
    return this.students.find((student)=> student .id === id);
}

addStudents(student){
    this.students.push(student);
}
updateStudante(id, name, age, email){
    this.students =this.students.map((student)=>{
if(student.id===id){
    student.name=name;
    student.age=age;
    student.email=email;

}
return this.getStudents(id)
    })
   
    return this.students;
}

removeStudent(id)
{
    this.students=this.students.filter((student)=>student.id!= id)
}}