let element = document.getElementById('addItemButton');
element.addEventListener('click', function(evt){
    let concatId = document.getElementById('list')
    let info = document.getElementById('baseVal').value.split('-')
    let tab1 = document.getElementById('table')
    if(!tab1.firstElementChild) {        
        var thead = document.createElement('thead');
        var orderArrayHeader = ["Description", "Currency", "Cost"];
        tab1.appendChild(thead);
        
        for (var i=0; i<orderArrayHeader.length; i++) {
            thead.appendChild(document.createElement("th")).
                  appendChild(document.createTextNode(orderArrayHeader[i]));
        }
        
    }
    var row = tab1.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = info[1];
    cell2.innerHTML = info[2];
    cell3.innerHTML = info[3];

    // console.log('test', concatId.value);
    if (!concatId.value) {
        console.log('true');
        concatId.value = info[0];
    } else {
        concatId.value = concatId.value+','+info[0];
    }

    console.log(concatId.value);
})