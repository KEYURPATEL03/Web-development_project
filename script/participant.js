let AddStudent = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = document.querySelector('#name');
let idInput = document.querySelector('#student_id');
let groupInput = document.querySelector('#group_no');

AddStudent.addEventListener('click', () => {
    let name = nameInput.value;
    let student_id = idInput.value;
    let group = groupInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${student_id}</td>
                    <td>${group}</td>
                </tr>`;
    table.innerHTML += template;
});
