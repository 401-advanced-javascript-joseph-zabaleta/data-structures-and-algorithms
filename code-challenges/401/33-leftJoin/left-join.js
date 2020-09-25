'use strict';

function leftJoin(hashmap1, hashmap2) {

    let output = [];

    Object.keys(hashmap1).forEach(key => {

        let row = [];
        row.push(key);
        row.push(hashmap1[key]);

        if (hashmap2[key]) {

            row.push(hashmap2[key]);

        } else {

            row.push(null);

        }

        output.push(row);

    });


    return output;

};


module.exports = leftJoin;
