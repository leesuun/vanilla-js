function solution() {
  var field = [
    [0, 1, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 1, 1],
  ];
  var mines = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  var w = 4,
    h = 4;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (field[y][x] == 0) continue;

      for (let j = y - 1; j <= y + 1; j++) {
        for (let i = x - 1; i <= x + 1; i++) {
          if (field[j][i] == 1) {
            mines[y][x] += calculate(w, h, j, i);
          }
        }
      }
    }
  }
  return mines;
}

function calculate(w, h, j, i) {
  if (i >= 0 && i < w && j >= 0 && j < h) return 1;
  return 0;
}

solution();
