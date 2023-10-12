document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form.dr-form');
    const firstNameField = form.querySelector('.form_group--name.first-n input');
    const lastNameField = form.querySelector('.form_group--name.last-n input');
    const emailField = form.querySelector('.form_group--email input ');
    const phoneField = form.querySelector('.form_input--group.mob-tel input');

    console.log(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = firstNameField.value;
        const lastName = lastNameField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const countryCode = '39';
        const fullNumber = `+${countryCode}${phone}`;

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(fullNumber);
    });
});

