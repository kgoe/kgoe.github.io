// cow.js

window.cow_json = {
    "property1": "value1",
    "property2": "value2",
    "object1": {
        "field1": "value1",
        "field2": 2,
        "field4": true
    },
    "object2": [
    {
        "field1": "value1",
        "field2": 2,
        "field3": true
    },
    {
        "field1": "value1",
        "field2": 2,
        "field3": true,
        "field4": false,
    }],
};

(function(exports) {
    "use strict";
    function Cow(name) {
      this.name = name || "Anon cow";
    }
    exports.Cow = Cow;
    Cow.prototype = {
      greets: function(target) {
        if (!target)
          throw new Error("missing target");
        return this.name + " greets " + target;
      }
    };
})(this);