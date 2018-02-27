function longest_palindrom(s){
  var result = 0;
  var palindVal = s.split('');
  var preV = '';
  var data = '';

  // 함수를 완성하세요
  for( var j = 0; j < s.length; j++ ){
    data = '';
    preV = palindVal[j];

    for( var i = j; i < s.length; i++ ){
      data += palindVal[i];

      if (preV === palindVal[i]) {

        if (data === data.split('').reverse().join('')) {
          (result > data.length) ? result : result = data.length;
        }
      }

    }
  }
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(longest_palindrom("토마토"))
console.log( longest_palindrom("토마토맛토마토") )
console.log( longest_palindrom("토마토맛있어") )
console.log(longest_palindrom("토마토가나다나가"))
console.log(longest_palindrom("토마마토"))
console.log(longest_palindrom("저기저사람여보게저기저게보여"))
