let x = document.getElementById("ime");
let y = document.getElementById("prezime");
let z = document.getElementById("mejl");

if(x == null || y == null || z == null){
    alert("Name, email ili prezime su null");
    return;
}

if(x == "" || y == "" || z == ""){
    alert("Prazno polje");
    return;
}

if(x > 18 || y > 18){
    alert("Ime ili prezime duzi od 18 slova!")
    return;
}

if(!z.contains("@")){
    alert("Email mora imati @!");
    return;
}