/*
Example:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
function climbingStairs(numOfSteps) {
    const array = [1,1];
    if (numOfSteps > 1) {
        for (let i=2; i <= numOfSteps; i++) {
            array[i] = array[i-1] + array[i-2];
        }
    };
    return array[array.length-1]
}