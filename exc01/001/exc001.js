function carregar(){
    var msg = document.getElementById('text')
    var img = document.getElementbyId('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São exatamente ${hora} horas`
}
