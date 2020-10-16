function findEmployee(niNumber) {

    var oldRecords = JSON.parse(localStorage.getItem("recordStorage"));

    var result = oldRecords.find(obj => {
        return obj.ninumber === niNumber;
    });
    return result;
}

function getAllRecounrds() {
    return JSON.parse(localStorage.getItem("recordStorage"));
}

function setRecords(storage, records) {
    localStorage.setItem(storage, JSON.stringify(records));
}

function removeError(inputId, ErrorId) {
    document.getElementById(inputId).classList.remove('error');
    document.getElementById(ErrorId).setAttribute('hidden', 'hidden');
}

function validateInputFeilds(employee) {

    var validationErrors = false;

    if (!employee.ninumber) {
        var errorMessage = document.getElementById("ninumberErrorMessage");
        errorMessage.removeAttribute('hidden');
        errorMessage.innerHTML = "NI Number is required";
        document.getElementById("ninumber").className += (" error");
        validationErrors = true;
    }
    if (!employee.fullname) {
        document.getElementById("fullNameErrorMessage").removeAttribute('hidden');
        document.getElementById("fullname").className += (" error");
        validationErrors = true;
    }
    if (!employee.phone) {
        var error = document.getElementById("phoneNumberErrorMessage");
        error.innerHTML = "Phone number is required";
        error.removeAttribute('hidden');
        document.getElementById("phone").className += (" error");
        validationErrors = true;
    }
    else {
        var phone = document.getElementById("phone");
        if (!validatePhoneNumber(phone))
            validationErrors = true;
    }
    if (!employee.address) {
        document.getElementById("addressErrorMessage").removeAttribute('hidden');
        document.getElementById("address").className += (" error");
        validationErrors = true;
    }

    if (!employee.department) {
        document.getElementById("departmentErrorMessage").removeAttribute('hidden');
        document.getElementById("department").className += (" error");
        validationErrors = true;
    }

    return validationErrors;
}

function validatePhoneNumber(number) {

    var regX = new RegExp("([0-9]|[\-+#])+");
    if (!regX.test(number.value)) {
        var error = document.getElementById("phoneNumberErrorMessage");
        error.innerHTML = "Phone number not valid";
        error.removeAttribute('hidden');
        document.getElementById("phone").className += (" error");
        return false;
    }
    return true;
}

function validateEmployee(form, type) {

    var employee = {
        ninumber: form[0].value,
        fullname: form[1].value,
        phone: form[2].value,
        address: form[3].value,
        department: form[4].value
    };

    if (validateInputFeilds(employee))
        return false;

    var oldRecords = getAllRecounrds();

    if (type === "edit") {
        const index = oldRecords.map(e => e.ninumber).indexOf(urlParams);
        oldRecords.splice(index, 1, employee);
    }
    else {
        oldRecords.push(employee);
    }

    setRecords("recordStorage", oldRecords)

    return true;
}