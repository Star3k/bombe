//se seleccionan los textos del la aplicación web
const areadetexto = document.querySelector(".text_Enc");
const encrip = document.querySelector(".encrip");

//Las "llaves" de encriptación que utilizaremos son las siguientes:
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Función al hacer click en el botón encriptar
function botonEnc(){
    const encriptado = encriptar(areadetexto.value);
    encrip.value = encriptado;
    areadetexto.value = "";
}

//Función para encriptar el texto
function encriptar(stringEncriptada) {
let arregloEnc = [["e","enter"], ["i","imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();
for(let i=0;i<arregloEnc.length; i++){
    if(stringEncriptada.includes(arregloEnc[i][0]))
        {stringEncriptada=stringEncriptada.replaceAll(arregloEnc[i][0],arregloEnc[i][1]);
        }
}
return stringEncriptada;
}

//Función para desencriptar el texto
function desencriptar(stringDesencriptada) {
    //el arreglo ahora tiene las llaves a la inversa
    let arregloEnc = [["enter","e"], ["imes","i"],["ai", "a"],["ober","o"],["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i=0;i<arregloEnc.length; i++){
        if(stringDesencriptada.includes(arregloEnc[i][0]))
            {stringDesencriptada=stringDesencriptada.replaceAll(arregloEnc[i][0],arregloEnc[i][1]);
            }
    }
    return stringDesencriptada;
    }

//Función al hacer click en el botón encriptar
function botonDes(){
    const encriptado = desencriptar(areadetexto.value);
    encrip.value = encriptado;}

//Función copiar el texto encriptado
function copiar(){
    const encriptado = encrip.value;
  navigator.clipboard.writeText(encriptado);
  document.querySelector(".copiar").textContent = "Texto Copiado!";
  setTimeout(() => {
    document.querySelector(".copiar").textContent = "Copiar";
  }, 2000);
 
   
}