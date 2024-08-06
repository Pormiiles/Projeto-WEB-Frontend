document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio automático do formulário
    login();
});

const iemail = document.querySelector("#email");
const ipassword = document.querySelector("#password");

function login() { // Função para fazer requisições POST para logar usuários cadastrados
    try {
        fetch("http://localhost:8080/user/login", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email: iemail.value,
                password: ipassword.value
            })
        })
        .then(response => response.text()) // Tratar a resposta como texto
        .then(data => {
            if (data.includes("Login efetuado com sucesso")) { // Verificar a mensagem de sucesso
                localStorage.setItem("userEmail", iemail.value);
                window.location.href = "../index.html";
            } else {
                alert("Login falhou. Verifique suas credenciais.");
            }
        })
        .catch(error => console.error('Error:', error));
    } catch (error) {
        console.log(error);
    }
}