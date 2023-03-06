function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = "tango"
    callback(name);
  }
  
  processUserInput(greeting);

//   the above example is a synchronous callback