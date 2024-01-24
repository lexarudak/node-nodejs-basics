const parseArgs = () => {
    const args = process.argv.slice(2)

    const isEven = (ind) => ind % 2 === 0 

    const even = []
    const notEven = []

    args.forEach((val, ind) => {
        isEven(ind)? even.push(val.slice(2)) : notEven.push(val)
    })

    const ans = even.map((val, ind) => `${val} is ${notEven[ind]}`)
    console.log(ans.join(', '));
};

parseArgs();