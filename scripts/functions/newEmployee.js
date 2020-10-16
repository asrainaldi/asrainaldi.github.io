var preventSubmit = false;

function ensureUniqueNiNumber() {
    var niNumber = document.getElementById("ninumber");
    var record = findEmployee(niNumber.value);
    var errorMessage = document.getElementById("ninumberErrorMessage");

    if (record != undefined && record.ninumber == niNumber.value) {
        preventSubmit = true;
        niNumber.className += (" error");

        errorMessage.removeAttribute('hidden');
        errorMessage.innerHTML = "NI numnber must be unique";
    }
    else {
        errorMessage.setAttribute('hidden', 'hidden');
        niNumber.classList.remove('error');
        preventSubmit = false;
    }
}