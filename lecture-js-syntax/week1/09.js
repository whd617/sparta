// 스코프, 전역변수, 지역변수, 화살표함수
// scope : 범위
// 스코프 : 변수의 영향 범위
// 지역변수
function printX() {
    let x = 10;
    console.log(x);
}
console.log(x);
printX();
