
let input_top = document.getElementsByClassName("top_input")[0];
let input_bottom = document.getElementsByClassName("top_input")[1];

let p_check_top = document.getElementsByClassName("check")[0];
let p_check_bottom = document.getElementsByClassName("check")[1];

console.log(input_top)


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  input_top.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.correo.test(texto)) {

      console.log("nombre correcto");
      
      p_check_top.style.visibility = "hidden";
      p_check_top.style.display = "none";
      
    } else {
      console.log("nombre incorrecto");
      p_check_top.style.visibility = "visible";
      p_check_top.style.display = "block";
      p_check_top.style.margin = "5px 0 0 0"

    }
  });

  input_bottom.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.correo.test(texto)) {

      console.log("nombre correcto");
      
      p_check_bottom.style.visibility = "hidden";
      p_check_bottom.style.display = "none";
      
    } else {
      console.log("nombre incorrecto");
      p_check_bottom.style.visibility = "visible";
      p_check_bottom.style.display = "block";
      p_check_bottom.style.margin = "5px 0 0 0"
    }
  });