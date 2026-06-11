// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("form-nutricao");
    const resultadoDiv = document.getElementById("resultado");
    const resAnimal = document.getElementById("res-animal");
    const resTotal = document.getElementById("res-total");

    // Intercepta o envio do formulário calculadora
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede a página de recarregar

        // Captura valores dos campos de input
        const pesoVivo = parseFloat(document.getElementById("peso").value);
        const qtdAnimais = parseInt(document.getElementById("quantidade").value);

        // Regra geral de nutrição: Consumo médio diário é de ~2,3% do peso vivo em Matéria Seca (MS)
        const taxaConsumo = 0.023; 
        
        // Cálculos
        const consumoIndividual = pesoVivo * taxaConsumo;
        const consumoTotalLote = consumoIndividual * qtdAnimais;

        // Atualiza e exibe os resultados na tela com duas casas decimais
        resAnimal.textContent = consumoIndividual.toFixed(2).replace(".", ",");
        resTotal.textContent = consumoTotalLote.toFixed(2).replace(".", ",");

        // Remove a classe hidden do CSS para mostrar a div do resultado
        resultadoDiv.classList.remove("hidden");
    });
});
