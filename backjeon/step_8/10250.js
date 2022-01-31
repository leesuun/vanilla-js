let input = require("fs").readFileSync("../input.txt").toString().trimEnd().split("\n");

const rooms = input.slice(1, input.length).map((info) => info.split(" "));

for (let i = 0; i < rooms.length; i++) {
    let [h, w, room] = rooms[i];
    room % h === 0 ? (floor = h + "") : (floor = (room % h) + "");
    let ho = Math.ceil(room / h) + "";
    if (ho.length === 1) {
        ho = "0" + ho;
    }
    console.log(floor + ho);
}
