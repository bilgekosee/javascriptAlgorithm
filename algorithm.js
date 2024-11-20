//[8,4,6,2,3]=>output=>[4,2,4,2,3]--> birbirinden çıkararak ilerleme metodları
/* const solution = (arr) => {
  return arr.map((_, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] = arr[i] - arr[j];
        break;
      }
    }
    return arr[i];
  });
};
console.log(solution([8, 4, 6, 2, 3])); */

//input [[4,3,2,-1], [3,-2,-1,-6], [5,4,0,-1]] kaç -li değer var =>5
/* const minus = (arr) => {
  return arr
    .map((row) => row.filter((r) => r < 0).length)
    .reduce((a, b) => a + b, 0);
}; */

/* const minus = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr.length;
};
console.log(
  minus([
    [4, 3, 2, -1],
    [3, -2, -1, -6],
    [5, 4, 0, -1],
  ])
); */

//[555,901,899,1276,12]=> çift basamaklı iki sayı var çıktı:2
/* const digit = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr.length;
}; */
/* 
const digit = (arr) => {
  return arr.filter((r) => r.toString().length % 2 == 0).length;
};
console.log(digit([555, 901, 899, 1276, 12])); */

//input n=5=>5 elemanlı dizi yap ama toplamarı sıfır olsun [1,2,0,-1,-2]
/* const Array = (num) => {
  let newArr = [];
  if (num % 2 == 1) {
    newArr.push(0);
  }
  for (let i = 1; i < num / 2; i++) {
    newArr.push(i);
    newArr.unshift(-i);
  }
  return newArr;
};
console.log(Array(5)); */

//n=434 => 4*3*4=>48, 4+3+4=11 result 48-11=37

/* const solution = (num) => {
  let revizeNum = num.toString().split("").map(Number);
  return (
    revizeNum.reduce((a, b) => a * b, 1) - revizeNum.reduce((a, b) => a + b, 0)
  );
};
console.log(solution(434)); */

//nums=[1,2,3,4,4,3,2,1], n=4 çıktı-> [1,4,2,3,3,2,4,1] numsın 4 birim ardındaki değeri koy

/* const solutionNum = (arr, num) => {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i + num]);
  }
  return newArr;
};
console.log(solutionNum([1, 2, 3, 4, 4, 3, 2, 1], 4)); */
