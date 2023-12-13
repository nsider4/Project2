const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", () =>{

        const emailPattern = mail => {
            const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return pattern.test(mail);
        };
        
        const first_name = $("#first_name").value.trim();
        const last_name = $("#last_name").value.trim();
        const email = $("#email").value.trim();
        const phone = $("#phone").value.trim();

        let errorMessage = "";

        if (first_name === "") {
            errorMessage += "First name is required.\n";
        }

        if (last_name === "") {
            errorMessage += "Last name is required.\n";
        }

        if (!emailPattern(email)) {
            errorMessage += "The email address must match the pattern that’s provided.\n";
        }

        if (phone === "") {
            errorMessage += "Phone field is required.\n";
        }

        if (errorMessage !== "") {
            alert(errorMessage);
            event.preventDefault();
        }

    })

});