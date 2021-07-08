$(document).ready(function () {
  $("section").hide();
  $("#tutup").hide();
  $("#tombol-ucapan").click(function () {
    const time = new Date().getHours();
    const ucapan = document.getElementById("ucapan");
    let salam;
    if (time <= 6) {
      salam = "Selamat pagi (dini hari)";
    } else if (time > 6) {
      salam = "Selamat pagi";
    } else if (time >= 12) {
      salam = "Selamat siang";
    } else if (time > 17) {
      salam = "Selamat malam";
    } else {
      salam = "turu woi turu";
    }
    alert(salam + ", perkenalkan nama saya Andre.");
    var nama = prompt("Mungkin kita kenalan dulu. \nSiapa namamu?", "kamu");
    if (confirm("Apakah benar hari ini kamu ulang tahun?")) {
      alert("Karena hari ini adalah hari spesialmu...");
      ucapan.innerHTML = "Happy birthday, dear " + nama + "!<br>Semoga Tuhan memberkati kamu senantiasa dan semua yang kamu impikan bisa terwujud.<br>Semoga selalu sehat dan jangan lupa untuk bahagia!";
    } else {
      close();
    }
    document.title = "Selamat Ulang Tahun!";

    $("section").show("fast");
    $("#tutup").show();
  });
  $("#tutup").click(function () {
    $("section").hide();
    $("#tutup").hide();
  });
});
