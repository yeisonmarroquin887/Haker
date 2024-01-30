function enviarFormulario() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Envia los datos al servidor
    fetch('http://localhost:3000/enviarCorreo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
