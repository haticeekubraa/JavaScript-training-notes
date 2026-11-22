
let url = "https://github.com/haticeekubraa";
let hedef = "2027 Kasım ayının 21'ine kadar komple web geliştirme kursunu bitirmek istiyorum.";
let sonuc;
let change;

//url kaç karakterlidir?
sonuc = url.length;

//hedef kaç kelimeden oluşmaktadır?
sonuc = hedef.split(" ").length;

//hedef içerisinde komple kelimesi var mı?
sonuc = hedef.includes("komple");

//url https ile mi başlıyor?
sonuc = url.startsWith("https");

//url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
//https://github.com/haticeekubraa/2027-kasım-ayının-21'ine-kadar-komple-web-geliştirme-kursunu-bitirmek-istiyorum.
change = hedef.toLowerCase().replaceAll(" ", "-");
sonuc = `${url}/${change}`;

console.log(sonuc);
console.log(change);

