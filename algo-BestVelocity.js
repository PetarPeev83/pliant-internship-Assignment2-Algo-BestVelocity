function bestVelocity(input) {

    if (input.length < 3) {
        throw new Error();
    };

    let output = {
        sequence: [input[0], input[1], input[2]],
        sum: input[0] + input[1] + input[2],
    };

    for (let i = 1; i < input.length - 2; i++) {

        const currentSum = input[i] + input[i + 1] + input[i + 2];
        const currentBest = output.sequence.reduce((a, b) => a + b);

        if (currentSum >= currentBest) {
            output.sequence = [input[i], input[i + 1], input[i + 2]];
            output.sum = currentSum;
        };
    };
    console.log(output);
};

// Example 1:
// Input: [11, 14, 10, 12]
// Output: { sequence: [14, 10, 12], sum: 36 }
// Explanation: First sequence of 3 sprints is [11, 14, 10] - total sum = 35. Second sequence of 3
// sprints is [14, 10, 12] - total sum - 36. Therefore, the second sequence is the best result of the
// team
bestVelocity([11, 14, 10, 12]);

// Example 2:
// Input: [12, 9, 1, 5, 11, 5]
// Output: { sequence: [12, 9, 1], sum: 22 }
bestVelocity([12, 9, 1, 5, 11, 5]);

// Example 3:
// Input: [76, 80]
// Output: error
// bestVelocity([76, 80]);

// Example 4:
// Input: [76, 80, 81, 77, 83, 78, 80]
// Output: { sequence: [83, 78, 80], sum: 241 }
bestVelocity([76, 80, 81, 77, 83, 78, 80]);