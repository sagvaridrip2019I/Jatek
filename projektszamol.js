var vege = false;
function start(){
    document.getElementById("tovabb").disabled = false;
    if (document.getElementById("gomb1").innerHTML == "Újra") {
        clearTimeout(ido);
    }
    document.getElementById("szam").innerHTML = Math.floor(Math.random()*1000);
    document.getElementById("pont").innerHTML = 0;
    document.getElementById("gomb1").innerHTML = "Újra";
}

//ellenőrzi a műveletet
function szamol () {
    var elso = document.getElementById("elsoszam").value;
    var masodik = document.getElementById("masodikszam").value;
    var jel = document.getElementById("muvelet").value;
    var text = document.createElement("p");
    if (jel == "+") {
        var ered = elso*1 + masodik*1;
        if (elso <= 50 || masodik <= 50) {
            var csalo = true;
        }
    } else if (jel == "-") {
        var ered = elso - masodik;
        if (elso <= 50 || masodik <= 50) {
            var csalo = true;
        }
    } else if (jel == "*") {
        var ered = elso * masodik;
        if (elso <= 5 || masodik <= 5) {
            var csalo = true;
        } else {
            var csalo = false;
        }
    } else if (jel == "/") {
        var ered = elso / masodik;
        if (elso <= 5 || masodik <= 5) {
            var csalo = true;
        } else {
            var csalo = false;
        }
    }
    if (document.getElementById("szam").innerHTML == ered) {
        document.getElementById("szam").innerHTML = Math.floor(Math.random()*1000);
        if (csalo == true) {
            document.getElementById("pont").innerHTML = document.getElementById("pont").innerHTML*1 + 1*1;
     } else {
        document.getElementById("pont").innerHTML = document.getElementById("pont").innerHTML*1 + 3*1;
        };
    } else  {
        vege = true;
        alert("A játéknak vége ☠");
        document.getElementById("szam").innerHTML = "";
        if (document.getElementById("rekord").innerHTML <= document.getElementById("pont").innerHTML) {
            document.getElementById("rekord").innerHTML = document.getElementById("pont").innerHTML;
        }
        var elozpont = document.createTextNode(document.getElementById("pont").innerHTML + " pont");
        text.appendChild(elozpont);
        document.getElementById("eredmenyek").appendChild(text);
        document.getElementById("pont").innerHTML = "";
        document.getElementById("gomb1").innerHTML = "Játék kezdése!";
        document.getElementById("tovabb").disabled = true;
    }
}

//visszaszámláló:
var c = 30;
var t;

function szamlalo() {
	if (c == -1) {
    	clearTimeout(t);
    } else if (vege == false) {
    	document.getElementById("szamlalo").innerHTML = c;
  		c = c - 1;
  		t = setTimeout(szamlalo, 1000);
    }
}

function szamlalobe() {
	clearTimeout(t);
    c = 30;
    szamlalo();
}

//megállít 30 sec után
function stop () {
    var text = document.createElement("p");
    if(vege == false) {
        alert("A játéknak vége ☠");
        if (document.getElementById("rekord").innerHTML <= document.getElementById("pont").innerHTML) {
            document.getElementById("rekord").innerHTML = document.getElementById("pont").innerHTML;
        }
        var elozpont = document.createTextNode(document.getElementById("pont").innerHTML + " pont");
        text.appendChild(elozpont);
        document.getElementById("eredmenyek").appendChild(text);
        document.getElementById("szam").innerHTML = "";
        document.getElementById("pont").innerHTML = "";
        document.getElementById("gomb1").innerHTML = "Játék kezdése!";
        document.getElementById("tovabb").disabled = true;
    }
}
