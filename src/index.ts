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

    let queue: number[][] = [];

    queue.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        let [previousX, previousY] = queue.pop();
        let [currentX, currentY] = array[i];

        if (previousY >= currentX) {
            if (i === 1) {
                queue = [];
            }
            queue.push([previousX, Math.max(previousY, currentY)]);
        } else {
            queue.push([previousX, currentY]);
        }

        // for dup arrays entries
        // if (finalArray.length > 1) {
        //     let [finalX, finalY] = finalArray[finalArray.length - 1];

        //     if (x === finalX && y === finalY) {
        //         finalArray.pop();
        //     }
        // }
    }

    return queue;
}

consoleStart();

validateFxn(
    threeSum([
        [1, 4],
        [0, 2],
        [3, 5],
    ]),
    [0, 5]
);

validateFxn(
    threeSum([
        [1, 4],
        [2, 3],
    ]),
    [1, 4]
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
    [1, 5]
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
