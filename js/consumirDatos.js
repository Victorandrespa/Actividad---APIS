const URL= "http://127.0.0.1:5500/js/datos.js"

async function consumirDatos() {
    try {
        const resultado = await fetch(URL);
        const convertir = await resultado.json();
        const ubicacion = document.getElementById("verDatos");

        convertir.forEach(persona => {
            const lista = document.createElement("ul");
            lista.innerHTML = `
                <li>${persona.carnet}</li>
                <li>${persona.nombre}</li>
                `;

            ubicacion.appendChild(lista);

        });
    } catch (error) {
        console.error("error en datos: ", error)
    }
}

consumirDatos();