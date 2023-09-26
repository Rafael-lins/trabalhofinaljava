

// Inicializando com um array vazio para armazenar registros do formulário de contatos
const formRecords = [];

function displayPromptAndLog(inputId) {
    const inputValue = document.getElementById(inputId).value;
    if (inputValue) {
        // Registrar o valor de entrada
        console.log(`Input (${inputId}): ${inputValue}`);
        
        // Salvar o registro do formulário no array
        formRecords.push({ inputId, value: inputValue });
    } else {
        console.log(`Input (${inputId}) is empty.`);
    }
}

// Função para limpar campos do formulário
function clearFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}

// Função para enviar o formulário
function submitForm() {
    // Chame displayPromptAndLog para cada campo de entrada
    displayPromptAndLog('name');
    displayPromptAndLog('email');
    displayPromptAndLog('phone');
    displayPromptAndLog('message');
    
    // Limpe os campos do formulário
    clearFormFields();
    
    // Exibir todos os registros do formulário
    displayFormRecords();

    // Habilite o botão "SEND MESSAGE" novamente
    document.getElementById('submitButton').disabled = false;
}

// Função para exibir todos os registros do formulário
function displayFormRecords() {
    console.log("Form Records:");
    for (const record of formRecords) {
        console.log(`Input (${record.inputId}): ${record.value}`);
    }
}
