## 문제 9. 정수제곱근 판별하기

   nextSqaure함수는 정수 n을 매개변수로 받는다. n이 임의의 정수 x의 제곱이라면 x + 1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 작성하라.

   예를들어 n이 121이라면 이는 정수 11의 제곱이므로(11 + 1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴한다. 

```javascript
function nextSqaure(n) {

  if(Number.isNaN(n)){
    return 'no';
  }

  if (Math.sqrt(n) % 1 === 0 ){
    return Math.pow(n+1, 2);
  }
  return 'no';
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 14884
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 160801
```



## 문제 10. Check Palindrom

alindrome(팰린드롬 / 회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라.

단, 반드시 1자 이상의 문자열을 인자로 전달한다.

```javascript
function checkPalindrom(str) {
  if(str.length < 2 || typeof(str) !== "string"){
    return false;
  }

  var palindromChk = str.split(str.charAt(str.length / 2));

  return (palindromChk[0] === palindromChk[1]) ? true : false;

}

console.log(checkPalindrom(1112)); // false
console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false
```



## 문제11. 배열의 최대 / 최소값 구하기 

배열의 요소 중 최대값 / 최소값을 반환하는 함수를 완성하라.

```javascript
function getMaxValueFromArray(array) {
  var maxNum = Math.max.apply(null, array);
  return maxNum;
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  var minNum = Math.min.apply(null, array);
  return minNum;
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
```