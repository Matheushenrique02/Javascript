function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número')
        
}
    else{
        var n = Number(num.value)
        var c = 1
        var res = n * c 
        tab.innerHTML =''
        while (c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${res}`
            tab.appendChild(item)
            c++

        }
        
    }

    }
    