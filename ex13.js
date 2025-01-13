var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são ${hora} Horas`)

if (hora < 12){
    console.log('Bom dia')
}

else if(hora <=18){
        console.log('Boa tarde')
    }
else{
    console.log('Good night menina')
}