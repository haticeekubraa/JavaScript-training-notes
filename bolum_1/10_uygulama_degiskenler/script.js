
let meyveler = ["Kiraz", "Karpuz", "Kavun", "Erik"];
let sonuc;

//meyveler kaç elemanlıdır?
sonuc = meyveler.length

//dizinin ilk ve son elemanlarını yazdırınız
sonuc = meyveler.at(0);
sonuc = meyveler.at(-1);

//Kavun dizinin bir elemanı mıdır?
sonuc = meyveler.includes("Kavun");
sonuc = meyveler.indexOf("Kavun");

//Çilek elemanını dizinin sonuna ekleyiniz
sonuc = meyveler.push("Çilek");

//dizinin son iki elemanını siliniz
sonuc = meyveler.splice(3,4);

//aşağıdaki bilgileri bir dizide sakalyınız ve öğrenciler yaşını ve not ortalamasını hesaplayınız
let ogrenci1 = ["Serenay Sarıkaya", 2000, [45,89,72]];
let ogrenci2 = ["Mert Yazıcıoğlu", 2001, [64,42,93]];
let ogrenci3 = ["Esra Bilgiç", 2003, [55,86,77]];

let ogrencilerYas = `${ogrenci1[0]} ${2026-ogrenci1[1]} yaşındadır. 
${ogrenci2[0]} ${2026-ogrenci2[1]} yaşındadır. 
${ogrenci3[0]} ${2026-ogrenci3[1]} yaşındadır.`;

let ogrenci1Not = Math.floor((45+89+72) / 3);
let ogrenci2Not = Math.floor((64+42+93) / 3);
let ogrenci3Not = Math.floor((55+86+77) / 3);

let ogrencilerNot = `${ogrenci1[0]}'nın not ortalaması ${ogrenci1Not}'dir. 
${ogrenci2[0]}'nun not ortalaması ${ogrenci2Not}'dır. 
${ogrenci3[0]}'in not ortalaması ${ogrenci3Not}'dir`;

console.log(sonuc);
console.log(ogrencilerYas);
console.log(ogrencilerNot);
