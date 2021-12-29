// sol1
function solution(n, lost, reserve) {
    var answer = 0;
    const students = Array(n).fill(1);
    lost.forEach((suit) => {
        students[suit - 1] = 0;
    });
    reserve.forEach((suit) => {
        students[suit - 1] += 1;
    });
    students.forEach((student, i) => {
        if (!student) {
            if (students[i - 1] === 2) {
                students[i] += 1;
                students[i - 1] -= 1;
            } else if (students[i + 1] === 2) {
                students[i] += 1;
                students[i + 1] -= 1;
            }
        }
    });
    let count = 0;
    students.forEach((student) => {
        if (student) count++;
    });
    answer = count;
    // console.log(students);

    return answer;
}

// sol2
function solution(n, lost, reserve) {
    var answer = 0;
    const students = Array(n)
        .fill(1)
        .map((_, i) => i + 1);

    students.forEach((student, i) => {
        if (lost.includes(student)) {
            students[i] -= 1;
        }
        if (reserve.includes(student)) {
            students[i] += 1;
        }
        students[i] -= i;
    });

    students.forEach((student, i) => {
        if (!student) {
            if (students[i - 1] === 2) {
                students[i] += 1;
                students[i - 1] -= 1;
            } else if (students[i + 1] === 2) {
                students[i] += 1;
                students[i + 1] -= 1;
            }
        }
        students[i] !== 0 && answer++;
    });

    return answer;
}

// sol3
function solution(n, lost, reserve) {
    var answer = 0;
    const students = Array(n)
        .fill(1)
        .map((_, i) => i + 1);

    students.forEach((student, i) => {
        lost.includes(student) !== true ? students[i] : students[i]--;
        reserve.includes(student) !== true ? students[i] : students[i]++;

        students[i] -= i;
    });

    students.forEach((student, i) => {
        if (!student) {
            if (students[i - 1] === 2) {
                students[i] += 1;
                students[i - 1] -= 1;
            } else if (students[i + 1] === 2) {
                students[i] += 1;
                students[i + 1] -= 1;
            }
        }
        students[i] !== 0 && answer++;
    });

    return answer;
}
