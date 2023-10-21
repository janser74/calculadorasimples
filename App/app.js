function calcular(tipo, valor) {

    if (tipo === "acao") {

      if (valor === 'c') {
        //limpar o visor
        document.getElementById ("resultado").value = ""
      }

      if (valor === '+' || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
        document.getElementById ("resultado").value += valor
      }

      if (valor === "=") {
        //eval transforma o que seria string em uma função matemática no código
        var valor_campo = eval (document.getElementById("resultado").value) // o valor do campo esta nesse codigo
        document.getElementById ("resultado").value = valor_campo // recuperando o valor do codigo e apresentando na tela.
      }


    } else if (tipo === "valor") {
      //var valor_campo = document.getElementById ("resultado").value
      document.getElementById ("resultado").value += valor

    }
  }

  //Lógica do botão que muda a cor
 
function clicar() {
    document.querySelector('.bola').addEventListener('click', (e)=>{
    e.target.classList.toggle('mover-bola');
    document.querySelector('.calculadora').classList.toggle('light');
});
}
