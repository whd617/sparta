// 배열

// 1. 생성
// 1-1. 기본생성
// let fruits = ["사과", "바나나", "오렌지"];

//1-2. 크기 지정
let number = new Array(5);
// 배열의 length는 상당히 많이 쓰인다.
// for문이나 while문 같은데에서 배열의 길이를 가지고 어떤 연산을 하거나 이런 것들은 비일비재하다
// 배열의 각각의 요소들을 처리할 때 쓰이는 로직들을 정의해놓고 처리하게끔하는 기법들이많다.
// 배열과 for문, 배열과 while문은 항상 짝궁이다!!!!!!
// console.log(number.length);
// console.log(fruits.length);

// 2.요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3.배열 메소드
// 3-1. push
// 배열의 요소를 삽입한다.(즉 추가한다)
// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits);

// fruits.push("오렌지");
// console.log("2 =>", fruits);

// 3-2. pap
// 배열의 마지막 요소를 삭제하는 메소드
// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits);
// fruits.pop();
// console.log("2 =>", fruits);

// 3-3. shift
// 배열의 첫번째 요소를 삭제하는 메소드
// let fruits = ["사과", "바나나", "키위"];
// console.log("1 =>", fruits);
// fruits.shift();
// console.log("2 =>", fruits);

// 3-4. unshift
// 배열의 맨앞에 요소를 추가한다.
// let fruits = ["사과", "바나나", "키위"];
// fruits.unshift("포도");
// console.log(fruits);

// 3-5. splice
// 1번째 요소부터 시작해서 첫번째 요소까지를 삭제하고 "포도"로 가라끼워줘
// fruits.splice(1, 1, "포도");
// let fruits = ["사과", "바나나", "키위"];
// fruits.splice(1, 1, "포도");
// fruits.splice();
// console.log(fruits);

// 3-6. slice
// 1에서 2까지만
// (두번째 요소부터 세번째 요소 전까지 새로운 배열로 만들어서 반환해줘)
// 바나나부터 시작해서 키위전까지 반환해줘
// let fruits = ["사과", "바나나", "키위"];
// let slicedFruits = fruits.slice(1, 2);
// console.log(slicedFruits);

// forEach, map, filter, find
// 이 배열에는 다섯개의 숫자와 다섯개의 요소가 있다
// 이 다섯개의 요소를 하나하나 돌아가면서 어떤 작업을 하고 싶다라고 가정
// 그러면 그 하나 하나마다 어떠한 작업이라고 할때
// 그 작업을 명시하기 위해서
// 우리는 함수를 만들 수가 있고
// 그 함수를 수행하기 위해서
// 우리는 forEach라는 메소드를 생각해 볼 수 있다.
// let numbers = [4, 1, 5, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// function(item)에서 item이라는 것에는 numbers의 각 요소들이 하나하나 들어가면서 순회를 돈다
// 그러면서 이제 for문이 돌아가는 것처럼 어떤 작업을 function 에서 수행을 하는 것
// numbers.forEach(function (item) {
//     console.log("item입니다 => " + item);
// });

// (2) map : [중요] 항상 원본 배열의 길이만큼이 return 된다.
// map함수는 forEach와 동일하게 작성하여 사용하지만 forEach와 다르게 반드시 return문을 가져야한다!
// map 함수의 역할 : 기존에 있었던 배열을 가공해서 새로운 배열을 생산해 내는 역할을 하는게
// 바로 이 map이 하는 역할이기 때문이다!
// 그래서 이 map을 거치고 나면 반드시 새로운 배열을 만들어 내고
// 이 배열을 반드시 받아야만 한다!
// 그리고 만약 return문이 없다면 배열의 요소의 수만큼 undefined로 채워져 반환한다!
// let numbers = [4, 1, 5, 4, 5];
// let newNumbers = numbers.map(function (item) {
//     // return item * 2;
// });

// console.log(newNumbers);

// let numbers = [4, 1, 5, 4, 5];

// (3) filter
// filter도 forEach와 마찬가지로 function(item) 부분에 배열의 각요소가 한번씩 들어간다.
// filter도 map과 동일하게 return문이 들어가는데 map은 가공한 값이 들어가지만
// filter은 return에 조건이 들어간다.
// 여기서의 조건은 4 1 5 4 5 에서 필터링 할 그 조건이 들어간다.
// return item === 5;
// 예를 들자면 return item === 5;라고 명시하게 되면 5인 것만 배열에서 뽑아내라 이런식으로 조건이 들어간다.
// return item !== 5; -> 이 뜻은 5가 아닌 것만 배열에서 뽑아내라는 의미[4,1,4]
// return item > 3; -> 3보다 큰 수인 값들만 배열에서 뽑아내라는 의미 [4,5,4,5]
// let filtersNumbers = numbers.filter(function (item) {
//     return item > 3;
// });

// console.log(filtersNumbers);

// (4) find
// find도 동일하게 매개변수로 numbers.find(function(item){}) 콜백함수가 들어간다.
// map과 filter과 동일하게 return 문을 통해서 조건에 맞는 것만 반환하게 된다.
// 조건에 맞는 것 중 첫 번째로 들어오는 요소의 값만 반환하게 된다.
// return item > 3; -> 이 조건으로 return시 배열에서 3보다 큰수는 [4,5,4,5] 순이지만
// 맨앞에 4만 반환하게 된다!
let numbers = [4, 1, 5, 4, 5];

let result = numbers.find(function (item) {
    return item > 3;
});
console.log(result);

/* 지금 16.js에서 배웠던 콜백함수를 받는 메소드들이다.
	forEach를 제외하고는 나머지는 다 리턴문이 필요하다!
	return 문이 필요했던 것들은 새로운 배열을 내 뱉은다
	그렇기 때문에 이렇게 새로운 배열 또는 새로운 값을 리턴한다
	그러므로 새로운 값으로 받아줘야만 한다!*/
