var fs = require('node:fs');

// var assert = require('assert');
var CHAI = require('chai');
var assert = CHAI.assert;
var CHEERIO = require('cheerio');
var cheerio = CHEERIO;

var rawHTML = fs.readFileSync('deploy/index.html');
var $ = cheerio.load(rawHTML);

describe('HTML Basic Elements', function () {
   it('html head body etc elements check', function(){
      assert.equal($('html').length === 1, true);
      assert.equal($('head').length === 1, true);
      assert.equal($('body').length === 1, true);
      assert.equal($('title').length === 1, true);
   });

   it('style elements check', function(){
      assert.equal($('link').length === 1, true);
   });

   it('script elements check', function(){
    assert.equal($('script').length === 2, true);
 });
});

describe('HTML Specific Elements', function(){
   it('class check', function(){
      assert.equal($('.bgimg').length === 1, true);
      assert.equal($('.topleft').length === 1, true);
      assert.equal($('.middle').length === 1, true);
      assert.equal($('.bottomleft').length === 1, true);
      assert.equal($('.small').length === 1, true);
   });
  
   it('string search check', function(){
      assert.equal(rawHTML.includes('kgoe.github.io'), true);
      assert.equal(rawHTML.includes('COMING SOON'), true);
   });
});