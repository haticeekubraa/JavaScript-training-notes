
let sayilar = [3,5,7,8,12,23,45,65];

// 1- sayilar dizisindeki her bir sayının karesini yazdırınız.

// for (let i = 0; i < sayilar.length; i++)
// {
//     console.log((sayilar[i] ** 2));
    
// }

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

// for (let i = 0; i < sayilar.length; i++)
// {
//     if (sayilar[i] % 5 == 0)
//     {
//         console.log(sayilar[i]);
//     }
// }

// 3- 50-100 arasındaki sayıları azalan şekilde yazdırınız.

// for (let i = 100; i >= 50; i--)
// {
//     console.log(i);
    
// }

let urunler = ["iphone 16","samsung s25","iphone 17","samsung s26","samsung s23"];

// 4- urunler listesindeki tüm ürünleri büyük harfe çeviriniz.

// for (let i = 0; i < urunler.length; i++)
// {
//     console.log(urunler[i].toUpperCase());
    
// }

// 5- urunler listesinde içinde samsung kelimesi geçen kaç kelime vardır?

// let adet = 0;
// for (let i = 0; i < urunler.length; i++)
// {
//     if(urunler[i].includes("samsung"))
//     {
//         adet++
//     }
    
// }
// console.log(`${adet} samsung kelimesi bulundu`);


// 6-  ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumu yazdırınız.

let ogrenciler = [
    {"ad":"Yiğit", "soyad": "Bilgi","notlar": [60,70,80,90]},
    {"ad":"Ada", "soyad": "Bilgi","notlar": [80,50,75]},
    {"ad":"Çınar", "soyad": "Turan","notlar": [20,20,30]}
]

for (let i = 0; i < ogrenciler.length; i++)
{   
    let not_toplam = 0;
    let adet = 0;
    let ortlama = 0;
    let basari ="";
    for(let x = 0; x < ogrenciler[i].notlar.length; x++)
    {
        not_toplam += ogrenciler[i].notlar[x]
        adet++
    }
    
    ortlama = Math.floor(not_toplam / adet);

    if(ortlama >= 65)
    {
        basari = "Başarılı."
        
    }
    else 
    {
        basari = "Başarısız."
        
    }

    console.log(`${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli öğrencinin not ortlaması: ${ortlama}. ${basari}`);
}
