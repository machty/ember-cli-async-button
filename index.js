'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIAsyncButton(project) {
  this.project = project;
  this.name    = 'Ember CLI Async Button';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIAsyncButton.prototype.treeFor = function treeFor(name) {
  var treePath = path.relative(process.cwd(), __dirname);

  if (name === 'templates') {
      treePath = path.join(treePath, 'app', name);
  } else {
      treePath = path.join(treePath, name);
  }

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIAsyncButton.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIAsyncButton;
