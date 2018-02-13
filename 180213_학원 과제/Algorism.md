## 문제 15. 하샤드 수

하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다. 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를들어 18의 자릿수 합은 1 + 8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

> 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200

Harshad함수는 양의 정수 n을 매개변수로 입력받는다.이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.

예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다. 

```javascript
function isHarshad(n) {
  
  var sumHarshad = 0;
  var str = n + '';

  for ( var i = 0; i < str.length; i++) {
    sumHarshad += parseInt(str.charAt(i));
  }
  
  if (n % sumHarshad === 0) { return true; }
  return false;
  
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
```



## 문제 16. 두 정수 사이의 합

adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라. x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.

예를들어 x가 3, y가 5이면 12를 리턴한다.

```javascript
function adder(x, y){
  var sum = 0;

  for ( var i = x; i <= y; i++ ) {
    sum += i;
  }

  return sum;
}

console.log(adder(3, 5)); // 12
```



## 문제 17.  배열의 첫 요소와 마지막 요소로 배열 만들기

배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 정수의 배열을 반환하는 함수를 완성하라.

예를 들어 인수가[10, 15]인 경우, [10, 11, 12, 13, 14, 15]를 반환한다.

```javascript
function generateRange(from, to) {
  const res = [];
  arraySeat = 0;

  for (var i = from; i <= to; i++) {
    res[arraySeat] = i;

    arraySeat++;
  }

  return res;
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
```



## 문제 18. 배열의 인접한 요소곱 중 가장 큰 값 구하기

정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.

예를 들어 인수가[3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

```javascript
function adjacentElementsProduct(arr) {
  var multiNum = 0;
  var maxNum = 0;

  for ( var i = 0; i < arr.length - 1; i++ ) {
    multiNum = arr[i] * arr[i + 1];

    if( multiNum > maxNum ) { maxNum = multiNum; }

  }

  return maxNum;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
```

