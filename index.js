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

    updateSVG();
}

function updateSVG(){
    var svg_root = document.getElementById('output');
    var svg_source = svg_root.outerHTML;
    var svg_data_uri = 'data:image/svg+xml;base64,' + btoa(svg_source);
    var link = document.getElementById('download');
    link.setAttribute('href', svg_data_uri);
}

function generateCoxeterComplex(){
    var svg = document.getElementById("output");
    var eye1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye1.setAttribute("cx","200");
    eye1.setAttribute("cy","50");
    eye1.setAttribute("r","25");
    eye1.setAttribute("stroke","black");
    eye1.setAttribute("fill","black");
    svg.appendChild(eye1);

    var eye2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye2.setAttribute("cx","300");
    eye2.setAttribute("cy","50");
    eye2.setAttribute("r","25");
    eye2.setAttribute("stroke","black");
    eye2.setAttribute("fill","black");
    svg.appendChild(eye2);

    var mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
    mouth.setAttribute("d"," M 350 150 A 100 100 0 0 1 150 150");
    svg.appendChild(mouth);
    
    updateSVG();
}

function clearPage(){
    var mstInputs = document.getElementsByClassName("mst");
    var mstinfInputs = document.getElementsByClassName("mstinf");

    document.getElementById("output").innerHTML = "";

    for(let input of mstInputs){
        input.value = "2";
        input.disabled = false;
    }

    for(let input of mstinfInputs){
        input.checked = false;
    }

    updateSVG();
}

function toggleInput(checkbox){
    var mstbox = document.getElementById(checkbox.getAttribute("linkedmst"));
    mstbox.disabled = checkbox.checked;
    mstbox.noValidate = checkbox.checked;
}
