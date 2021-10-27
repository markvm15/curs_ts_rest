import axios from 'axios';
const baseUrl = 'https://3220bb1c-d667-4645-9c7b-4932cb66720a.mock.pstmn.io';

type student = {
    id?:number,
    name:string,
    surname:string,
    dni:string
};

async function main(){
    const token = await login();
    const students = await getStudents(token);
    students.forEach(s=>{console.log(s)});
    await addStudent({
        "name":"Marc",
        "surname":"vives",
        "dni":"12345678A"
    },token);
    await updateStudent({
        "name":"Marc",
        "surname":"vives",
        "dni":"48000000B"
    },1,token);
    await deleteStudent(1,token);

}
async function login():Promise<string> {
    const response_login:{data:{token:string}} = await axios.post(`${baseUrl}/login`,
        {
            user:"marc.vives",
            password:"abcd1234"
        }
    );
    if(response_login.data.token){
        return response_login.data.token;
    }
    return "";
}
async function getStudents(token:string):Promise<student[]> {
    const response_login:{data:student[]} = await axios.get(`${baseUrl}/students`,
        {
            headers:{
                Authorization:token
            }
        }
    );
    if(response_login.data.length>0){
        return response_login.data;
    }
    return [];
}
async function addStudent(newStudent:student,token:string){
    const response_login:{data:student} = await axios.post(`${baseUrl}/students`,
        newStudent,
        {
            headers:{
                Authorization:token
            }
        }
    );
    if(response_login.data){
        console.log(`Student added: ${JSON.stringify(response_login.data)}`);
    }
}
async function updateStudent(student:student,id:number,token:string){
    const originalStudent:student = await getStudent(id,token);
    const response_login:{data:student} = await axios.put(`${baseUrl}/students/${id}`,
        student,
        {
            headers:{
                Authorization:token
            }
        }
    );
    if(response_login.data){
        console.log(`Student: ${JSON.stringify(originalStudent)} modified to: ${JSON.stringify(response_login.data)}`);
    }
}
async function getStudent(id:number,token:string):Promise<student>{
    const response_login:{data:student} = await axios.get(`${baseUrl}/students/${id}`,
        {
            headers:{
                Authorization:token
            }
        }
    );
    if(response_login.data){
        return response_login.data;
    }
}
async function deleteStudent(id:number,token:string) {
    const response_login:{data:{deleted:boolean}} = await axios.delete(`${baseUrl}/students/${id}`,
        {
            headers:{
                Authorization:token
            }
        }
    );
    return response_login.data.deleted;
}
main();