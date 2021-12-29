function solution(s) {
    let answer = "";
    const sMiddle = s.length / 2;

    if (s.length % 2 === 0) {
        return (answer = s[sMiddle - 1] + s[sMiddle]);
    }
    return s[Math.floor(sMiddle)];
}
