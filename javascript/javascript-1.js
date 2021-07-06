const calculator = func => {
    const next = (...args) => {
        return x => {
            if (!x) {
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
console.log(sum(1)(3)(4)(2)());
