function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  const altoContraste = document.querySelector('#alto-contraste')
  const fonte = document.querySelector('#fonte')
  let darkMode = true
  let fontSize = "normal"

  altoContraste.addEventListener("click", () => {
    if(darkMode === true){
      darkMode = false
    }else{
      darkMode = true
    }

    alteraCorDeFundo(darkMode)
  })

  fonte.addEventListener("click", () => {
    if(fontSize === "normal"){
      fontSize = "grande"
    }else{
      fontSize = "normal"
    }

    alteraFonte(fontSize)
  })

  function alteraCorDeFundo(darkMode){
    const body = document.querySelector('body')
    const texto = document.querySelector(".texto")
    const texto2 = document.querySelector(".texto2")

    if (darkMode === true) {
      body.style.backgroundColor = "#333"
      texto.style.color = "#fff"
      texto2.style.color = "#fff"
    } else {
      body.style.backgroundColor = "#f1f1f1"
      texto.style.color = "#333"
      texto2.style.color = "#333"
    }
  }

  function alteraFonte(fontSize){
    const body = document.querySelector('body')
    const botao = document.querySelector('.todasVagas')
    var largura = window. screen.width;
    console.log(largura);
    if( largura >= 600){
       if (fontSize === "grande") {
      console.log(fontSize);
      body.style.fontSize = "25px"
      botao.style.height = "80px"
    } else {
      console.log(fontSize);
      body.style.fontSize = "20px"
      botao.style.height = "57px"
    }
    }else{
      if (fontSize === "grande") {
        console.log(fontSize);
        body.style.fontSize = "18px"
      } else {
        console.log(fontSize);
        body.style.fontSize = "smaller"
    }
   

  }
}