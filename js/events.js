
//4. Eventos de el documento
//DOMContentLoaded, load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Ha ocurrido el evento DOMContentLoaded");
    //1. Eventos del mouse
    //click, mousedown, mouseup, mouseover, mouseout
    //origen, evento, escuchador, acciones

    var btn_ing = document.getElementById("btn-ing");
    var btn_down = document.getElementById("btn-down");
    var btn_up = document.getElementById("btn-up");
    var btn_over = document.getElementById("btn-over");
    var btn_out = document.getElementById("btn-out");

    btn_ing.addEventListener("click", function () {
        console.log(c);
        console.log("Se hizo click sobre el botón");
    });

    btn_down.addEventListener("mousedown", function () {
        console.log(c);
        console.log("Se presionó el click");
    });

    btn_up.addEventListener("mouseup", function () {
        console.log(c);
        console.log("Se soltó el click");
    });

    btn_over.addEventListener("mouseover", function () {
        console.log(c);
        console.log("Mouse sobre el botón");
    });

    btn_out.addEventListener("mouseout", function () {
        console.log(c);
        console.log("Mouse fuera del botón");
    });

    //2. Eventos del teclado
    //keydown, keyup, keypress
    var txt_key_down = document.getElementById("txt-key-down");
    var txt_key_up = document.getElementById("txt-key-up");
    var txt_key_press = document.getElementById("txt-key-press");


    txt_key_down.addEventListener("keydown", function () {
        console.log("Se ha bajado una tecla");
    });
    txt_key_up.addEventListener("keyup", function () {
        console.log("Se ha liberado una tecla");
    });
    txt_key_press.addEventListener("keypress", function () {
        console.log("Se ha presionado una tecla");
    });

    //3. Eventos para formulario
    //submit, change, focus, blur
    var frm_submit = document.getElementById("frm-submit");
    var frm_change = document.getElementById("frm-change");
    var frm_focus = document.getElementById("frm-focus");
    var frm_blur = document.getElementById("frm-blur");

    frm_submit.addEventListener("submit", function () {
        console.log("Ha ocurrido el evento submit");
    });
    frm_change.addEventListener("change", function () {
        console.log("Ha ocurrido el evento change");
        console.log(frm_change.value);
    });
    frm_focus.addEventListener("focus", function () {
        console.log("Ha ocurrido el evento focus");
    });
    frm_blur.addEventListener("blur", function () {
        console.log("Ha ocurrido el evento blur");
    });

    //5. Eventos de tiempo
    //setTimeout, setInterva
    var btn_set_Timeout = document.getElementById("btn-set-Timeout");
    var btn_set_Interval = document.getElementById("btn-set-Interval");

    btn_set_Timeout.addEventListener("click", function () {
        setTimeout(function () {
            console.log("Se ha ejecutado el evento despues de 3 sg");
        },
            3000
        );
    });
    btn_set_Interval.addEventListener("click", function () {
        setInterval(function () {
            console.log("Se ha ejecutado una iteración de setInterval");
        },
            2000
        );
    });

});

document.addEventListener("load", function () {
    console.log("Ha ocurrido el evento load");
});


