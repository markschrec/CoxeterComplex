function onLoad(){
    var mstInputs = document.getElementsByClassName("mst");
    var mstinfInputs = document.getElementsByClassName("mstinf");

    for(let input of mstInputs){
        input.setAttribute("type","text");
        input.setAttribute("value","2");
        input.setAttribute("required","reqired");
        input.setAttribute("pattern","^0*(1[0-9]+|[2-9][0-9]*)$");
        input.setAttribute("oninvalid",
            "alert('Please enter an integer greater than or equal to 2.');");
        input.noValidate = true;
    }
    
    for(let input of mstinfInputs){
        input.setAttribute("type","checkbox");
        input.setAttribute("onchange","toggleInput(this);");
    }
}

function generateCoxeterComplex(){
    document.getElementById("output").innerHTML = "You Fool! I just started this tonight.<br> This functionality is not implemented yet.";
}

function clearPage(){
    var mstInputs = document.getElementsByClassName("mst");
    var mstinfInputs = document.getElementsByClassName("mstinf");

    document.getElementById("output").innerHTML = "The Coxeter Complex will be displayed here.";

    for(let input of mstInputs){
        input.value = "2";
        input.disabled = false;
    }

    for(let input of mstinfInputs){
        input.checked = false;
    }
}

function toggleInput(checkbox){
    var mstbox = document.getElementById(checkbox.getAttribute("linkedmst"));
    mstbox.disabled = checkbox.checked;
    mstbox.noValidate = checkbox.checked;
}
