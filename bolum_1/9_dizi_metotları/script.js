// Dizi Metotları

let isimler = ["Ayşe", "Hümeyra", "Hatice", "Kübra", "Zeynep", "Ahmet", "Asaf"];
let sonuc;

sonuc = isimler.length;
sonuc = isimler.toString();
sonuc = isimler.join(" ");

// eleman silme
sonuc = isimler.pop();
sonuc = isimler.shift();

//eleman ekleme
sonuc = isimler.push("Çalışkan");
sonuc = isimler.unshift("Çalışkan");

//eleman arama
sonuc = isimler.indexOf("Kübra");
sonuc = isimler.includes("Hatice Kübra");
sonuc = isimler.lastIndexOf("Çalışkan");

//silme, ekleme
sonuc = isimler.splice(5,6);
sonuc = isimler.splice(0,0,"Yiğit","Çınar");

console.log(sonuc);
