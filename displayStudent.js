function DisplayStudent()
{
    let ddl_students = document.getElementById('ddl_students');

    // let divStudentName = document.createElement('div');
    // divStudentName.className = "studentNameDiv"
    // divStudentName.innerHTML="";

    let pStudentName = document.createElement('p');
    pStudentName.className = "studentNameParagraph"
    pStudentName.innerHTML="";

    let divStudent = document.getElementById('studentDiv');
    divStudent.innerHTML="";
    
    let student = ddl_students.value;
    //divStudentName.innerHTML = student;
    pStudentName.innerHTML = student;
    divStudent.appendChild(pStudentName);
}