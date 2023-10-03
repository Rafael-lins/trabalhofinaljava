function calcularTotal() {
    // Obter os valores selecionados pelo usuário
    const selectedServices = document.querySelectorAll('input[name="service"]:checked');
    const quantity = parseInt(document.getElementById('quantity').value);

    // Inicializar o preço total como zero
    let total = 0;

    // sobre os serviços selecionados e somar os preços
    selectedServices.forEach(function (service) {
        const serviceValue = service.value;
        if (serviceValue === 'servicoThreads') {
            total += 100;
        } else if (serviceValue === 'servicoExplore') {
            total += 150;
        } else if (serviceValue === 'servicoFinish') {
            total += 200;
        } else if (serviceValue === 'servicoLines') {
            total += 200;
        } else if (serviceValue === 'servicoSouthwest') {
            total += 200;
        } else if (serviceValue === 'servicoWindow') {
            total += 200;
        }
    });

    // Multiplicar o total pela quantidade
    total *= quantity;

    // Exibir o total no campo de texto "Total"
    document.getElementById('total').value = 'R$ ' + total.toFixed(2);
}
