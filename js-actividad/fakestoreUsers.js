const URL = "https://fakestoreapi.com/users"

async function consumirDatos() {
    try {
        const leerDatos = await fetch(URL);
        const convertir = await leerDatos.json();
        const printDatos = document.getElementById("verDatosTabla");

        convertir.forEach(element => {
            const filaRegistro = document.createElement("tr");
            filaRegistro.innerHTML = `
                <td>${element.id}</td>
                <td>${element.name.firstname}</td>
                <td>${element.name.lastname}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.phone}</td>
                <td>${element.address.city}</td>
                <td>${element.address.zipcode}</td>
            `;

            printDatos.appendChild(filaRegistro);

        });
    } catch (error) {
        console.error("error en datos: ", error)
    }
}

consumirDatos();