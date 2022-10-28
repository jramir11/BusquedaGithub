//con un boton rescatar de API el nombre
let nombreDiv = document.querySelector("#nombreApi");


function makeNombreApi(data) {
    var res = `<div class="nombreApi">
                    <h3>Nombre = ${data.name}</h3>
                </div>`
    return res;
}

async function getGithub() {
    let response = await fetch("https://api.github.com/users/jramir11");
    let dataApi = await response.json();

   //console.log(dataApi);
   nombreDiv.innerHTML= makeNombreApi(dataApi);  // dataApi.nombre;
}

//getGithub();  para llamada si no hubiese boton

