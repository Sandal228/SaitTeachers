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

    if (a.src.indexOf("images/star_2.png") >-1)
    {
        for (let i=0; i <= one; i++)
        {
            b = ids[i]
            a = document.getElementById(b);
            a.src="images/star_1.png";
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
                a.src="images/star_2.png";
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
    var mail = document.getElementById("email").value;
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
    var arr = ["images/tshirt_1.jpg", "images/tshirt_2.jpg", "images/tshirt_3.jpg", "images/tshirt_4.jpg"];
    var id_img = ["ts_1", "ts_2"];

    for (let i = 0; i < id_img.length; i++) {
        c = document.getElementById(id_img[i]);
        img = random(arr);
        c.src = img;
    }
}
var result = 0
function summa(arg) {
    var corzinaSum = document.getElementById("corzina");
    var sum = ["but_1", "but_2", "but_3", "but_4", "but_5", "but_6"];
    met = ["mod1", "mod2", "mod3", "mod4", "mod5", "mod6"];
    arg -= 1
    var doc = document.getElementById(met[arg]);
    
    var res = ""
    c = document.getElementById(sum[arg]);
    if (window.getComputedStyle(c).backgroundColor == "rgb(80, 79, 80)" && window.getComputedStyle(doc).display == "none")
    {
        result += 499
        c.style.backgroundColor = "gray"  
        doc.style.display = "block";
        
        c.innerHTML = "УБРАТЬ ИЗ ЗАКАЗА"
    }
    else 
    {
        result -= 499
        c.style.backgroundColor = "rgb(80, 79, 80)" 
        res = "Сумма заказа: " + result
        corzinaSum.innerHTML = res
        doc.style.display = "none";
        alert(res)
        c.innerHTML = "ДОБАВИТЬ В ЗАКАЗ"
    }
    

    res = "Сумма заказа: " + result
    corzinaSum.innerHTML = res
}


function modal_wind(dec) {
    met = ["mod1", "mod2", "mod3", "mod4", "mod5", "mod6"]
    mas = ["but_1", "but_2", "but_3", "but_4", "but_5", "but_6", ]
    var sum = " "
    var text = document.getElementById("corzina")
    var doc = document.getElementById(met[dec]);
    var knp = document.getElementById(mas[dec])
    if (window.getComputedStyle(doc).display == "none")
    {
        doc.style.display = "block";
    }
    else {
        result -= 499
        corzina.innerHTML = "Сумма заказа: " + result;
        doc.style.display = "none";
        knp.innerHTML = "ДОБАВИТЬ В ЗАКАЗ";
        knp.style.backgroundColor = "rgb(80, 79, 80)";



    }
    
}



