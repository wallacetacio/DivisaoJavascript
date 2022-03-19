function recebeNumeros(){
    let numerador = Number(prompt('Digite o numerador:'));
    let denominador = Number(prompt('Digite o denominador:'));

    if(!numerador || !denominador && denominador <= 0){
        alert('Digite apenas números com denominador maior que zero.');
        recebeNumeros();
    }else {
        
            let resultado = numerador / denominador;
            alert(`${numerador} dividido por ${denominador} é igual a: ${resultado}`);
        novaDivisao();
    }

    function novaDivisao(){
        let opcao = Number(prompt('Deseja fazer uma nova divisão?\n 1 - Sim\n2 - Não'));

        if(opcao == 1){
            recebeNumeros();
        } else if(opcao == 2){
            alert('Até a próxima!🙋‍♂️')
        }else{
            alert('Opção inválida.');
            novaDivisao();
        }
    
    }

}

recebeNumeros();