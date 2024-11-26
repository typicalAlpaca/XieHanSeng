const p = Promise.resolve(42);

p.then(value => {}).finally(() => console.log('Promise settled'));
