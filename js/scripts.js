function Login() {
    var done = 0;
    var n = document.forms['login']['email'].value;
    email = n.toLowerCase();
    var p = document.forms['login']['password'].value;
    password = p.toLowerCase();
    if (email == "manguniversity@mail.com" && password == "manguniversity") {
        window.location.href = "./landingPage.html";
        alert("Berhasil Login!")
    } else
    if (done == 0) {
        alert("Username/Password yang anda masukan salah!  (username: manguniversity@mail.com | Pass: manguniversity)");
    }
}

function inputdata() {
    var n = document.forms['datapribadi']['nama'].value;
    var p = document.forms['datapribadi']['jenisK'].value;
    var a = document.forms['datapribadi']['programS'].value;

    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);


    kol1.innerHTML = n;
    kol2.innerHTML = p;
    kol3.innerHTML = a;

}