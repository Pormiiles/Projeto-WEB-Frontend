document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio automático do formulário
    register();
});

const iname = document.querySelector("#name");
const iage = document.querySelector("#age");
const iemail = document.querySelector("#email");
const ipassword = document.querySelector("#password");

function register() { // Função para fazer requisições POST para cadastrar novos usuários
    try {
        fetch("http://localhost:8080/user", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: iname.value,
                idade: iage.value,
                email: iemail.value,
                password: ipassword.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Erro:', data.error);
            } else {
                console.log('Sucesso:', data);
            }
        })
        .catch(error => console.error('Erro:', error));
    } catch (error) {
        console.log(error);
    }
}
