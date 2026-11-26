// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelime(kelime, defa)
{
    for(let i = 0; i < defa; i++)
    {
        console.log(kelime);
        
    }
}

kelime("selam", 6);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function dikdortgen(uzunKenar, kisaKenar)
{
    let cevre = (uzunKenar * 2) + (kisaKenar * 2);
    let alan = uzunKenar * kisaKenar;

    console.log(`Dikdörtgenin çevresi: ${cevre}, alanı: ${alan}`);
    
}

dikdortgen(7, 4);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTura()
{
    let sayi = Math.floor(Math.random() * 101);

    if (sayi < 50)
    {
        console.log("Yazı");
        
    }
    else{
        console.log("Tura");
        
    }
}
yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolen(sayi)
{
    let sayilar = [];
    for(let i = 1; i <= sayi; i++)
    {
        if(sayi % i == 0)
        {
            sayilar.push(i);
            
        }
    }
    return sayilar;
}

console.log(tamBolen(15));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam()
{
    let sonuc = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        sonuc += arguments[i];
    }
    return sonuc;
}
console.log(toplam(7,8,5,65,25,43,89));
