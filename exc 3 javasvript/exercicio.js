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
        //criando uma tag html dinâmica
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', 'zenitsu.jpg')
            
        }else if (sex[1].checked){
            genero = 'Mulher'
            img.setAttribute('src', 'recoverygirl.jpg')
        } 
        resp.style.textAlign = 'center'
        resp.innerHTML = `O usuario é ${genero}, e tem ${idade} anos de idade`
        resp.appendChild(img)
        
    }

}