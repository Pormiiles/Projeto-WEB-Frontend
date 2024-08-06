document.addEventListener("DOMContentLoaded", function() {
    const userNameElement = document.getElementById("user-name");
    const logoutButton = document.getElementById("cabecalho-buttons-item3");
    const userInfoContainer = document.querySelector(".user-info");
    const authButtonsContainer = document.querySelector(".auth-buttons");

    const userEmail = localStorage.getItem('userEmail');

    if(userEmail) {
        userNameElement.textContent = `${userEmail}`;
        userInfoContainer.style.display = 'flex';
        authButtonsContainer.style.display = 'none';
    }

    logoutButton.addEventListener("click", function() {
        localStorage.removeItem('userEmail');
        window.location.reload();
    });
});
