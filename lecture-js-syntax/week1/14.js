// falsy한 값, truthy한 값
/* if문 안에서는 모두 falsy한 값으로 해석이된다. */
if (0) {
    // main logic
    console.log("hello");
}

if ("") {
    // main logic
    console.log("hello");
}

if (null) {
    // main logic
    console.log("hello");
}

if (NaN) {
    // main logic
    console.log("hello");
}

if (null) {
    // main logic
    console.log("hello");
}

if (undefined) {
    // main logic
    console.log("hello");
}

if (NaN) {
    // main logic
    console.log("hello");
}

if (false) {
    // main logic
    console.log("hello");
}
// if 구문만 출력되는 것을 확인할 수 있다.
if (true) {
    console.log("hello");
}
