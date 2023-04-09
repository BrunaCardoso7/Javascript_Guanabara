function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resp = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sex[0].checked) {
            genero = 'Homem'
        }else if (sex[1].checked){
            genero = 'Mulher'
        } 
        resp.innerHTML = `O usuario é ${genero}, e tem ${idade} idade`
    }

}