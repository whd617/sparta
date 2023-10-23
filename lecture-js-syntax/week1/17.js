// for, while => ~동안 : 반복문
// 프로그램을 사용한다는 것 자체가 어떤 작업을 자동으로 반복한다는 의미
// 이런 for과 while은 이러한 작업에서 굉장히 중요한 역할을하는 문법이다.
// for과 while에서 if문을 통한 분기처리, 이러한 것들이 핵심 logic이다.
// 이러한 것들이 기초가 되어야한다!
// for (초기값; 조건식; 증감식) {};

// i라는 변수는 0부터 시작할거야!
// i라는 변수가 10에 도달하기 전까지 계속할거야!
// i라는 변수는 한 사이클이 돌고 나면 1을 더할거야!
// 여기서 한 사이클은 {}에 해당하는 이 블록단위
// for (let i = 0; i < 10; i++) {
//     console.log("For문 돌아가고 있음 =>" + i);
// }

// 배열과 for문은 짝꿍이다.
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//     console.log("배열의 요소자리입니다  => " + i);
//     console.log("배열의 요소자리의 객체입니다 => " + arr[i]);
// }

// ex : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 요소

// for (let i = 0; i < 11; i++) {
//     if (i >= 2) {
//         if (i % 2 === 0) {
//             // 2의 배수
//             console.log(i + "는 2의 배수입니다.");
//         }
//     }
// }

// for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
    name: "John",
    age: 30,
    gender: "male",
};

// 객체의 value에 접근하는 방식 : 변수명[key] -> person[key]
for (let key in person) {
    console.log(key + ": " + person[key]);
}
