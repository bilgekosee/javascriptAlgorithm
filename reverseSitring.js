//Soru 2: Tersine Çevirme
//Bir fonksiyon yaz: reverseString(str). Bu fonksiyon, verilen bir metni (string) tersine çevirip döndürmeli.

/* Şartlar:
str bir string olacak.
Tersine çevirme işlemini manuel yapmaya çalış. Hazır bir fonksiyon kullanmadan.
İpuçları:
String’i bir diziye çevirebilirsin çünkü dizilerle çalışmak daha kolay.
Dizi elemanlarını tersine çevirdikten sonra tekrar string'e dönüştürmen gerekecek. */

/* 
1. String’i bir diziye çevir:
String’ler dizilere ayrılabilir: */
let str = "hello";
let arr = str.split(""); // ["h", "e", "l", "l", "o"]

/* 2. Diziyi tersine çevir:
Dizilerde reverse fonksiyonu kullanarak elemanları tersine çevirebilirsin: */
let reversedArr = arr.reverse(); // ["o", "l", "l", "e", "h"]

/* 3. Diziyi tekrar string yap:
Tersine çevrilen diziyi string’e dönüştürmek için join fonksiyonunu kullan: */
let reversedStr = reversedArr.join(""); // "olleh"

/* 4. Tamamını bir fonksiyonda topla:
Bu işlemleri bir araya getirerek bir fonksiyon yazalım: */

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
