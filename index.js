function addProduto(){
  // criando o objeto
  var Produto = {
    marca : document.querySelector("#marca").value,
    produto : document.querySelector("#name").value,
    codigo : document.querySelector("#number").value,
    preco : document.querySelector("#preco").value
  }
  //confirmar se o produto deve ser adicionado
  let confirme = confirm("popopo")

  if(confirme == true){
    switch(Produto.marca){
      case "Seara":
        var liSe = document.createElement("li")
        var ulSe = document.querySelector("#lista-seara")
        liSe.appendChild(document.createTextNode(`(${Produto.codigo}) - ${Produto.produto} | ${Produto.preco}`))
        ulSe.appendChild(liSe)

        break;
      case "Swift":
        var liSw = document.createElement("li")
        var ulSw = document.querySelector("#lista-swift")
        liSw.appendChild(document.createTextNode(`(${Produto.codigo}) - ${Produto.produto} | ${Produto.preco}`))
        ulSw.appendChild(liSw)

        break;
      case "Friboi":
        var liFr = document.createElement("li")
        var ulFr = document.querySelector("#lista-friboi")
        liFr.appendChild(document.createTextNode(`(${Produto.codigo}) - ${Produto.produto} | ${Produto.preco}`))
        ulFr.appendChild(liFr)
        break;
      }

      alert(`${Produto.produto} foi adicionado com sucesso.`)
  }else{
    alert(`${Produto.produto} não foi adicionado.`)
  }
}