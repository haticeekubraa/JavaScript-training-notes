//Nesneler(Objects)

let kullanici1 = {
    "ad": "Hatice Kübra",
    "soyad": "Çalışkan",
    "adres": {
        "şehir": "Gaziantep",
        "ilçe": "Şehitkamil"
    },
    "hobiler": ["yazılım", "müzik"]
};
let kullanici2 = {
    "ad": "Cahit",
    "soyad": "Zarifoğlu",
    "adres": {
        "şehir": "Kahramanmaraş",
        "ilçe": "Elbistan"
    },
    "hobiler": ["şiir", "müzik"]
};

let kullanicilar = [kullanici1, kullanici2];
let sonuc;

sonuc = kullanici1["ad"];
sonuc = kullanici2["ad"];
sonuc = kullanici2["adres"]["ilçe"];
sonuc = kullanici1.adres.şehir;
sonuc = kullanici2.hobiler[0];

sonuc = kullanicilar[1].soyad;

console.log(sonuc);
