/**
 * 
 * Closure
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 정적 환경의 조합이다." 
 * "내부 함수에서 외부함수의 변수를 사용할 때 우리는 클로저라고 한다."
 * (상위 함수보다 하위 함수가 더 오래 살아있는 경우)
 * 
 * 
 */


function getNumber(){
    let number = 5;

    function inner(){ // 내부에 있는 함수에서 스코프가 생성됨
        number++;
        return number;
    }

    return inner; //inner() 할 경우 갇히지 않고 소멸되어 의미가 없음
}

let run = getNumber() // 따로 변수로 받아서 사용해야함

console.log(run());
console.log(run());
console.log(run());
console.log(run());

const initData = {
    loginUser : {
        name : 'ddd'
    }
}