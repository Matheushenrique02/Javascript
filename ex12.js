var id = 2

console.log(`Você tem ${id} Anos`)

if (id < 16){
    console.log('Não Vota')
}

else{
    if(id >= 16 && id < 18 ){
        console.log('Voto opcional, para menores de idade')
    }

    if(id > 18 && id < 70){
        console.log('Apto para votar, Voto Obrigatório')
    }

    if(id >= 70){
        console.log('Voto opcional , para maiores de idade')
    }
}