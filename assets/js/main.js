function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  })
}

const relogio = document.querySelector(".relogio")
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const zerar = document.querySelector(".zerar")
let segundos = 0
let timer

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++
    relogio.innerHTML = getTimeFromSeconds(segundos)
  }, 1000)
}
iniciar.addEventListener("click", function (event) {
  iniciaRelogio()
  relogio.style.color = "black"
})

pausar.addEventListener("click", function (event) {
  clearInterval(timer)
  relogio.style.color = "red"
})

zerar.addEventListener("click", function (event) {
  clearInterval(timer)
  segundos = 0
  relogio.innerHTML = getTimeFromSeconds(segundos)
})
