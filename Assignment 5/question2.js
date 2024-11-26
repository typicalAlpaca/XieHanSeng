const p = Promise.reject(new Error('Oops!'));

p.catch(err => console.log(err));
