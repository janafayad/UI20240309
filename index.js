function RenderStudents()
{
    let ddl_students = document.getElementById('ddl_students');
    fetch('https://api20240309.onrender.com/Students')
      .then(response => response.json())
      .then(data => {
        data.forEach(student => {
            let option = document.createElement('option');
            option.innerHTML = student.name;
            ddl_students.appendChild(option);
        });
      })
}

function DisplayStudent()
{
    let ddl_students = document.getElementById('ddl_students');
    let span = document.createElement('span');
    let divStudentName = document.getElementById('studentName');
    divStudentName.innerHTML="";
    let student = ddl_students.value;
    span.innerHTML = student;
    divStudentName.appendChild(span);
}

RenderStudents();