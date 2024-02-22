

import propiedadesVenta from "./propiedades_venta.js"


const mostrarPropiedadesVenta = () => {

  const container = document.getElementById("soloPropiedadesVenta")

  propiedadesVenta.forEach((propiedad) =>{

    const card = document.createElement("div")
      card.className = "col-md-a mb-4"
      card.innerHTML = `

        <div class="card"> 
        <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen de la Propiedad"
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

mostrarPropiedadesVenta()