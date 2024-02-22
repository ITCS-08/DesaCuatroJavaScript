
 
import propiedadesVenta from "./propiedades_venta.js"
import propiedadesAlquiler from "./propiedades_alquiler.js"


const mostrarPropiedades = (propiedades, containerId) => {

  const container = document.getElementById(containerId)

  const propiedadesPorMostrar = []

  for (let i = 0; i < 3; i++){
    if (i < propiedades.length){

      propiedadesPorMostrar.push(propiedades[i])
    }
  }

    propiedadesPorMostrar.forEach((propiedad) => {

      const card = document.createElement("div")
      card.className = "col-md-a mb-4"
      card.innerHTML = `

        <div class="card"> 
        <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen de la Proiedad"
        />     
        <div class="card-body">   
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>   
        <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones}
        <i class="fas fa-bath"></i> ${propiedad.ubicacion}
        <i class="fas fa-dollar-sign"></i> ${propiedad.costo}

        <p class="${propiedad.smoke ? "text-succes" : "text-danger"}">
          <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i>
          ${propiedad.smoke ? "Permitido Fumar" : "No se permite fumar"}        
        </p>

        <p class="${propiedad.pets ? "text-succes" : "text-danger"}">
        <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i> 
        ${propiedad.pets ? "Permitido Mascotas" : "No se permiten MAscotas"}          
        </p>
        </div>
        </div>
      `;

        container.appendChild(card)

    })

};

windows.onload = () => {

  mostrarPropiedades(propiedadesVenta, "propiedadesVentaContainer" )
  mostrarPropiedades(propiedadesAlquiler, "propiedadesAlquilerContainer")

}



const mostrarPropiedadesVenta = () => {
    const container = document.getElementById("soloPropiedadesVenta")

    propiedadesVenta.forEach((propiedad) => {
        const card = document.createElement("div")
        card.className = "col-md-a mb-4"
        card.innerHTML = `
        
            <div class="card">
            <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="Imagen de la propiedad"
            />
            <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones}
            <i class="fas fa-bath"></i> ${propiedad.ubicacion}
            <i class="fas fa-dollar-sign"></i> ${propiedad.costo}


            <p class="${propiedad.smoke ? "text-sucess" : "text-danger"}">
                <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i>
                ${propiedad.smoke ? "Esta permitido fumar" : "No se permite fumar"}
            </p>

            <p class="${propiedad.pets ? "text-sucess" : "text-danger"}">
                <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
                ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
            </p>
            </div>
           </div> 
        `;
        container.appendChild(card)
    // container ,     card == lo que acabamos de crear
    })
};


mostrarPropiedadesVenta()
  

