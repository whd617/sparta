// while
// while (조건) {
// 	메인로직
// 	증감
// }
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// for(초기값; 조건; 증감) {

// }

// while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하는 예

// let i = 3;

// while (i < 100) {
//     if (i % 5 === 0 && i >= 5) {
//         console.log(i + " -> 5의 배수입니다.");
//     }
//     i++;
// }

// do ~ while
// 일단 한번 코드를 실행
// do를 한다음에 while을 돌린다.
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// break continue문
// for문과 함께 쓰인다!

// break문
// [point]그 자리에서 끝내버린다.
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // ?????????????
//     }
//     console.log(i + "=> 1부터 10까지 작성하는 logic 입니다!");
// }

// continue문
// [point]그 다음 순서로 넘어간다!
// 0~4까지는 정상 동작
// 5에 왔을때 if문으로 동작하게 되는데 if문안에는 continue가 있으므로
// if문 밖에 있는 logic을 동작하지 않고
// 다음 for문으로 넘어가는 원리
// 따라서 다음 for문은 6부터 시작하여 9까지를 터미널에 기록하게 된다.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // ?????????????
    }
    console.log(i + "=> 1부터 10까지 작성하는 logic 입니다!");
}
