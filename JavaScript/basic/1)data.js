console.log("Hello World");

console.log("Hello"+"World");
// 주석을 작성하는 첫 번째 방법
console.log("안녕") // 안녕을 콘솔에 출력

/**
 * 이렇게 하면
 * 여러줄 주석을 작성할 수 있습니다.
 */

/**
 * Varibale(변수) 선언
 * 
 * 1. var - 사용하지 않음
 * 2. let
 * 3. const
 * 
 * 
 */

// 1. var
var name = "최지원";
console.log(name);

var age = 55;

var pi = 3.14;

console.log(name + ", " + age +", "+pi);

var name ="김수민";
console.log(name);


/** 
 *   2.let
 *     let은 var에서 같은 이름의 중복을 할 수 없게 만든 자료형이다.
 *     다만, let과 var는 모두 값을 변경하는 것은 가능하다.
 */
let name = "최지원";
console.log(name);
name = "김수민";
console.log(name);


/**
 * 3. const
 * const는 상수를 표현하기위한 자료형
 * 값을 변경할 수 없다.
 */

const name3 = "최지원";
console.log(name3);


/**
 *  Naming
 * 
 * 변수 이름을 지을 때
 * 1. 일반적으로 영어를 사용하며, 문자와 숫자를 모두 사용할 수 있다.
 * 2. 특수문자는 언더스코어(_)와 달러($)를 사용할 수 있다.
 * 3. 숫자로 이름을 시작할 수 없다.
 * 4. 키워드를 변수명으로 사용할 수 없다.
 *    var, let 등등 
 */


/**
 * Naming Type
 * 
 * 1. Camel Case : 대부분의 언어에서 많이 사용 단어의 시작마다 대문자로 표시
 * 2. Snake_case : 파이썬에서 주로 사용하며 단어의 시작마다 _로 구분해준다.
 * 3. PascalCase : C# 및 ms계열의 언어에서 많이 사용하며, 매단어 시작은 무조건 대문자로 표시
 */



/**
 * Data Types
 * 
 * 여섯개의 원시타입과 한개의 오브젝트타입이 있다.
 * 
 * - 원시 타입
 * 1.Number (숫자)
 * 2.String (문자열)
 * 3.Boolean (불리언)
 * 4.undefind (언디파인드)
 * 5.null (널)
 * 6.symbol(심볼)
 * 
 * - 오브젝트 타입
 * 7.Object(객체)
 *      Function
 *      Array
 *      Object
 *         .
 *         .
 *         .
 */




// Number 타입
const age = 55;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);

const infinity = Infinity;
const mInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof mInfinity);


// String 타입
const name = "최지원\n60살";
console.log(typeof name);
console.log(name);

/**
 * Escape 문자
 * 1) newLine = \n
 * 2) tab = \t
 * 3) \ = \\
 */

const str = "안녕하세요 저는 최지원입니다.\n \t나이는 60살입니다.\\"
console.log(str);
console.log(`Hello${str}`);

// Boolean 타입
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);


// undefined 타입
// 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값.
// undefined를 직접 넣어주는 것은 지양.

let num;
console.log(num);
console.log(typeof num);

// null 타입 
// undfined와 마찬가지로 값이 없다는 뜻의 값.
// 다만, js에서는 개발자가 명시적으로 없는 값을 초기화할 때 null을 사용한다.

let num1 = null;
console.log(num1);
console.log(typeof num1);


// Symbol 타입
// 유일무이한 값을 생성할 때 사용
// 다른 원시값들과는 다르게 Symbol 함수를 호출하여 사용

const tmp1 = '1';
const tmp2 = 1;
console.log(tmp1 == tmp2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1);
console.log(symbol2);
console.log(symbol1==symbol2);

// Object 타입
// Map = key:value 쌍으로 이루어져있다.

const dictionary ={
    red : "빨간색",
    orange : "주황색",
    yellow : "노란색"
}

console.log(dictionary);

console.log(dictionary.red);
console.log(dictionary.orange);
console.log(dictionary.yellow);

// Array = 값을 리스트로 나열할 수 있는 타입

const arr = ["빨간색","주황색","노란색","초록색"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.push("이상한 색")); // 추가된 후 배열의 길이가 찍힘
console.log(arr);




