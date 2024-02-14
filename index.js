function tabuada(params) {
    // transforma os dados coletados em variaveis.
    var num = window.document.getElementById('Numero')
    var mult = window.document.getElementById('multiplicador')
     // Declara do "Se" para o caso de a pessoa não preencher as informações.
     if (num.value.length == 0 || num.value.length == 0) {
        window,alert("Erro: Informações não preenchidas")
     } else {
    // transforma os elements em numeros para poder multiplicar, se não ele pensa que são text.
    var n = Number(num.value)
    var m = Number(mult.value)
    // Decalra também a variavel de resposta, que inicialmente estará vazia. 
    var r = ''
    var res = document.getElementById('Resposta')
        // Agora que todos tem nome, podemos dar as ordens da função:
            // Se eu quisesse apenas uma calculadora de multiplicação, seria: 
                // r = n*m
                // res.innerHTML = `A resposta é: ${r}` 
                // Aqui deve ser uma crase para funcionar.
        // Para que ele mostre toda a tabuada dos numeros:
    res.innerHTML = `A tabuada do ${n} é:<br>`
    var x = 0
    do {
        r = n*x
        res.innerHTML +=`${x} x ${n} = ${r}<br>`
        x++
    } while (x<=m);
}}