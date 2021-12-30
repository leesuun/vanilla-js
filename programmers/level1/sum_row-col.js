function solution(A, B) {
    var answer = [];

    arr1.forEach((row, i) => {
        answer.push([]);
        row.forEach((col, j) => {
            answer[i].push(col + arr2[i][j]);
        });
    });

    return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
