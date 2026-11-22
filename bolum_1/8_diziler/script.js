
let sehirler = ["İstanbul", "Gaziantep", "İzmir"];
let bolumler = ["Felsefe", "Mühendislik", "Sosyoloji"];
let universiteler = ["Boğaziçi", "Gaün", "23 Eylül"];

let sonuc;

sonuc = `${sehirler[0]} ${universiteler[0]} ${bolumler[0]}`;
sonuc = `${sehirler[1]} ${universiteler[1]} ${bolumler[1]}`;
sonuc = `${sehirler[2]} ${universiteler[2]} ${bolumler[2]}`;

let tercih1 = ["İstanbul", "Boğaziçi", ["Sosyoloji", "Felsefe", "Mühendislik"]];
let tercih2 = ["Gaziantep", "Gaün", ["Sosyoloji", "Felsefe", "Mühendislik"]];
let tercih3 = ["İzmir", "23 Eylül", ["Sosyoloji", "Felsefe", "Mühendislik"]];

//Güncelleme
tercih2[1] = "Hasan Kalyoncu";

sonuc = `${tercih2[0]} ${tercih2[1]} ${tercih2[2][0]}`;


console.log(sonuc);
console.log(typeof sonuc);

console.log(tercih1[2][0]);
