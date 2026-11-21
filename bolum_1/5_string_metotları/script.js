// String Metotları

let mesaj ="   Odaklanmak, 1000 iyi fikre hayır diyebilmektir.";
let sonuc;

sonuc = mesaj.length;
sonuc = mesaj.toLowerCase();
sonuc = mesaj.toUpperCase();
sonuc = mesaj.split(" ");
sonuc = mesaj.split(" ")[2];
sonuc = mesaj.split(" ")[0];
sonuc = mesaj.split(",");
sonuc = mesaj.slice(8,28);
sonuc = mesaj.slice(20);

sonuc = mesaj.substring(10);
sonuc = mesaj.replace("1000","10.000");

sonuc = mesaj.trim()

console.log(sonuc);
