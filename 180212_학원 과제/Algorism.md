## 문제 12. 약수의 합

어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는[1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다. 

> 약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다

```javascript
function sumDivisor(num) {
  var divisorSum = 0;
  
  for ( var i = 1; i <= num; i++ ){
    if( num % i === 0 ) divisorSum += i;
  }
  
  return divisorSum;
}

console.log(sumDivisor(12)); // 28

```



## 문제 13. 소수 찾기

numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라. 소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다. 즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.

> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …
>
> 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는[2, 3, 5, 7] 4개가 존재하므로 4를 반환한다. 

```javascript
function numberOfPrime(n) {
  var countDivisor = 0;
  var numberPrime = 0;
  
  for ( var i = 1; i <= n; i++ ) {
    for ( var j = 1; j <= i; j++ ) {
      if ( i % j === 0 ) countDivisor++;
    }
    if ( countDivisor === 2 ) numberPrime ++;
    countDivisor = 0;
  }
  return numberPrime;

}
console.log(numberOfPrime(10)); // 4
```



## 문제 14. 피보나치 수

피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…
>
> 2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라.예를 들어 n = 3이라면 2를 반환한다. 

```javascript
function fibonacci(n) {

  var fiboArray = [0 , 1];
  
  for( var i = 2; i <= n; i++ ){
    fiboArray[i] = fiboArray[i - 2] + fiboArray[i - 1];
  }
  return fiboArray[n];

}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
```

