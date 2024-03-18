var dateGlobal = formatarData(new Date());
var totalGlobal = 0;

function formatarData(item){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    return item.toLocaleString("pt-BR", options)
}

function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome) ;
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal() {
    var selectCamisetas = document.getElementById("selectCamisetas");
    var selectPersonalizacao = document.getElementById("selectPersonalizacao");
    var selectAcessorios = document.getElementById("selectAcessorios");
    var selectSouvenir = document.getElementById("selectSouvenir");
    var selectSocios = document.getElementById("selectSocios");
    var resultadoSpan = document.getElementById("resultado");
    
    var total = 0;
    var camisetas = 0;
    var personalizacao = 0;
    var acessorios = 0;
    var souvenir = 0;
    var socios = 0;

    switch (selectCamisetas.value) {
        case "Camisa Home":
            total += 250,00;
            camisetas = 250,00;
        break;
        case "Camisa Away":
            total += 250,00;
            camisetas = 250,00;
        break;
        case "Camisa Green Hell":
            total += 300,00;
            camisetas = 300,00;
        break;
        case "Camisa-Brasil":
            total += 199,00;
            camisetas = 199,00;
        break;
        case "Camisa Goleiro":
            total += 199,00;
            camisetas = 199,00;
        break;
    }

    switch (selectPersonalizacao.value) {
        case "Nome":
            total += 40,00;
            personalizacao = 40,00;
        break;
        case "Numero":
            total += 30,00;
            personalizacao = 30,00;
        break;
        case "Bermuda":
            total += 15,00;
            personalizacao = 15,00;
        break;
        case "Nome+Numero":
            total += 50,00;
            personalizacao = 50,00;
        break;
        case "Presentes":
            total += 50,00;
            personalizacao = 50,00;
        break;
    }

    switch (selectAcessorios.value) {
        case "Boné":
            total += 139,90;
            acessorios = 139,90;
        break;
        case "Carteira":
            total += 89,90;
            acessorios = 89,90;
        break;
        case "Porta Chuteira":
            total += 79,99;
            acessorios = 79,99;
        break;
        case "Chaveiro":
            total += 59,99;
            acessorios = 59,99;
        break;
        case "Relógio":
            total += 119,99;
            acessorios = 119,99;
        break;
    }

    switch (selectSouvenir.value) {
        case "Mascote Caramelo":
            total += 199,00;
            souvenir = 199,00;
        break;
        case "Mochila":
            total += 300,00;
            souvenir = 300,00;
        break;
        case "Bola Campo":
            total += 117,00;
            souvenir = 117,00;
        break;
        case "Avental":
            total += 94,90;
            souvenir = 94,90;
        break;
        case "Tábua":
            total += 159,00;
            souvenir = 159,00;
        break;
    }

    switch (selectSocios.value) {
        case "Sócio Campeão":
            total += 19,85;
            socios = 19,85;
        break;
        case "Arquibancadas":
            total += 59,90;
            socios = 59,90;
        break;
        case "Cadeiras":
            total += 179.90;
            socios = 179.90;
        break;
        case "Alma Guerreira":
            total += 329.90;
            socios = 329,90;
        break;
        case "Não-Sócio":
            total += 150,90;
            socios = 150,90;
        break;
    }


    totalGlobal = total.toFixed(2);
    document.getElementById("pedido-pronto").style.display = "block";
    document.getElementById("camisetas-pronto").textContent = selectCamisetas.value + " R$" + camisetas.toFixed(2);
    document.getElementById("personalizacao-pronto").textContent = selectPersonalizacao.value + " R$" + personalizacao.toFixed(2);
    document.getElementById("acessorios-pronto").textContent = selectAcessorios.value + " R$" + acessorios.toFixed(2);
    document.getElementById("souvenir-pronto").textContent = selectSouvenir.value + " R$" + souvenir.toFixed(2);
    document.getElementById("socios-pronto").textContent = selectSocios.value + " R$" + socios.toFixed(2);
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectCamisetas").value = "Selecione o seu produto";
    document.getElementById("selectPersonalizacao").value = "Selecione o seu produto";
    document.getElementById("selectAcessorios").value = "Selecione o seu produto";
    document.getElementById("selectSouvenir").value = "Selecione o seu produto";
    document.getElementById("selectSocios").value = "Selecione o seu produto";
}

function zap(){
    var numeroTelefone = "5541987931143"

    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=O Valor total é: R$" + totalGlobal + " comprados na data: " + dateGlobal;
    window.open(linkWhatsApp, "_blank")
}