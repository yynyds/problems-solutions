/*
Example:
Input: [3,1,7,1,3]
Output: 7
*/
function findUniqNumberInArray(nums) {
    let uniqNum = 0;

    for (let num of nums) {
        uniqNum ^= num;
    }

    return uniqNum;
}