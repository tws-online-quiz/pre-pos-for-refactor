function main(collectionA, objectB) {
    let a = [];
    for (let str of collectionA) {
        let key, count;
        if (str.length === 1) {
            key = str;
            count = 1;
        } else {
            let arr = str.split("-");
            key = arr[0];
            count = parseInt(arr[1], 10);
        }

        for (let i = 0; i < count; i++) {
            a.push(key);
        }
    }

    let b = a.reduce((res, ch) => {
        let o = res.find((o) => o.key === ch);
        if (o) {
            o.count++;
        } else {
            res.push({key: ch, count: 1});
        }
        return res;
    }, []);

    return b.map((o) => {
        let count = o.count;
        if (objectB.value.includes(o.key)) {
            count -= Math.floor(count / 3);
        }
        return {key: o.key, count: count};
    });
}

module.exports = main;
