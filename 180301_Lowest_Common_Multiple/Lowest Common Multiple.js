/*  N개의 최소공배수
    두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
    예를 들어 2와 7의 최소공배수는 14가 됩니다.
    정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
    nlcm 함수를 통해 n개의 숫자가 입력되었을 때, 최소공배수를 반환해 주세요. 예를들어 [2,6,8,14] 가 입력된다면 168을 반환해 주면 됩니다.
*/
function nlcm(num) {
  let answer = num.reduce(function(preVal, curVal) {
    return preVal <= curVal ? lcm(curVal, preVal) : lcm(preVal, curVal);
  });
  return answer;
}

function gcd ( maxVal, minVal ) {
  if( minVal === 0 ){
    return maxVal;
  }
  else {
    let rem = maxVal % minVal;
    return gcd(minVal, rem);
  }
}

function lcm ( maxVal, minVal ) {
  return maxVal * minVal / gcd(maxVal, minVal);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([2, 3, 6, 8])); // 48
console.log(nlcm([24, 16, 4])); // 24
console.log(nlcm([67, 14, 72, 20, 33, 48, 15, 98, 56, 27])); // 78004080
console.log(nlcm([52, 88, 2, 65, 35, 71, 57, 52, 58, 49])); // 32894501640