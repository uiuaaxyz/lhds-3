/* =====================================================
   La Hermana de Shakespeare - JavaScript
   Funciones tomadas de los ejemplos "How To" de W3Schools.
   ===================================================== */

/* Menú para celular
   W3Schools How To: Responsive Top Navigation */
function abrirMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Filtro de la cartelera
   W3Schools How To: Filter Elements */
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

/* Marca el botón de filtro activo */
var btnContainer = document.getElementById("myBtnContainer");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("btn-filtro");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = btnContainer.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  filterSelection("all");
}

/* Pestañas de convocatorias
   W3Schools How To: Tabs */
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

var defaultTab = document.getElementById("defaultOpen");
if (defaultTab) defaultTab.click();

/* Ventana de inscripción
   W3Schools How To: Modal */
function abrirFormulario(nombre) {
  document.getElementById("campoConvocatoria").value = nombre;
  document.getElementById("formulario").style.display = "block";
  document.getElementById("gracias").style.display = "none";
  document.getElementById("formModal").style.display = "block";
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}

function enviarFormulario(event) {
  event.preventDefault();
  // Para recibir las respuestas, conecta este formulario a Formspree o Google Forms.
  document.getElementById("formulario").style.display = "none";
  document.getElementById("gracias").style.display = "block";
}

/* Galería: ver foto en grande
   W3Schools How To: Modal Images */
function verImagen(img) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("imgGrande").src = img.src;
  document.getElementById("caption").innerHTML = img.alt;
}

/* Cerrar cualquier ventana al hacer clic afuera */
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

/* Botón flotante "Próximo evento"
   W3Schools How To: Scroll To Top Button */
window.onscroll = function () {
  var boton = document.getElementById("botonFlotante");
  if (!boton) return;
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
};
