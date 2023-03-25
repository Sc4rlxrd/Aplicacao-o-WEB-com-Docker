let num = document.getElementById("fnum");
let list = document.getElementById("flist");
let res = document.getElementById("res");
let valores = [];
function isNumbrs(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true;
    }else{
        return false;
    }
}
function inList(n,l){
    if(l.indexOf(Number(n)) !=-1){
        return true;
    }else{
        return false;
    }
}
function adicionar(){
    if(isNumbrs(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado.`;
        list.appendChild(item);
        res.innerHTML ="";
    }else{
        alert("Valor inválido ou já encontrado na lista.");
    }
    num.value = "";
    num.focus();
}
function finalizar(){
    if(valores.length == 0){
        alert("Adicione valores antes de finalizar.");
    }else{
        let total= valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma+=valores[pos];
            if(valores[pos]> maior){
                maior = valores[pos];
            }else{
                menor=valores[pos];
            }
        }
        media = soma/total;
        res.innerHTML="";
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrado.</p>`;
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`;
        res.innerHTML += `<p>O somatório de todos valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A media dos valores digitados foi ${media}.</p>`;

    }
}