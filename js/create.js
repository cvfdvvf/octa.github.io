async function generateAccount() {
    let genButton = document.getElementById("genButton")
    let usernameInput = document.getElementById("username")
    let passwordInput = document.getElementById("password")
    genButton.className = "ui teal loading button"
    const [username, password] = await (await fetch("https://prodigyaccountgenerator.hostedposted.repl.co/gen/")).json()
    usernameInput.value = username
    passwordInput.value = password
    genButton.className = "ui teal button"

}