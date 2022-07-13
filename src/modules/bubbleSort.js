const bubbleSort = (arr) => {
    for (let i = 0, endI = arr.length-1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].name > arr[j + 1].name) {
                [arr[j].name , arr[j + 1].name] = [arr[j + 1].name , arr[j].name ];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

export default bubbleSort;
