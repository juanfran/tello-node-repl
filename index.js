const repl = require('repl');
const replServer = repl.start({
  prompt: 'drone: ',
/*   eval: (cmd, context, filename, callback) => {
    // console.log(cmd);


    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
    process.stdin.resume();


   callback(null, cmd);
  } */
});

const globalContext = {
  takeoff() {},
  control() {

  }
};

/* Object.defineProperty(replServer.context, 'drone', {
  configurable: false,
  enumerable: true,
  value: globalContext
}); */

replServer.context.drone = {
  takeoff() {
    console.log('takeoff');
  },
  fly() {
    // process.stdin.pause();

    var stdin = process.stdin;

    stdin.setRawMode(true);

    stdin.resume();

    stdin.setEncoding('utf8');

    stdin.on('data', function(key) {
      console.log(key);
    });
  }
}

replServer.displayPrompt();
replServer.on('exit', () => {
  process.exit();
});
