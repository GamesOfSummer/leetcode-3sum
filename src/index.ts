import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function threeSum(array: any): any {
    if (array.length < 1) {
        return [];
    }

    array = array.sort((a, b) => a[0] - b[0]);

    let finalArray: number[][] = [];

    let queue = [];

    queue.push[array[0]];
    for (let i = 1; i < array.length; i++) {
        let [x, y] = queue.pop();
        let [x2, y2] = array[i];

        if (y > x2) {
            finalArray.push([x, y2]);
        }

        queue.push(array[i]);
    }

    return finalArray;
}

consoleStart();

// -1, -1, 0, 1, 2, -4
validateFxn(
    threeSum([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ]),
    [
        [
            [1, 6],
            [8, 10],
            [15, 18],
        ],
    ]
);

consoleEnd();

export {};
