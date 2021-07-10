const fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

function promiseReduce(asyncFunctions, reduce, initialValue) {
    return asyncFunctions.reduce((accPromise, nextFunc) => {
        return accPromise.then(acc => {
            return nextFunc().then(val => reduce(acc, val))
        })
    }, Promise.resolve(initialValue))
}

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce')
        return memo * value
    },
    1
).then(console.log)
