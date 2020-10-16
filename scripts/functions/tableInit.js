function initTable(createHeadders, record) {

    var table = document.getElementById("employeeTable");
    var thead = table.firstElementChild;
    var tbody = table.children[1];
    var tr = document.createElement('tr');
    table.appendChild(tr);

    if (createHeadders) {
        for (var i = 0; i < (Object.keys(record[0])).length; i++) {

            var th = document.createElement('th');
            th.innerHTML = createHeader(Object.keys(record[0])[i]);
            tr.style.textAlign = "center";
            tr.appendChild(th);
            thead.appendChild(tr);

        }
        // action buttons
        var th = document.createElement('th');
        th.innerHTML = "Action";
        th.style.textAlign = "center";
        tr.appendChild(th);
    }

    for (var i = 0; i < record.length; i++) {
        var row = tbody.insertRow();
        row.className = "hover";
        row.id = Object.values(record[i])[0];
        row.onclick = function () {
            editMe(this);
        };

        for (var j = 0; j < (Object.keys(record[i])).length; j++) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(Object.values(record[i])[j]));
            cell.style.textAlign = "center";
        }

        // action buttons
        var btn = document.createElement("button");
        var cell = row.insertCell();

        btn.className = "btn btn-primary";
        btn.innerHTML = "Edit " + "<sup>&#x270E</sup>";
        btn.type = "button";
        btn.onclick = function () {
            editMe(this);
        }
        btn.id = Object.values(record[i])[0];
        cell.appendChild(btn);

        var btnDelete = document.createElement("button");
        btnDelete.className = "btn btn-danger";
        btnDelete.innerHTML = "Delete <sup>&#x1f5d1</sup>";
        btnDelete.onclick = function () {
            deleteMe(this)
        };
        btnDelete.id = Object.values(record[i])[0];
        cell.style.textAlign = "center";
        cell.appendChild(btnDelete);
    }
}

function createHeader(header) {
    switch (header) {
        case ("ninumber"):
            return "NI Number";
        case ("fullname"):
            return "Full Name";
        case ("phone"):
            return "Phone Number";
        case ("address"):
            return "Address";
        case ("department"):
            return "Department";
        default:
            return "Unknown Header";
    }
}