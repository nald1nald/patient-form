let patientArray = [];

function savePatientForm() {
    let fName = document.getElementById(`fName`).value;
    let mName = document.getElementById(`mName`).value;
    let lName = document.getElementById(`lName`).value;
    let address = document.getElementById(`address`).value;
    let mobileNum = document.getElementById(`mobileNum`).value;
    let birthDate = document.getElementById(`birthDate`).value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let medHistoryCheckboxes = document.querySelectorAll('input[name="medHistory"]');
    let medHistory = [];

    for (let i = 0; i < medHistoryCheckboxes.length; i++) {
        let checkbox = medHistoryCheckboxes[i];
        if (checkbox.checked) {
            medHistory.push(checkbox.value);
        }
    }

    let currSymptomsSelect = document.getElementById('currSymptoms');
    let currSymptoms = [];

    for (let i = 0; i < currSymptomsSelect.selectedOptions.length; i++) {
        currSymptoms.push(currSymptomsSelect.selectedOptions[i].value);
    }
    
    let takeMedsRadio = document.querySelector('input[name="yesorno"]:checked');
    let takeMeds = "";

    if (takeMedsRadio && takeMedsRadio.value === "yes") {
        takeMeds = document.getElementById("meds").value;
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

form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    if (fName.value.trim() === '') {
      alert('First name is required.');
      fName.focus();
      return false;
    }
  
    
    if (lName.value.trim() === '') {
      alert('Last name is required.');
      lName.focus();
      return false;
    }


    if (address.value.trim() === '') {
        alert('Address is required.');
        address.focus();
        return false;
    }
  
    
    if (birthDate.value.trim() === '') {
      alert('Birth date is required.');
      birthDate.focus();
      return false;
    }
  
    
    let isGenderSelected = false;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        isGenderSelected = true;
        break;
      }
    }
    if (!isGenderSelected) {
      alert('Gender is required.');
      gender[0].focus();
      return false;
    }
  
    
    if (mobileNum.value.trim() === '') {
      alert('Mobile number is required.');
      mobileNum.focus();
      return false;
    }
  
    
    alert('Form submitted successfully.');
    form.submit();
  });

window.onload = function() {
    let patientForm = document.getElementById(`patientForm`);
    patientForm.onsubmit = savePatientForm; 
}