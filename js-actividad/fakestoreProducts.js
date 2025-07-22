const URL = "https://fakestoreapi.com/products"

async function consumirDatos() {
    try {
        const leerDatos = await fetch(URL);
        const convertir = await leerDatos.json();
        const printDatos = document.getElementById("verDatosTarjetas");

        convertir.forEach(element => {
            const productCard = document.createElement("div");
            productCard.classList.add("card", "card-size");
            productCard.innerHTML = `
                <h4 class="m-4 text-center">${element.title}</h4>
                <img src="${element.image}" alt="${element.title}" class="img-card">
                <div class="card-body">
                    <p>Price: $${element.price.toFixed(2)}</p>
                    <p>Category: ${element.category}</p>
                 </div>
            `;

            printDatos.appendChild(productCard);

        });
    } catch (error) {
        console.error("error en datos: ", error)
    }
}

consumirDatos();