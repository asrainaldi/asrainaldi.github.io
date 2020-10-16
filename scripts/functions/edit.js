$(document).ready(function () {
    var currentRecord = findEmployee(urlParams);
    populateFeilds(currentRecord);
});

var urlParams = new URLSearchParams(window.location.search).get('ninumber');

function populateFeilds(currentRecord) {
    document.getElementById("ninumber").value = currentRecord.ninumber;
    document.getElementById("fullname").value = currentRecord.fullname;
    document.getElementById("phone").value = currentRecord.phone;
    document.getElementById("address").value = currentRecord.address;
    document.getElementById("department").value = currentRecord.department;
}