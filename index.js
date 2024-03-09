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

RenderStudents();