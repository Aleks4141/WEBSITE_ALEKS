const form = document.getElementById('contactForm');
		const firstNameInput = document.getElementById('firstName');
		const lastNameInput = document.getElementById('lastName');
		const emailInput = document.getElementById('email');
    const phonenumberInput = document.getElementbyID('phonenumber');
		const messageInput = document.getElementById('message');
		const formError = document.getElementById('formError');

    form.addEventListener('reset', function(event) {          /*function to prevent empty fields*/
      document.getElementById("contactForm").reset();
    })

		form.addEventListener('submit', function(event) {
			
			if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !messageInput.value || !phonenumberInput.value) {
			
				event.preventDefault();
				
				formError.textContent = 'Error. Fill the fields.';
			
			} else if (isValidEmail(emailInput.value)) {
				event.preventDefault();
				formError.textContent = 'Error. Enter valid email.';
			
			} else if (!isValidPhone(phonenumberInput.value)) {
        event.preventDefault();
        formError.textContent = 'Error. Enter valid phone number';
      }
      else {
				formError.textContent = '';
			}
		});
		
		function isValidEmail(email) { /*function to check email syntax*/
		
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
			return emailRegex.test(email);

		}
    function isValidPhone(phonenumber){ /*function to check phone number syntax*/

      const phonenumberRegex = /^\d{10}$/;

      return phonenumberRegex.test(phonenumber);
    }