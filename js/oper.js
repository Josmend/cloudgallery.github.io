document.addEventListener("DOMContentLoaded", function() {
    

     document.addEventListener('submit', function(event) {
       // document.addEventListener('click', (event)=> {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let telefono = document.getElementById("telefono").value;

        
        document.querySelector("form").classList.add("validado");
    
        if (password !== confirmPassword) {
            event.preventDefault(); 
            document.getElementById("confirmPassword").setCustomValidity("Las contraseñas no coinciden");
        } else {
            document.getElementById("confirmPassword").setCustomValidity(""); 
        }

        if (telefono !== "") {
            if (!/^\d{10}$/.test(telefono)) {
                event.preventDefault(); 
                document.getElementById("telefono").setCustomValidity("El número de teléfono debe tener exactamente 10 números");
            } else {
                document.getElementById("telefono").setCustomValidity("");
            }
        }
        
    });
    document.addEventListener('reset', function() {
        document.querySelector("form").classList.remove("validado");
    });
    
    document.getElementById("password").addEventListener("input", function() {
        document.getElementById("confirmPassword").setCustomValidity("");
    });

    document.getElementById("confirmPassword").addEventListener("input", function() {
        document.getElementById("confirmPassword").setCustomValidity("");
    });
});
