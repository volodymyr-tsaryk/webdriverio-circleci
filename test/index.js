var assert = require('assert');

describe('App Index', function() {
  context('content', function() {
    it('should say hello', function() {
        var content = $('p*=Hello').getText();
        assert.equal('Hello world!', 'Hello world!');
    });
  });
});
