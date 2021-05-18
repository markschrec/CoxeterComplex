function generateCoxeterComplex(){
    document.getElementById("output").innerHTML = "You Fool! I just started this tonight.<br> This functionality is not implemented yet.";
}

function clearPage(){
    document.getElementById("output").innerHTML = "The Coxeter Complex will be displayed here.";
    document.getElementById("mst").value = "2";
    document.getElementById("mst").disabled = false;
    document.getElementById("msu").value = "2";
    document.getElementById("msu").disabled = false;
    document.getElementById("mtu").value = "2";
    document.getElementById("mtu").disabled = false;
    document.getElementById("mstinf").checked = false;
    document.getElementById("msuinf").checked = false;
    document.getElementById("mtuinf").checked = false;
}

function toggleInput(checkbox, id){
    document.getElementById(id).disabled = checkbox.checked;
}
