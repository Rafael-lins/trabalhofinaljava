
// Função para obter os dados dos visitantes armazenados no localStorage
function getVisitorData() {
    return JSON.parse(localStorage.getItem('visitorData')) || { count: 0, records: {} };
}

// Função para exibir e atualizar o número de visitas
function displayVisitorCount() {
    const visitorData = getVisitorData();
    console.log(`Número de visitantes: ${visitorData.count}`);
}

// Função para limpar campos do formulário usando o operador spread
function clearFormFields() {
    const inputIds = ['name', 'email', 'phone', 'message'];
    for (const inputId of inputIds) {
        document.getElementById(inputId).value = '';
    }
}

// Função para exibir todos os registros do formulário
function displayFormRecords() {
    const visitorData = getVisitorData();
    console.log("Form Records:");
    for (const key in visitorData.records) {
        console.log(`Input (${key}): ${visitorData.records[key]}`);
    }
}

// Função para enviar o formulário
function submitForm() {
    // Obter dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Armazenar os registros do formulário
    const visitorData = getVisitorData();
    visitorData.records = { name, email, phone, message };
    visitorData.count += 1;
    localStorage.setItem('visitorData', JSON.stringify(visitorData));

    // Exibir todos os registros do formulário
    displayFormRecords();

    // Exibir e atualizar o número de visitas
    displayVisitorCount();

    // Limpar campos do formulário
    clearFormFields();

    // Habilitar o botão "SEND MESSAGE" novamente
    document.getElementById('submitButton').disabled = false;
}

