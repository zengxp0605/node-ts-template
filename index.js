
const Index = require('./build/');

// For debug test
let instance = new Index('test', 't1');
instance.test();

module.exports = Index;