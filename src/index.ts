import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function threeSum(array: number[][]): any {
    if (array.length <= 1) {
        return array;
    }

    array = array.sort((a, b) => a[0] - b[0]);

    let finalArray: number[][] = [];

    let queue: number[][] = [];

    queue.push(array[0]);
    finalArray.push(array[0]);
    for (let i = 1; i < array.length; i++) {
        let [x, y] = queue.pop();
        let [x2, y2] = array[i];

        if (x < x2 && y > y2) {
            finalArray.push([x, y]);
            i++;
        } else if (y >= x2) {
            if (i === 1) {
                finalArray = [];
            }
            finalArray.push([x, y2]);
        } else {
            finalArray.push([x2, y2]);
        }

        queue.push(array[i]);

        if (finalArray.length > 0) {
            let [finalX, finalY] = finalArray[finalArray.length - 1];

            if (x === finalX && y === finalY) {
                finalArray.pop();
            }
        }
    }

    return finalArray;
}

consoleStart();

validateFxn(
    threeSum([
        [1, 4],
        [2, 3],
    ]),
    [[1, 4]]
);

validateFxn(
    threeSum([
        [1, 4],
        [5, 6],
    ]),
    [
        [1, 4],
        [5, 6],
    ]
);

validateFxn(
    threeSum([
        [1, 4],
        [4, 5],
    ]),
    [[[1, 5]]]
);

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
