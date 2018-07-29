# back-to-path-from (nodejs)

back-to-path-from allows you to start a path from an earlier starting point.
part of the end to go up.

## Install

`npm install back-to-path-from`

## running
in your project include the library

`const backTo = require('back-to-path-from');`

## example
```
let result = backTo.pathFrom('/User/themes/custom', 2);
console.log(result);
--> /themes/custom
```

or, with a dirname

```
console.log(__dirname);
--> User/path/to/My/project

let result = backTo.pathFrom(__dirname, 3);
console.log(result);
--> /path/to/My/project
```

For the current directory :
```
console.log(__dirname);
--> User/path/to/My/project

let result = backTo.pathFrom(__dirname, 1);
console.log(result);
--> /project
```

Works for windows and mac paths


