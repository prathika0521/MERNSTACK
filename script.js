async function loadData() {

    const response = await fetch("data/users.json");

    const users = await response.json();

    let output = "";

    users.forEach(user => {
        output += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.role}</p>
            </div>
        `;
    });

    document.getElementById("output").innerHTML = output;
}