window.onload = () => {

    let t = 0;

    document.getElementById("tag1").addEventListener("click", function () {
        let getTime = document.getElementById("time1");
        if (getTime.innerText.search('3') != -1) {
            getTime.innerHTML = "► Lectura terminada";
        } else {
            getTime.innerHTML = "► Lectura de 3 min";
        }
    });
    document.getElementById("tag2").addEventListener("click", function () {
        let getTime = document.getElementById("time2");
        if (getTime.innerText.search('2') != -1) {
            getTime.innerHTML = "► Lectura terminada";
        } else {
            getTime.innerHTML = "► Lectura de 2 min";
        }
    });
    document.getElementById("tag3").addEventListener("click", function () {
        let getTime = document.getElementById("time3");
        if (getTime.innerText.search('3') != -1) {
            getTime.innerHTML = "► Lectura terminada";
        } else {
            getTime.innerHTML = "► Lectura de 3 min";
        }
    });
    document.getElementById("tag4").addEventListener("click", function () {
        let getTime = document.getElementById("time4");
        if (getTime.innerText.search('3') != -1) {
            getTime.innerHTML = "► Lectura terminada";
        } else {
            getTime.innerHTML = "► Lectura de 3 min";
        }
    });
    document.getElementById("Talento").addEventListener("click", function () {
        let fecha = new Date();
        let meses_letra = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        let aux = fecha.getDate() + "/" + meses_letra[fecha.getMonth()] + "/" +
            fecha.getFullYear() + "<br> Hora Local <br>";
        aux += fecha.getHours() + ":" + fecha.getMinutes();
        document.getElementById("fech").innerHTML = aux;
        if (t == 0) {
            t = 1;
        } else {
            document.getElementById("fech").innerHTML = "";
            t = 0;
        }
    });
}