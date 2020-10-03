"use strict";
(() => {
    window.onload = () => {
        document.getElementById("extraer").addEventListener("click", function extraer() {
            let getInput = document.getElementById("inp_nombres").value;
            let getfecha = document.getElementById("inp_fecha").value;
            if (getInput !== "" || getfecha !== "") {
                let nombres = "", caracteres;
                //VARIABLE PARA FECHA
                let meses_letra = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
                let fecha_actual = new Date();
                let fecha_nacimiento = new Date(getfecha);
                //SEPARAMOS NOMBRES DE APLLIDOS
                caracteres = getInput.split(" ");
                for (let i = 0; i < caracteres.length; i++) {
                    if (i >= 2)
                        nombres += caracteres[i] + " ";
                }
                if (getInput === "" || caracteres.length < 3)
                    document.querySelectorAll("label").forEach(function (label) {
                        label.innerHTML = "-";
                    });
                else {
                    //ELEMENTOS LABEL PARA MOSTRAR INFORMACION DE NOMBRES
                    document.getElementById("lname").innerHTML = caracteres[0];
                    document.getElementById("fname").innerHTML = caracteres[1];
                    document.getElementById("name").innerHTML = nombres;
                    document.getElementById("long_ap").innerHTML = caracteres[0].length + caracteres[1].length;
                }
                //VALIDA FECHA NACIMIENTO
                let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
                if (edad < 0)
                    edad = 'Nacimiento Invalido';
                //ELEMENTOS LABEL PARA MOSTRAR INFORMACION DE FECHA
                if (getfecha !== "") {
                    document.getElementById("edad").innerHTML = edad;
                    document.getElementById("mes").innerHTML = meses_letra[fecha_nacimiento.getMonth()];
                }
            }else{
                alert("Datos incompletos");
            }
        });
        var btn_colorear = document.getElementById("colorear");
        var color_actual = 1;
        //FUNCIONES PARA CAMBIAR COLOR
        btn_colorear.onclick = () => {
            if (color_actual == 1) {
                var cont_elemet = document.getElementsByClassName('cont');
                for (var i = 0; i < cont_elemet.length; i++) {
                    if (i < 5) {
                        cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                            p.style.backgroundColor = "#b74919";
                            btn_colorear.style.backgroundColor = "#b74919";
                        });
                    } else {
                        cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                            p.style.backgroundColor = "#1d6fa9";
                            btn_colorear.style.backgroundColor = "#1d6fa9";
                        });
                    }
                }
                color_actual = 0;
            } else {
                var cont_elemet = document.getElementsByClassName('cont');
                for (var i = 0; i < cont_elemet.length; i++) {
                    if (i < 5) {
                        cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                            p.style.backgroundColor = "#1d6fa9";
                            btn_colorear.style.backgroundColor = "#1d6fa9";
                        });
                    } else {
                        cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                            p.style.backgroundColor = "#b74919";
                            btn_colorear.style.backgroundColor = "#b74919";
                        });
                    }
                }
                color_actual = 1;
            }
        };
    };
})();