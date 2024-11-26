const p = Promise.reject(new Error('Invalid id'));

p.catch(err => console.log(err));
