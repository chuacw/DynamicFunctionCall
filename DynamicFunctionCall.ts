function myfunction(...x: any) {
    console.log("Hello world", (x != undefined ? " " + x : ""));
}

function functionExists(funcName: string): boolean {
    const temp = eval("typeof " + funcName) // returns "undefined" or "function"
    const result = (temp === "function");
    return result;
}

function functionCall(funcName: string, ...args: any): void {
    eval(funcName)(...args);
}

functionCall("myfunction", "heh...");

// Uniswap V3 router https://blockscan.com/address/0xe592427a0aece92de3edee1f18e0157c05861564
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var input = "";
// process.stdin.on("data", function (chunk) {
//     input += chunk;
//     console.log("Got ", chunk);
// });
// process.stdin.on("end", function () {
//     // now we can read/parse input
//     console.log("Ended")
// });

// function maximumProduct(nums: number[]): number {
//     let min1 = Number.MAX_VALUE, min2 = Number.MAX_VALUE;
//     let max1 = Number.MIN_VALUE, max2 = Number.MIN_VALUE, max3 = Number.MIN_VALUE;
//     for (let n of nums) {
//         if (n <= min1) {
//             min2 = min1;
//             min1 = n;
//         } else if (n <= min2) {     // n lies between min1 and min2
//             min2 = n;
//         }
//         if (n >= max1) {            // n is greater than max1, max2 and max3
//             max3 = max2;
//             max2 = max1;
//             max1 = n;
//         } else if (n >= max2) {     // n lies betweeen max1 and max2
//             max3 = max2;
//             max2 = n;
//         } else if (n >= max3) {     // n lies betwen max2 and max3
//             max3 = n;
//         }
//     }
//     const result = Math.max(min1 * min2 * max3, max1 * max2 * max3);
//     return result;
// };

// console.log(maximumProduct([-100, -98, -1, 2, 3]));