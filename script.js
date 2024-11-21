function somar() {
    
//Converter os inputs em numero
    let numero1 = parseFloat(document.getElementById("N1").value);
    let numero2 = parseFloat(document.getElementById("N2").value);
    let result = numero1 + numero2;
//Exibir resultado    
    document.getElementById("resultado").textContent = result;
}

function divisao() {
    
//Converter os inputs em numero
        let numero1 = parseFloat(document.getElementById("N1").value);
        let numero2 = parseFloat(document.getElementById("N2").value);
        let result = numero1 / numero2;
    
//Se o primeiro input for 0, mostra erro        
        if(numero1 === 0){
            document.getElementById(resultado).textContent = "Erro: divisao por zero"
        }
        else {
            let result = numero1 / numero2;
            document.getElementById("resultado").textContent = result;
        }

//Exibir resultado    
        document.getElementById("resultado").textContent = result;
}

function subtracao() {
    
//Converter os inputs em numero
        let numero1 = parseFloat(document.getElementById("N1").value);
        let numero2 = parseFloat(document.getElementById("N2").value);
        let result = numero1 - numero2;
//Exibir resultado    
        document.getElementById("resultado").textContent = result;
}

function multiplicacao() {
    
//Converter os inputs em numero
        let numero1 = parseFloat(document.getElementById("N1").value);
        let numero2 = parseFloat(document.getElementById("N2").value);
        let result = numero1 * numero2;
//Exibir resultado    
        document.getElementById("resultado").textContent = result;
    }