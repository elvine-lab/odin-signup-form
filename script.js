document.getElementById("signup-form").addEventListener("submit", function(event){
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirm-password").value
    let errorMessage = document.getElementById("error-message")

    if (password !== confirmPassword){
        event.preventDefault()
        errorMessage.textContent = "Passwords do not match!"
    } else {
        errorMessage.textContent = ""
    }
})