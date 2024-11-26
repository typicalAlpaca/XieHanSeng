const p = Promise.resolve('World');

p.then(value => Promise.resolve(`Hello ${value}`)).then(newvalue => console.log(newvalue));
