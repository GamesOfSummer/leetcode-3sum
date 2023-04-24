import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function threeSum(array: Array<number>): any {
    if (array.length < 3) {
        return [];
    }

    array = array.sort((a, b) => a - b);

    let triplets = [];
    let left = 0;
    let right = 0;

    for (let target = 0; target < array.length; target++) {
        while (
            target !== 0 &&
            target + 1 < array.length &&
            array[target] === array[target - 1]
        ) {
            target++;
        }

        left = target + 1;
        right = array.length - 1;

        while (left < right) {
            const sum = array[target] + array[left] + array[right];
            if (sum === 0) {
                triplets.push([array[target], array[left], array[right]]);

                left++;
                while (array[left] === array[left - 1] && left < right) {
                    // prevent dups
                    left++;
                }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return triplets;
}

consoleStart();

// **-1,-1,-2,-3,-4,0,0,1,2,3,4,

validateFxn(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]), [
    [
        [-4, 0, 4],
        [-4, 1, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, -1, 2],
        [-1, 0, 1],
    ],
]);

// -1, -1, 0, 1, 2, -4
validateFxn(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, -1, 2],
    [-1, 0, 1],
]);

consoleEnd();

export {};
