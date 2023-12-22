function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo, usando óculos escuros e camisa preta com um fundo degradê roxo e azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo, usando óculos e camisa preta com um fundo degradê roxo e azul"
    )
  }
}
