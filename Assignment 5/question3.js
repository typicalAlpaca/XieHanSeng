const p = Promise.resolve({ id: 1, name: 'Alice' });

p.then(value => console.log(value));
