function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayuser(data))

}
function displayuser(data) {
    const ul = document.getElementById('user-list');
    for (user of data) {
        const li = document.createElement("li");
        li.innerText = user.name;

        ul.append(li);
    }
}


/*function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayuser(data))

}
function displayuser(data) {
    const div = document.getElementById('user-list');
    for (user of data) {
        const ul = document.createElement("ul");
        ul.innerHTML = `<li> name: ${user.name}</li>
        <li>email: ${user.email}</li>
        `
        div.appendChild(ul);
    }
}*/