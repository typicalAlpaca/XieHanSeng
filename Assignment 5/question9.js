const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];


Promise.all(promises).then(values => console.log(values));
