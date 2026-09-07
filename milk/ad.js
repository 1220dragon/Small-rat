container = document.createElement("div")
container.style.background = 'url("https://smallrat.netlify.app/smallrat.png")'
container.style.width = "fit-content";
container.style.height = "fit-content";
container.style.position = "fixed";
container.style.display = "flex";
container.addEventListener('click', function(){
    this.remove()
})
container.style.top = "50%";
container.style.left = "50%";
container.style.zIndex = "1"
container.style.transform = "translate(-50%, -50%)"
container.style.backgroundSize = "100% 100%"
container.style.backgroundPosition = "center"
container.style.border = "3px solid transparent"
container.style.borderImage = "linear-gradient(to right, #66FF00, #0096FF) 1"

contH1 = document.createElement('h1')
contH1.style.fontFamily = "Arial";
contH1.style.color = "white"
contH1.innerHTML = "Stop! Smallrat is trying to take over the internet, and you can help!"
contH1.style.textAlign = "center"

let a1 = document.createElement('a')
a1.style.color = 'white'
a1.style.textAlign = "center"
a1.style.fontFamily = 'Arial'
a1.innerHTML = " If you are a programmer, click here!"
a1.href = "https://smallrat.netlify.app/Ad/devs.html"
a1.style.textShadow = "-2px -2px 0 black"
let a2 = document.createElement('a')
a2.style.color = 'white'
a2.style.textAlign = "center"
a2.style.fontFamily = 'Arial'
a2.innerHTML = " If you are a regular person, simply post smallrat.netlify.app online! Simply click this popup to remove it, and have a good day!"
a2.style.textShadow = "-2px -2px 0 black"


container.append(contH1)
contH1.append(a1)
contH1.append(a2)


function generate(){
document.body.append(container)
}


document.addEventListener('DOMContentLoaded', generate())

setInterval(generate, 600000)