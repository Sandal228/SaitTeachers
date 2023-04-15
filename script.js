function print_contact() {
    var sk="skype:help"
    var tg='telegram: @helper'
    var tl='tel:84632348789'
    alert( sk + '\n' + tg + '\n' + tl )
}

function print_present() {
    var present='Вы получили скидку на первый заказ: 249 рублей'
    alert(present)
}

function calcul() {
    var a = parseFloat(prompt('Введите число: '))
    var b = parseFloat(prompt('Введите число: '))

    alert('результат умножения: ' + (a * b) + '\n' + 'результат вычитания: ' + (a - b) + '\n' + 'результат сложения: ' + (a + b) + '\n' 
    + 'результат деления: ' + (a / b))
}


function calc()  {
    var text = prompt('введите текст: ');
    var l = text.length;
    var g = text[0];
    var k = text[- 1];
    var z = text[text.length];
    alert(text + '\n' + l + '\n' + g + '\n' + k + '\n' + z);
    

}

function indexof_1()  {
    var text = prompt('введите текст: ');
    var ind = text[3];
    alert(text.indexOf('текст'));
    var g = text.replace('привет','пока');
    alert(g + '\n' + ind);

}

function button_test()  {
    var but = document.getElementById('button_1');
    but.style.borderRadius = "10px";
    but.style.padding = "20px";
    but.style.border = "0px";
    but.style.backgroundColor = "blue"
}

function test_1()  {
    var but_1 = document.getElementById('button_1');
    but_1.style.borderRadius = "5px";
    but_1.style.padding = "10px";
    but_1.style.border = "1px";
    but_1.style.backgroundColor = "green"
}

function change_style()  {
    b = document.getElementById("button_1");
    //проверка заднего фона

    if (window.getComputedStyle(b).backgroundColor == "rgb(255,0,0)" )

    {
        b.style.backgroundColor = "green";
    }
    else 
        b.style.backgroundColor = "red";

        // проверка скругления

    if (window.getComputedStyle(b).borderRadius != "0px")
    {
        b.style.borderRadius = "0px";
    }
    else 
        b.style.borderRadius = "10px";

    if (window.getComputedStyle(b).padding != "20px")
    {
        b.style.padding = "20px";
    }
    else
        b.style.padding = "5px";
}

function sravn() {
    var a = "10";
    var b = "20";

    if (a < b && b == 20 );
    {
        alert("условие верно")
    }

    if (a == b || a != 15) {
        alert("Условие верно")
    }

}

function test_us()  {
    var i = 0

    for (let i = 0; i < 3; i++)
    {
        alert(i)
    }
    
}

function massive() {
    var mas = ["o1", "o2", "o3"];
   
    for (let i = 0; i < mas.length; i++)
    {
        let t = document.getElementById(mas[i]);

        if (window.getComputedStyle(t).padding != "20px")
        {
            t.style.padding = "20px";
        }
    
        else
            t.style.padding = '5px';

        if (window.getComputedStyle(t).backgroundColor != "red")
        {
            t.style.backgroundColor = "green";
        }
    
        else
            t.style.backgroundColor = "yelow";
    }

   
    
}

function show_modal() {
    var modal = document.getElementById("modal_window");

    if (window.getComputedStyle(modal).display == "none")
    {
        modal.style.display = "block";
    }
    else
        modal.style.display = "none";
}


function show_star(one) {
    one = one-1
    var ids = ["st_1", "st_2", "st_3","st_4","st_5"]

    b = ids[one]
    a = document.getElementById(b);

    if (a.src.indexOf("star_2.png") >-1)
    {
        for (let i=0; i <= one; i++)
        {
            b = ids[i]
            a = document.getElementById(b);
            a.src="star_1.png";
        }
    }
    else
    {
        for (let i=0; i<ids.length; i++)
        {
            if (i>one)
            {
                b = ids[i];
                a = document.getElementById(b);
                a.src="star_2.png";
            }
        }
    }
    
}

function show_present() {
    document.getElementById('podarok').style.opacity=1;
}
setTimeout(show_present, 5000)

function show_mod() {
    var modal = document.getElementById("podarok");

    if (window.getComputedStyle(modal).display == "none")
    {
        modal.style.display = "block";
    }
    else
        modal.style.display = "none";
}

function show_modal2() {
    var modal = document.getElementById("okno");

    if (window.getComputedStyle(modal).display == "none")
    {
        modal.style.display = "block";
    }
    else
        modal.style.display = "none";
}

function form() {
    var name = document.getElementById("name").value;
    var fam = document.getElementById("fam").value;
    var mail = document.getElementById("mail").value;
    var tel = document.getElementById("tel").value;
    if (name == '' || name == " ")
    {
        document.getElementById("name").placeholder = "Введите имя"
        
    }
    else
    {
        document.getElementById("name").innerHTML = "Ваше имя: " + name
    }
    if (fam == '' || fam == " ")
    {
        document.getElementById("sp_2").innerHTML = "Введите фамилию"
    }
    else
    {
        document.getElementById("sp_2").innerHTML = "Ваша фамилия: " + fam
    }
    if (mail.indexOf('@') == -1)
    {
        document.getElementById("sp_3").innerHTML = "Введите почту"
    }
    else
    {
        document.getElementById("sp_3").innerHTML = "Ваша почта: " + mail
    }

    if (tel[0] != '+' || tel[0] != '8' || tel.length < 11 || tel.lenth > 12)
    {
        document.getElementById("sp_4").innerHTML = "Введите телефон"
    }
    else
    {
        document.getElementById("sp_4").innerHTML = "Ваш телефон: " + tel
    }


}

function random(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function rand_Tshirt() {
    var arr = ["photo2.png", "star_1.png"];
    var id_img = ["ts_1", "ts_2"];

    for (let i = 0; i < id_img.length; i++) {
        c = document.getElementById(id_img[i]);
        img = random(arr);
        c.src = img;
    }
}