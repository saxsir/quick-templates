;(function(global){
  "use strict";

  // Class
  function MyModule() {
    // ...
  }

  MyModule.prototype.sampleFunc = sampleFunc;

  // Class Methods
  function sampleFunc() {
    // ...
  }

  // Node.js
  if ("process" in global) {
    module.exports = MyModule;
  }
  // Browser
  global.MyModule = MyModule;

}((this || 0).self || global));
