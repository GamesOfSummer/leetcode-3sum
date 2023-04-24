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

    array.sort();

    let triplets = [];
    let left = 0;
    let right = 0;

    for (let i = 0; i < array.length; i++) {
        left = i + 1;
        right = array.length - 1;

        while (left < right) {
            const sum = array[i] + array[left] + array[right];
            if (sum === 0) {
                triplets.push([array[i], array[left], array[right]]);

                left++;
                while (array[left] === array[left + 1] && left < right) {
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

// -1, -1, 0, 1, 2, -4
validateFxn(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, -1, 2],
    [-1, 0, 1],
]);
consoleEnd();

export {};
