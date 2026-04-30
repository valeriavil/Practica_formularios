function mostrarDatos() {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let correo = document.getElementById("correo").value;
  let grupo = document.getElementById("grupo").value;
  let telefono = document.getElementById("telefono").value;
  let comentario = document.getElementById("comentario").value;

  let fecha = document.getElementById("fecha").value;
  let ciudad = document.getElementById("ciudad").value;
  let materia = document.getElementById("materia").value;

  // Validación básica
  if(nombre === "" || edad === "" || correo === "") {
    alert("Por favor completa los campos obligatorios");
    return;
  }

  document.getElementById("resultado").innerHTML = `
    <h3>Datos capturados:</h3>
    Nombre: ${nombre} <br>
    Edad: ${edad} <br>
    Correo: ${correo} <br>
    Grupo: ${grupo} <br>
    Teléfono: ${telefono} <br>
    Comentario: ${comentario} <br>
    Fecha: ${fecha} <br>
    Ciudad: ${ciudad} <br>
    Materia favorita: ${materia}
  `;
}
