const URL = "https://dummyjson.com/products"

async function consumirDatos() {
    try {
        const leerDatos = await fetch(URL);
        const convertir = await leerDatos.json();
        const productos = convertir.products;
        const printDatos = document.getElementById("verDatosTablaDummy");

        productos.forEach(element => {
            const filaRegistro = document.createElement("tr");
            filaRegistro.innerHTML = `
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.category}</td>
                <td>${element.price}</td>
                <td>${element.stock}</td>
                <td>${element.brand}</td>
                <td>${element.availabilityStatus}</td>
            `;

            printDatos.appendChild(filaRegistro);

        });
    } catch (error) {
        console.error("error en datos: ", error)
    }
}

consumirDatos();