function calcular (n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById("result").innerHTML = `O resultado da soma de ${n1} + ${n2} = ${calculo}`
            break
        case '-':
            calculo = (n1 - n2)
            document.getElementById("result").innerHTML = `O resultado da subtração de ${n1} - ${n2} = ${calculo}`
            break
        case 'x':
            calculo = (n1 * n2)
            document.getElementById("result").innerHTML = `O resultado da multiplicação de ${n1} por ${n2} = ${calculo}`
            break
        case '/':
            calculo = (n1 / n2)
            if (Number.isNaN(calculo)){
                document.getElementById("result").innerHTML = "Digite um divisivel valido"
            } else
            document.getElementById("result").innerHTML = `O resultado da divisão de ${n1} por ${n2} = ${calculo}`    
            break
    }
    
}