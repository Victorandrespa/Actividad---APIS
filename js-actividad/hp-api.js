const URL = "https://hp-api.onrender.com/api/characters"

async function consumirDatos() {
    try {
        const leerDatos = await fetch(URL);
        const convertir = await leerDatos.json();
        const printDatos = document.getElementById("verDatosTarjetasHarry");

        convertir.forEach(element => {
            const productCard = document.createElement("div");
            productCard.classList.add("card", "card-size");
            productCard.innerHTML = `
                <h4 class="m-4 text-center">${element.name}</h4>
                <img src="${element.image}" alt="${element.name}" class="img-card">
                <div class="card-body">
                    <p>House: ${element.house}</p>
                    <p>Actor: ${element.actor}</p>
                 </div>
            `;

            printDatos.appendChild(productCard);

        });
    } catch (error) {
        console.error("error en datos: ", error)
    }
}

consumirDatos();