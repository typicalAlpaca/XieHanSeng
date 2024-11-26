const p = Promise.reject(new Error('Invalid value'));

p.catch(err => console.log(0));
