function carregar(){
    var data = new Date()
    var hora = data.getHours() 
    

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var fundo = document.getElementById('fundo')
    var geral = document.getElementById('geral')

    msg.innerHTML = `Agora são ${hora} Horas`

    if(hora >= 0 && hora < 12){
        //dia
        img.src = 'https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-a-sunset-scene-with-palm-trees-in-circular-painting-artwork-featuring-png-image_12684572.png'
        fundo.style.backgroundColor='ligthblue'
        geral.style.backgroundColor =' rgba(255, 255, 0, 0.658)'


    }

    else if (hora >= 12 && hora <= 18){
        //tarde
        img.src = 'https://horadafesta.com.br/wp-content/uploads/2023/11/horadafesta-adesivo-tag-sticker-tardezinha10-1024x1024.png'
        fundo.style.backgroundColor='orange'
        geral.style.backgroundColor ='orangered'


    }
    else{
        // noite 
        img.src = 'https://png.pngtree.com/png-clipart/20240306/original/pngtree-cartoon-night-moon-png-image_14516649.png'
        fundo.style.backgroundColor='darkblue'
        geral.style.backgroundColor ='gray'
        

    }
}

