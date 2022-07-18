let iniciar = document.getElementById("iniciar")
let iniciando = document.getElementById("iniciando")
let contagem = document.getElementById("contagem")
let video = document.getElementsByTagName("video")[0]
let bum = document.getElementById("bum")
let audio = document.getElementById("audio")
function contagemRegressiva() {

    let i = 10
    contagem.innerText = i
    setInterval(() => {
        if (i > 0) {
            i--
            contagem.innerText = i
            if(i < 6){
                contagem.style.color = "red"
                if(i == 0){
                    contagem.style.display = "none"
                    video.style.display = "flex"
                    bum.style.display = "flex"
                    audio.play()

                }
            }
           
        }
    }, 1000)


}


iniciar.addEventListener("click", () => {

    iniciar.style.display = "none"
    iniciando.style.display = "flex"
    iniciando.classList.add("animate1")
    setTimeout(() => {
     iniciando.style.display = "none"  
    }, 1000);
    setTimeout(() => {
        contagem.style.display = "flex"
        contagemRegressiva()
    }, 2000);
})




