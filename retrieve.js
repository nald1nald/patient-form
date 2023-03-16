function retrievePatientInfo(patientId) {
    let patient = JSON.parse(localStorage.getItem(patientId));
    if (!patient) {
      return null;
    }
    return patient;
}

function openModal() {
    
    let patientId = prompt(`Enter patient ID:`);
    let patient = retrievePatientInfo(patientId);
    let modal = document.getElementById("myModal");
    let patientInfoElem = document.getElementById("patientInfo");

    if (patient) {
      let patientInfo = `
        Patient ID: ${patient.patientId}
        <br>First Name: ${patient.firstName}
        <br>Middle Name: ${patient.middleName}
        <br>Last Name: ${patient.lastName}
        <br>Address: ${patient.address}
        <br>Mobile Number: ${patient.mobileNum}
        <br>Birth Date: ${patient.birthDate}
        <br>Gender: ${patient.gender}
        <br>Medical History: ${patient.medHistory.join(", ")}
        <br>Current Symptoms: ${patient.currSymptoms.join(", ")}
      `;

      if (patient.takeMeds !== ``) {
        patientInfo += `<br>Taking Medications: ${patient.takeMeds}`;
      }

      patientInfoElem.innerHTML = patientInfo;
    } else {
      patientInfoElem.innerHTML = `Patient not found.`;
    }
    
    modal.style.display = `block`;
    
    
    let closeBtn = modal.querySelector(`.close`);
    closeBtn.addEventListener(`click`, function() {
      modal.style.display = "none";
    });
  }