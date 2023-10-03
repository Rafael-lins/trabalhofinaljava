
// Função para obter o número de visitas armazenado no localStorage
function getVisitorCount() {
    const count = parseInt(localStorage.getItem('visitorCount')) || 0;
    return count;
}

// Função para exibir e atualizar o número de visitas
function displayVisitorCount() {
    const visitorCount = getVisitorCount();
    console.log(`Número de visitantes: ${visitorCount}`);
    
    // Atualize o número de visitas no localStorage
    localStorage.setItem('visitorCount', visitorCount + 1);
}

// Chame a função para exibir e atualizar o número de visitas quando a página é carregada
displayVisitorCount();

// Inicializando com um objeto vazio para armazenar registros do formulário de contatos
const formRecords = {};

function displayPromptAndLog(inputId) {
    const inputValue = document.getElementById(inputId).value;
    if (inputValue) {
        // Registrar o valor de entrada
        console.log(`Input (${inputId}): ${inputValue}`);
        
        // Salvar o registro do formulário no objeto usando o operador spread
        formRecords[inputId] = inputValue;
    } else {
        console.log(`Input (${inputId}) is empty.`);
    }
}

// Função para limpar campos do formulário usando o operador spread
function clearFormFields() {
    const inputIds = ['name', 'email', 'phone', 'message'];
    for (const inputId of inputIds) {
        document.getElementById(inputId).value = '';
    }
}

// Função para enviar o formulário
function submitForm() {
    // Chame displayPromptAndLog para cada campo de entrada
    displayPromptAndLog('name');
    displayPromptAndLog('email');
    displayPromptAndLog('phone');
    displayPromptAndLog('message');
    
    // Limpe os campos do formulário usando clearFormFields()
    clearFormFields();
    
    // Exibir todos os registros do formulário
    displayFormRecords();

    // Habilite o botão "SEND MESSAGE" novamente
    document.getElementById('submitButton').disabled = false;
}

// Função para exibir todos os registros do formulário
function displayFormRecords() {
    console.log("Form Records:");
    for (const inputId in formRecords) {
        console.log(`Input (${inputId}): ${formRecords[inputId]}`);
    }
}
