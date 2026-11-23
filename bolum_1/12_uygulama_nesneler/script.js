
let siparis_1 = {
    "id": 101,
    "musteri_id": 12,
    "tarih": "31.12.2025",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah",
        "ilce": "İzmit",
        "sehir": "Kocaeli"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "IPhone 16 Pro",
            "urun_url": "http://abc.com/iphone-16-pro",
            "fiyat": 75000
        },
        {
            "urun_id": 6,
            "urun_adi": "IPhone 16 Pro Max",
            "urun_url": "http://abc.com/iphone-16-pro-max",
            "fiyat": 85000
        }
    ]
}

let siparis_2 = {
    "id": 102,
    "musteri_id": 12,
    "tarih": "30.11.2025",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah",
        "ilce": "İzmit",
        "sehir": "Kocaeli"
    },
    "urunler": [   
        {
            "urun_id": 6,
            "urun_adi": "IPhone 16 Pro Max",
            "urun_url": "http://abc.com/iphone-16-pro-max",
            "fiyat": 85000
        }
    ]
}


//2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %20) 
let siparis_1fiyat = (siparis_1.urunler[0].fiyat * 1.20) + (siparis_1.urunler[1].fiyat * 1.20);
let siparis_2fiyat = (siparis_2.urunler[0].fiyat * 1.20)

// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.
let toplamUcret = siparis_1fiyat + siparis_2fiyat;

console.log(siparis_1fiyat);
console.log(siparis_2fiyat);
console.log(toplamUcret);