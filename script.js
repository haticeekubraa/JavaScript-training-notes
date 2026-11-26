
function selamlama(mesaj)
{
    console.log(mesaj);
    
}

selamlama("Hello");
selamlama("Merhaba");

function yasHesapla(dogumYili)
{
    let simdi = new Date().getFullYear();
    return simdi - dogumYili;
}

console.log(yasHesapla(2006));
console.log(yasHesapla(1976));
console.log(yasHesapla(1956));

function emekliliğeKalanYil(isim, dogumYili)
{
    let yas = yasHesapla(dogumYili);
    let kalanSene = 65 - yas;

    if(kalanSene > 0)
    {
        console.log(`${isim}, emekliliğe ${kalanSene} seneniz kaldı.`);
        
    }
    else{
        console.log("zaten emekli oldunuz.");
    }
    
}

emekliliğeKalanYil("Kübra", 2006);
emekliliğeKalanYil("Muhammet", 1976);
emekliliğeKalanYil("Hümeyra", 2002);
emekliliğeKalanYil("Abuzer", 1956);
