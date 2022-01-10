function solution(price, money, count) {
    let payMoney = 0;
    for (let i = 1; i <= count; i++) {
        payMoney += i * price;
    }

    return payMoney - money > 0 ? payMoney - money : 0;
}

function solution(price, money, count) {
    const tmp = (price * count * (count + 1)) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
