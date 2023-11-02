/* async function main() {
     function first() {
        console.log("set Time Out이 실행되었습니다.");
    }

    console.log("코드가 실행되었습니다.");
    setTimeout(first, 1000); // 1초 뒤에 first 함수를 실행하라.
    console.log("코드가 종료되었습니다.");

    function printFunc() {
        console.log("printFunc가 실행되었습니다.");
    }
    const obj = new Object();
    const prom = new Promise(printFunc);

     const resolvePromise = new Promise((resolve, reject) => {
        // 1초 후에 setTimeout에 있는 코드를 실행하라.
        setTimeout(() => {
            console.log("First"); // First
            resolve("Resolve!"); // resolve를 실행할 때, 안에 데이터를 넣어줄 수 있습니다.
        }, 1000);
    });

    resolvePromise.then((data) => {
        console.log("Middle");
        console.log("Last");
        console.log(data);
    });
    const errorPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First");
            reject("Error!!"); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주됩니다.
        }, 1000);
    });

    errorPromise
        .then(() => {
            console.log("Middle");
            console.log("Last");
        })
        .catch((error) => {
            console.log("에러 발생!", error);
        });

    // Print: '에러 발생! Error!!'
}
main();
 */

function setTimeoutFunc(time) {
    return new Promise((resolve, resject) => {
        setTimeout(() => {
            console.log(time, "에 해당하는 시간이 지났습니다.");
            resolve();
        }, time);
    });
}

async function main() {
    console.log("시작 되었습니다.");
    await setTimeoutFunc(1000);
    console.log("종료 되었습니다.");
}
main();
