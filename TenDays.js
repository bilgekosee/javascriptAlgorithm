/* 1. Gün - Değişkenler ve Operatörler
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, iki sayıyı parametre olarak alacak ve şu işlemleri yapacak:

Sayıların toplamını döndür.
Sayıların farkını döndür (büyük sayıdan küçük sayıyı çıkar).
Sayıların çarpımını döndür.
Eğer ikinci sayı 0 değilse, bölme işlemini döndür. Eğer ikinci sayı 0 ise, "Tanımsız" döndür. */

function basicOperations(a, b) {
  const sum = a + b; // Toplama işlemi
  const diff = Math.abs(a - b); // Fark işlemi (büyük sayıdan küçük sayıyı çıkarır)
  const product = a * b; // Çarpma işlemi
  const division = b !== 0 ? a / b : "Tanımsız"; // Bölme işlemi

  return {
    toplam: sum,
    fark: diff,
    carpim: product,
    bolme: division,
  };
}

console.log(basicOperations(3, 2));
console.log(basicOperations(5, 0));

/* 
2. Gün - Koşullar ve Döngüler
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir sayı alacak ve aşağıdaki kurallara göre bir string döndürecek:

Eğer sayı 3'e tam bölünüyorsa, "Fizz" döndür.
Eğer sayı 5'e tam bölünüyorsa, "Buzz" döndür.
Eğer hem 3'e hem 5'e tam bölünüyorsa, "FizzBuzz" döndür.
Hiçbirine tam bölünmüyorsa, sayının kendisini döndür. */

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 == 0) {
    return "fizzbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 == 0) {
    return "buzz";
  } else {
    return num;
  }
}
console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7));

/* 3. Gün - Diziler ve Döngüler
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir dizi alacak ve aşağıdaki işlemleri yapacak:

Dizi içindeki tüm çift sayıları bir alt diziye koy.
Dizi içindeki tüm tek sayıları başka bir alt diziye koy.
Hem çift sayılar alt dizisini hem de tek sayılar alt dizisini döndür. */
function separateEvenAndOdd(numbers) {
  const even = [];
  const odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }
  return { even, odd };
}
console.log(separateEvenAndOdd([1, 2, 3, 4, 5, 6]));
// Çıktı: { even: [2, 4, 6], odd: [1, 3, 5] }

console.log(separateEvenAndOdd([11, 22, 33, 44]));
// Çıktı: { even: [22, 44], odd: [11, 33] }

/* 
4. Gün - String ve Manipülasyon
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir cümle alacak ve aşağıdaki işlemleri yapacak:

Cümlenin her kelimesini tersine çevir (sadece harfleri ters çevir, kelimelerin sırası aynı kalacak).
Tüm ters çevrilmiş kelimeleri birleştir ve bir string olarak döndür. */

function reverseWords(sentence) {
  const words = sentence.split(" "); // Cümleyi kelimelerine ayır
  const reversedWords = words.map((word) => word.split("").reverse().join("")); // Her kelimeyi ters çevir
  return reversedWords.join(" "); // Kelimeleri tekrar birleştir
}

console.log(reverseWords("hello world")); // "olleh dlrow"
console.log(reverseWords("javascript is fun")); // "tpircsavaj si nuf"

/* 5. Gün - Diziler ve Matematiksel İşlemler
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir sayı dizisi alacak ve aşağıdaki işlemleri yapacak:

Dizi içerisindeki en büyük sayıyı bul.
Dizi içerisindeki en küçük sayıyı bul.
Dizi içerisindeki tüm sayıların toplamını hesapla.
Sonuçları bir obje olarak döndür (max, min, sum). */

function analyzeNumbers(numbers) {
  let max = numbers[0]; // İlk elemanı başlangıç değeri olarak al
  let min = numbers[0]; // İlk elemanı başlangıç değeri olarak al
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
    sum += numbers[i];
  }
  return { max, min, sum };
}
console.log(analyzeNumbers([1, 2, 3, 4, 5]));
// Çıktı: { max: 5, min: 1, sum: 15 }

console.log(analyzeNumbers([10, -2, 30, 5]));
// Çıktı: { max: 30, min: -2, sum: 43 }

/* 6. Gün - Çok Boyutlu Diziler ve İterasyon
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir 2 boyutlu dizi alacak (bir dizi içinde diziler) ve aşağıdaki işlemleri yapacak:

Her alt dizideki en büyük elemanı bul.
Tüm alt dizilerin en büyük elemanlarından oluşan bir yeni dizi döndür. */

function findLargestInEachSubarray(arr) {
  let max = arr[0];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    max = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    newArr.push(max);
  }
  return newArr;
}
console.log(
  findLargestInEachSubarray([
    [1, 2, 3],
    [10, 5, 8],
    [7, 9, 4],
  ])
);
// Çıktı: [3, 10, 9]

console.log(
  findLargestInEachSubarray([
    [15, 20],
    [3, 4],
    [12, 17],
  ])
);
// Çıktı: [20, 4, 17]

/* 7. Gün - Obje Manipülasyonu
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir obje alacak ve aşağıdaki işlemleri yapacak:

Objede bulunan tüm anahtarları (keys) bir diziye çevir.
Objede bulunan tüm değerleri (values) bir diziye çevir.
Objede bulunan anahtar-değer çiftlerini, bir iç içe dizi olarak döndür. */

function analyzeObject(obj) {
  let keys = [];
  let values = [];
  let entries = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
      values.push(obj[key]);
      entries.push([key, obj[key]]);
    }
  }
  return { keys, values, entries };
}
console.log(analyzeObject({ a: 1, b: 2, c: 3 }));
// Çıktı:
// {
//   keys: ['a', 'b', 'c'],
//   values: [1, 2, 3],
//   entries: [['a', 1], ['b', 2], ['c', 3]]
// }

console.log(analyzeObject({ name: "John", age: 30, city: "New York" }));
// Çıktı:
// {
//   keys: ['name', 'age', 'city'],
//   values: ['John', 30, 'New York'],
//   entries: [['name', 'John'], ['age', 30], ['city', 'New York']]
// }

/* 8. Gün - Rekürsif Fonksiyonlar
Şimdi biraz daha zorlayıcı bir problem: Bir rekürsif fonksiyon yazmanı istiyorum. Bu fonksiyon, bir pozitif tam sayı alacak ve o sayının faktöriyelini hesaplayacak. */
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120 (5 x 4 x 3 x 2 x 1)
console.log(factorial(3)); // 6 (3 x 2 x 1)
console.log(factorial(0)); // 1

/* 
9. Gün - Dizi Manipülasyonu
Bir fonksiyon yazmanı istiyorum. Bu fonksiyon, bir sayı dizisi alacak ve aşağıdaki işlemleri yapacak:

Tüm sayıların karesini hesaplayarak yeni bir dizi oluştur.
Yeni diziden tek sayıların karelerini filtrele.
Tek sayıların karelerinin toplamını hesapla ve sonucu döndür. */

function processArray(numbers) {
  let newArr = [];

  for (let i = 0; i < numbers.length; i++) {
    let square = numbers[i] * numbers[i];

    if (square % 2 !== 0) {
      newArr.push(square);
    }
  }
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}

console.log(processArray([1, 2, 3, 4, 5]));
// Çıktı: 35 (1² + 3² + 5²)

console.log(processArray([10, 15, 20, 25]));
// Çıktı: 850 (15² + 25²)

console.log(processArray([2, 4, 6]));
// Çıktı: 0 (Hiçbir tek sayı yok)
