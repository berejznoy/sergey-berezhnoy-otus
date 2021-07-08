const calculator = func => {
    const next = (...args) => {
        return x => {
            if (!x && x !== 0) {
                return args.reduce((acc, a) => {
                    return func.call(func, acc, a)
                }, 0);
            }
            return next(...args, x);
        };
    };
    return next();
};

const sum = calculator((x, y) => x + y);
console.log(sum(0)(4)(2)()(3));
