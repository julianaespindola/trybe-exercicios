const sum = (...args) => args.reduce((acumulador, current) => acumulador + current, 0);
console.log(sum(5, 8, 6, 99))
