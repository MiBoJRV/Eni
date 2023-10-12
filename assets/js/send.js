document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form.dr-form');

  function getFormElements(form) {
    const firstNameField = form.querySelector('.form_group--name.first-n input');
    const lastNameField = form.querySelector('.form_group--name.last-n input');
    const emailField = form.querySelector('.form_group--email input ');
    const phoneField = form.querySelector('.form_input--group.mob-tel input');

    return {
      firstNameField,
      lastNameField,
      emailField,
      phoneField
    };

  }

  function sendLeadData(event, form, formElements) {
    event.preventDefault();
    const firstName = formElements.firstNameField.value;
    const lastName = formElements.lastNameField.value;
    const email = formElements.emailField.value;
    const phone = formElements.phoneField.value;
    const countryCode = '39';
    const fullNumber = `+${countryCode}${phone}`;

    const data = {
      ApiKey: 'TmpnMU0xODFNVEJmTmpnMU0xOD0=',
      ApiPassword: '1c4629V3do',
      CampaignID: '10267',
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: fullNumber,
      Page : 'Eni',
    };

    const apiUrl = 'https://tracker.pablo.partners/repost.php?act=register';

    function encodeFormData(data) {
      return Object.keys(data)
          .map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          })
          .join('&')
    }

    fetch(`${apiUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodeFormData(data)
    })
        .then(response => {
          if (response.ok) {
            console.log('Lead data sent successfully!');
            return response.json(); // Получаем JSON из ответа
          } else {
            throw new Error('Failed to send lead data');
          }
        })
        .then(responseJson => {
          if (responseJson.ret_code !== '404') {
            const redirectUrl = responseJson.url;
            window.location.href = redirectUrl; // Выполняем редирект
          } else {
            console.log('Невозможно выполнить редирект.');
          }
        })
        .catch(error => {
          console.error('An error occurred:', error.message);
        });
  }




    const formElements = getFormElements(form);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

        sendLeadData(event, form, formElements);

        // --------------
        const urlParams = new URLSearchParams(window.location.search);
        const access_token = urlParams.get('access_token');

        const version = "fb";
        const subDomainIndex = 1;
        const createTime = Date.now() / 1000;

        let fbp, fbc;

        if (!urlParams.get('fbp')) {
          const userHash = Math.floor(Math.random() * (Math.pow(2, 32) - 1));
          fbp = `${version}.${subDomainIndex}.${createTime}.${userHash}`;
        } else {
          fbp = urlParams.get('fbp');
        }

        if (!urlParams.get('fbc')) {
          const fbclid = urlParams.get('fbclid');
          if (fbclid) {
            fbc = `${version}.${subDomainIndex}.${createTime}.${fbclid}`;
          } else {
            fbc = "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
          }
        } else {
          fbc = urlParams.get('fbc');
        }

        // --------------

    });

});

