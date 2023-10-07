document.addEventListener('DOMContentLoaded', function () {
    const surveyForm = document.getElementById('surveyForm');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const result = document.getElementById('result');
  
    surveyForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Collect form data
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const dob = document.getElementById('dob').value;
      const country = document.getElementById('country').value;
      const genderElements = document.querySelectorAll('input[name="gender"]:checked');
      const gender = Array.from(genderElements).map(element => element.value).join(', ');
      const profession = document.getElementById('profession').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
  
      // Display collected data in the popup
      result.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `;
  
      // Show the popup
      popup.style.display = 'block';
    });
  
    closePopup.addEventListener('click', function () {
      // Close the popup and reset the form
      popup.style.display = 'none';
      surveyForm.reset();
    });
  
    resetBtn.addEventListener('click', function () {
      // Reset the form
      surveyForm.reset();
    });
  });