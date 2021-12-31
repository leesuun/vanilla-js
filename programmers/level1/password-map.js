//sol1
function solution(n, arr1, arr2) {
    var answer = [];

    const ary1 = [];
    const ary2 = [];

    for (let i = 0; i < n; i++) {
        const row1 = [];
        let data1 = arr1[i];

        while (data1 !== 0) {
            !(data1 % 2) ? row1.unshift(0) : row1.unshift(1);
            data1 = Math.floor(data1 / 2);
        }

        while (row1.length < n) {
            if (row1.length !== n) {
                row1.unshift(0);
            } else {
                break;
            }
        }
        ary1.push(row1);
    }

    for (let i = 0; i < n; i++) {
        const row2 = [];
        let data2 = arr2[i];

        while (data2 !== 0) {
            !(data2 % 2) ? row2.unshift(0) : row2.unshift(1);
            data2 = Math.floor(data2 / 2);
        }
        while (row2.length < n) {
            if (row2.length !== n) {
                row2.unshift(0);
            } else {
                break;
            }
        }
        ary2.push(row2);
    }

    ary1.forEach((row, rI) => {
        let t = "";
        row.forEach((col, cI) => {
            if (col === ary2[rI][cI] && col) {
                t += "#";
            } else if (col === ary2[rI][cI] && !col) {
                t += " ";
            } else {
                t += "#";
            }
        });
        answer.push(t);
    });

    return answer;
}

//sol2
function solution(n, arr1, arr2) {
    var answer = [];

    for (let i = 0; i < n; i++) {
        let num1 = arr1[i];
        let num2 = arr2[i];
        let s = "";
        for (let j = 0; j < n; j++) {
            s = (num1 % 2) + (num2 % 2) ? "#" + s : " " + s;
            num1 = Math.floor(num1 / 2);
            num2 = Math.floor(num2 / 2);
        }
        answer.push(s);
    }
    return answer;
}
