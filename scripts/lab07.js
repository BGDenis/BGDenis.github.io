
window.onload = function () {
    var btn_colorear = document.getElementById("colorear");
    var color_actual = 1;
    btn_colorear.onclick = function colorea() {
        if (color_actual == 1) {
            var cont_elemet = document.getElementsByClassName('cont');
            for (var i = 0; i < cont_elemet.length; i++) {
                // cont_elemet[i].style.backgroundColor = "blue";
                if (i < 5) {
                    cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                        p.style.backgroundColor = "#b74919";
                        btn_colorear.style.backgroundColor = "#b74919";
                    })
                } else {
                    cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                        p.style.backgroundColor = "#1d6fa9"
                        btn_colorear.style.backgroundColor = "#1d6fa9";
                    })
                }
            }
            color_actual = 0;
        } else {
            var cont_elemet = document.getElementsByClassName('cont');
            for (var i = 0; i < cont_elemet.length; i++) {
                // cont_elemet[i].style.backgroundColor = "blue";
                if (i < 5) {
                    cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                        p.style.backgroundColor = "#1d6fa9";
                        btn_colorear.style.backgroundColor = "#1d6fa9";
                    })
                } else {
                    cont_elemet[i].querySelectorAll("p").forEach(function (p) {
                        p.style.backgroundColor = "#b74919"
                        btn_colorear.style.backgroundColor = "#b74919";
                    })
                }
            }
            color_actual = 1;
        }
    };
};