function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')


    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERRO] Faltam dados`)
        res.innerHTML += `[Impossível iniciar contagem]`
    }
    
    else{
        res.innerHTML = 'Contando... :'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var pas = Number(passo.value)
        
        //Contagem crescente
        if (i < f){
        for(var c = i; c <= f; c += pas){
            res.innerHTML += ` ${c} \u{1F449} `
        }
        
        //Contagem regressiva
    }   else{
        for(c = i ; c >= f ; c -= pas){
            res.innerHTML += `${c} \u{1F449}`
        }
        
    }
    res.innerHTML += `\u{1F3C1}`
        
    }
}