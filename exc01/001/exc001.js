function carregar(){
    var msg = document.getElementById('text')
    var img = document.getElementById('foto')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `São exatamente ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'imagem_manha.png'
        img.src = 'imagem_tarde.png'
        document.body.style.background = '#87CEFA'
        document.body.style.color = '#B0C4DE'
    } else if (hora >= 12 && hora <18){
        img.src = 'imagem_tarde.png'
        document.body.style.background = 'rgb(210,105,30)'
        document.body.style.color = '#FFD700'
        
    } else if (hora > 18){
        img.src = 'imagem_noite.png'
        document.body.style.background = 'rgb(1, 1, 71)'
        document.body.style.color = 'rgb(147, 147, 186)'
    }
}