
// let patientArray = [];
// console.log(patientArray)

function medInputEnable() {
  let medsInput = document.getElementById(`meds`);
  medsInput.disabled = false;
}

function medInputDisable() {
  let medsInput = document.getElementById(`meds`);
  medsInput.disabled = true;
}

function savePatientForm() {
    let fName = document.getElementById(`fName`).value;
    let mName = document.getElementById(`mName`).value;
    let lName = document.getElementById(`lName`).value;
    let address = document.getElementById(`address`).value;
    let mobileNum = document.getElementById(`mobileNum`).value;
    let birthDate = document.getElementById(`birthDate`).value;

    let gender = document.querySelector(`input[name="gender"]:checked`).value;

    let medHistoryCheckboxes = document.querySelectorAll(`input[name="medHistory"]`);
    let medHistory = [];

    for (let i = 0; i < medHistoryCheckboxes.length; i++) {
        let checkbox = medHistoryCheckboxes[i];
        if (checkbox.checked) {
            medHistory.push(checkbox.value);
        }
    }

    let currSymptomsSelect = document.getElementById(`currSymptoms`);
    let currSymptoms = [];

    for (let i = 0; i < currSymptomsSelect.selectedOptions.length; i++) {
        currSymptoms.push(currSymptomsSelect.selectedOptions[i].value);
    }
    
    let takeMedsRadio = document.querySelector(`input[name="yesorno"]:checked`);
    let takeMeds = ``;

    if (takeMedsRadio && takeMedsRadio.value === `yes`) {
        takeMeds = document.getElementById(`meds`).value;
    }
      
    
    

    
    
    

    let patient = {
        patientId: Date.now(),
        firstName: fName,
        middleName: mName,
        lastName: lName,
        address: address,
        mobileNum: mobileNum,
        birthDate: birthDate,
        gender: gender,
        medHistory: medHistory,
        currSymptoms: currSymptoms,
        takeMeds: takeMeds,
    }
    
    
    localStorage.setItem(Date.now(), JSON.stringify(patient));
}



  
// Form Validation
let form = document.getElementById(`patientForm`);

form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    
    let fName = document.getElementById(`fName`);
    let lName = document.getElementById(`lName`);
    let address = document.getElementById(`address`);

    let fNameError = document.getElementById(`fNameError`);
    let lNameError = document.getElementById(`lNameError`);
    let addressError = document.getElementById(`addressError`);

    fNameError.textContent = ``;
    lNameError.textContent = ``;
    addressError.textContent = ``;

    if (fName.value.trim() === ``) {
        fNameError.textContent = ` First name is required.`;
        fNameError.style.color = `red`;
        fName.focus();
        return false;
    }

    if (lName.value.trim() === ``) {
        lNameError.textContent = ` Last name is required.`;
        lNameError.style.color = `red`;
        lName.focus();
        return false;
    }

    if (address.value.trim() === ``) {
      addressError.textContent = ` Address is required.`;
      addressError.style.color = `red`;
      address.focus();
      return false;
    }
  
    if (birthDateValue == 'Invalid Date') {
        errorMessage += `Please enter a valid date.<br>`;
        birthDateInput.focus();
    }

    if (birthDateValue < maxDate || birthDateValue > maxDate) {
        errorMessage += `Birth date must be between January 1, 1900 and today.<br>`;
        birthDateInput.focus();
    }
  
    let isGenderSelected = false;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        isGenderSelected = true;
        break;
      }
    }
    if (!isGenderSelected) {
      errorMessage += `Gender is required.<br>`;
      gender[0].focus();
    }
  
    if (mobileNum.value.trim() === ``) {
      errorMessage += `Mobile number is required.<br>`;
      mobileNum.focus();
    }
  
    if (errorMessage !== '') {
        document.getElementById('errorMessage').innerHTML = errorMessage;
        return false;
    } else {
        alert(`Form submitted successfully.`);
        form.submit();
    }
});

window.onload = function() {
    let patientForm = document.getElementById(`patientForm`);
    patientForm.onsubmit = savePatientForm; 
    
    let today = new Date().toISOString().split(`T`)[0];
    document.getElementsByName(`birthDate`)[0].setAttribute(`max`, today);
}