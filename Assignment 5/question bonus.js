const p = Promise.resolve('World');

p.then(value => Promise.resolve(`Hello ${value}`)).then(newvalue => setTimeout(() => console.log(newvalue), 1000));
