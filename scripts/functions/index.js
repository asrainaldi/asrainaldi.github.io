$(document).ready(function () {
    if (getAllRecounrds() == undefined) {
        setRecords("recordStorage", records)
    }

    var storeRecords = getAllRecounrds();

    initTable(true, storeRecords);
    createDropDownItems(storeRecords);
});


function createDropDownItems(storeRecords) {
    var items = [];
    var menu = document.getElementById("selectList");

    for (var i = 0; i < storeRecords.length; i++) {
        if (!(items.map(x => x.toLowerCase())).includes(((Object.values(storeRecords[i])[4]).toLowerCase()))) {
            items.push(Object.values(storeRecords[i])[4]);
            var item = document.createElement('option');
            item.innerHTML = Object.values(storeRecords[i])[4];
            menu.appendChild(item);
        }
    }
}

function deleteMe(row) {
    event.stopPropagation();
    var confirmation = confirm("Are you sure you want to delete employee " + row.id);
    if (confirmation) {
        var oldRecords = getAllRecounrds();

        const index = oldRecords.map(e => e.ninumber).indexOf(row.id);
        oldRecords.splice(index, 1);

        setRecords("recordStorage", oldRecords);

        $("#employeeTable tr").remove();
        initTable(true, oldRecords);
    }
}

function filterTable() {
    var contents = getAllRecounrds();
    var selectList = document.getElementById("selectList");

    if (selectList.selectedIndex == "0") {
        $("#employeeTable tr").remove();
        initTable(false, contents);
        return;
    }

    var selectedDep = selectList.options[selectList.selectedIndex].text;
    var result = contents.filter(function (x) {
        return x.department.toLowerCase() === selectedDep.toLowerCase();
    });

    $("#employeeTable tr").remove();
    initTable(true, result);
}

function reset() {
    window.localStorage.clear();
    location.reload();
}


function editMe(row) {
    event.stopPropagation();
    location.href = 'html\\EditEmployee.html?ninumber=' + row.id;
}
