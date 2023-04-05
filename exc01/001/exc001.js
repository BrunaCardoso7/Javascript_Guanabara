function carregar(){
    var msg = document.getElementById('text')
    var data = new Date
    msg.innerHTML = `São exatamente ` + data.getHours() + `horas`
}