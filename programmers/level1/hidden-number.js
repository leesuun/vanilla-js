// sol1
function solution(phone_number) {
    return phone_number
        .split("")
        .map((num, i) => (i < phone_number.length - 4 ? "*" : num))
        .join("");
}

// sol2
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}
