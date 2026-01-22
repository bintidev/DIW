
let dialogo = document.getElementById("miDialogo");
let imagenGrande = document.getElementById("imagenGrande");
let descripcionImagen = document.getElementById("descripcion");
let botoncierre = document.getElementById("cerrarDialogo");

botoncierre.addEventListener("click",() => {
    dialogo.close();
});

let nombre = [ 
    "a.jpg",
    "b.webp",
    "c.jpg",
    "d.webp",
    "e.jpg"
];

let descripciones = [ 
    "Montaña",
    "Chaval",
    "Colega",
    "Foto",
    "Triste"
];

for (let i = 0; i < nombre.length; i++) {

    let imagenSmall = document.getElementById("img" + (i + 1));

    imagenSmall.addEventListener("click", () => {

        imagenGrande.src="./assets/img/" + nombre[i];
        descripcionImagen.innerHTML = descripciones[i];
        dialogo.showModal();

    });

}


