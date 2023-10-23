// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1.객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
//     key: "어떤값도 올수 있따",
//     // boolean, 함수(function(){}), 숫자, string, 배열, 객체 ->value에 올수 있는 데어터 type에는 제한이 없다.
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~~~)
// 3.1 Object.key() : key를 가져오는 메소드
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

let keys = Object.keys(person);
// console.log("keys =>", keys);

// 3-2. values
let values = Object.values(person);
// console.log("values =>", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
// console.log("entries=>", entries);

// 3-4. assion
// 객체 복사
let newPerson = {};
// 	 어디에다가 복사할래?, 어떤걸 복사할래?, 변경하고 싶은 객체(여러개 가능!)...etc
Object.assign(newPerson, person, { gender: "여자" }, { age: 35 });
// console.log("newPerson=>", newPerson);

// 3-5. 객체 비교
// 크기가 상당히 커요!! -> 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소
// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// person2 별도 공간에 대한 주소
// let person2 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// let str1 = "aaa";
// let str2 = "aaa";

// console.log("answer=> ", person1 === person2);
// console.log("answer=> ", str1 === str2);

// JSON 이라는 것에서 제공하는 stringify라는 기능이 있다.
// string : 문자
// 문자열화를 시킨다는 stringify 이다.
// 객체를 문자열화 시킨다는 것은 객체 안에 있는 key-value pair가 주소값으로 되어져 있는 것을 그냥 문자열화 (name:홍길동, age:30, gender:남자) 이것을 문자열화 시킨다!
// console.log(JSON.stringify(person1) === JSON.stringify(person2));

// 3-6. 객체 병합
let person1 = {
    name: "홍길동",
    age: 30,
};

// person2 별도 공간에 대한 주소
let person2 = {
    gender: "남자",
};

// ... : spread operator(객체를 묶어주는 {}를 없애주는 역할)
let perfectMan = { ...person1, ...person2 };
console.log(perfectMan);
