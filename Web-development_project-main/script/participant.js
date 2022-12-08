let AddStudent = document.querySelector('button');
let table = document.querySelector('table');

let idInput = document.querySelector('#student_id');
let nameInput = document.querySelector('#name');
let groupInput = document.querySelector('#group_no');

AddStudent.addEventListener('click', () => {
    let student_id = idInput.value;
    let name = nameInput.value;
    let group = groupInput.value;
    let template = `
                <tr>
                    <td>${student_id}</td>
                    <td>${name}</td>
                    <td>${group}</td>
                </tr>`;
    table.innerHTML += template;
});
