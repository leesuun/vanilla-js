function solution(arr) {
    return arr.reduce((pre, curr) => pre + curr) / arr.length;
}

// reduce( callback, option() 처음 콜백 호출시 세팅되는 acc값)
