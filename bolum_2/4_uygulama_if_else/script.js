// If/Else Uygulamaları

// 1- Bir sayının 50-100 arasında olup olmadığını kontrol ediniz.
let a = 35;

if ((a >= 50) && (a <= 100))
{
    console.log(`${a}, 50 ile 100 arasında bir sayıdır.`);
    
}
else 
{
    console.log(`${a}, belirtilen koşullar arasında değildir.`);
    
}

// 2- Bir sayının pozitif çift sayı olup olmadığını kontrol ediniz.
let x = 50;

if (x > 0 && ((x % 2) == 0) )
{
    console.log(`${x} sayısı pozitif ve çift bir sayıdır.`);
}
else
{
    console.log(`${x} sayısı pozitif ve çift bir sayı değildir.`);
}

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız. (ödev: else if kullanımı)
let c = 40, d = 12, y = 35;

if (c > d && c > y)
{
    console.log(`${c} en büyük sayı`);
}
else if (d > c && d > y)
{
    console.log(`${d} en büyük sayı`);
}
else if (y > c && y > d)
{
    console.log(`${y} en büyük sayı`);
}

// 4- 2 vize (40%) ve 1 final (%60) noyuna göre ortalama hesaplayınız.
let vize1 = 75;
let vize2 = 72;
let final = 45;

let ortalama = Math.floor((((vize1 + vize2) * 0.4 ) + (final * 0.6) / 3)); 
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
if (ortalama >= 50)
{
    console.log("Geçti.");
    
}
else
{
    console.log("Kaldı!");
    
}
// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
if (ortalama >= 50 && final >= 50)
{
    console.log("Geçti.");
    
}
else 
{
    console.log("Kaldı!");
    
}
// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile geçmiş sayılsın.
if(ortalama >= 50 || final >= 70)
{
    console.log("Geçti.");
    
}
else 
{
    console.log("Kaldı!");
    
}

console.log(ortalama);