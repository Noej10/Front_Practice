/**
 * Hoisting
 * 
 * 빠른 작동을 위해 변수 이름만 먼저 전체적으로 훑고 이름만 등록 시켜놓는다.
 * 
 * 아래와 같이 name 변수가 아직 생기지 않았음에도 불구하고 출력시 undefined 로 표시된다.
 */

console.log(name);
var name = "전재현";



/** 
 * Hoisting
 * 모든 변수의 선언문이 코드의 최상단으로 이동되는것 처럼 느껴지는 현상
 * let , const를 사용해서 해결 가능
 * ㄴ 실제로 Hoisting은 되었으나 tdz에 등록하여 에러를 발생시키는 방식
 * ㄴ 선언부에서 선언이 완료되었을 경우 tdz에서 해당 구문 삭제
 * 
 * 
 * Function의 경우 Hoisting 활용
*/

console.log(name2);
let name2 = "Jae Hyun";