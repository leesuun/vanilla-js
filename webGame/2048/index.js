for (let i = 0; i < 3; i++) {
    data.forEach((rowData, rI) => {
        rowData.forEach((cellData, cI) => {
            if (data[rI][cI] === 0 && cI < 3) {
                const temp = data[rI][cI];
                data[rI][cI] = data[rI][cI + 1];
                data[rI][cI + 1] = temp;
            }
        });
    });
}
