//Soru 1: Sayıların Toplamı
//Bir fonksiyon yazman gerekiyor: sumArray(arr). Bu fonksiyon, verilen bir sayı dizisinin (array) elemanlarının toplamını döndürmeli.

/* Soruyu Parçalayalım:
Bir diziyi nasıl ele alırız? Diziyi elemanlarına ayırıp bir döngüyle her bir eleman üzerinde işlem yapabiliriz.

Ne yapmak istiyoruz? Dizideki tüm sayıları toplamak. Bunun için bir "toplam" değişkeni tanımlayıp, her bir elemanı bu değişkene ekleyebiliriz.

Dizi boşsa ne yaparız? Eğer dizi boşsa, toplama yapmamıza gerek yok; direkt 0 döndürürüz.

Adım Adım Kod:
Aşağıdaki yönergeleri takip et:

Toplamı tutmak için bir değişken tanımla (örneğin let sum = 0).
for döngüsü kullanarak dizi elemanlarını sırayla dolaş.
Döngüde her bir elemanı sum değişkenine ekle.
Döngü bittikten sonra sum'u döndür. */

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
