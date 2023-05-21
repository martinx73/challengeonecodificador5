function encriptar() {
  let texto = document.getElementsByClassName("textoarea")[0].value;
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  if (texto.length != 0) {
    document.getElementsByClassName('textoarea2')[0].value = textoCifrado;
  }
}

function desencriptar() {
  let texto = document.getElementsByClassName("textoarea")[0].value;
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  if (texto.length != 0) {
    document.getElementsByClassName('textoarea2')[0].value = textoCifrado;
  } 
}

function limpia(){
  const box1 = document.getElementsByClassName('muneco')[0];
  const box2 = document.getElementsByClassName('floromuneco1')[0];
  const box3 = document.getElementsByClassName('floromuneco2')[0];
  // 👇️ hides element (still takes up space on the page)
  //box.style.visibility = 'hidden';
  // 👇️ removes the element from the DOM
  box1.style.display = 'none';
  box2.style.display = 'none';
  box3.style.display = 'none';
  const box5 = document.getElementsByClassName('textoarea2')[0];
  box5.style.display = 'block';
  const box4 = document.getElementById('bot3');
  box4.style.display = 'block';
}

function encripta() {
  limpia()
  encriptar();
}

function desencripta() {
  limpia();
  desencriptar();
}

function copiar() {
  const element = document.querySelector('#textoarea2');
  element.select();
  element.setSelectionRange(0, 99999);
  element.style.outline = 'none';
  document.execCommand('copy');
  document.getElementById("bot3").innerHTML = "Copiado";
  setTimeout(() => (document.getElementById("bot3").innerHTML = "Copiar y Salir"), 2000);
  setTimeout(() => (document.location.reload()), 2000);
}