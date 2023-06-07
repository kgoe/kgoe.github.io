/**
 * AJV Schema
 */
var ajv = new Ajv({allErrors: true});

var rawSchema = {
    "type": "object",
    "properties": {
        "property1": {
            "type": "string"
        },
        "property2": {
            "type": "string"
        },
        "object1": {
            "type": "object",
            "properties": {
                "field1": {
                    "type": "string"
                },
                "field2": {
                    "type": "number"
                },
                "field3": {
                    "type": "boolean"
                },
                "field4": {
                    "type": "boolean"
                },
            },
            "required": ["field1", "field2"]
        },
        "object2": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "field1": {
                        "type": "string"
                    },
                    "field2": {
                        "type": "number"
                    },
                    "field3": {
                        "type": "boolean"
                    },
                    "field4": {
                        "type": "boolean"
                    },
                },
                "required": ["field1", "field2", "field3"]
            },
        },
        "object3": {
            "type": "object",
            "properties": {},
            "required": [],
        },
    },
    "required": ["property1", "property2", "object1", "object2"],
};

// AJV Schema from the example above
const validate = ajv.compile(rawSchema);

// console.log(validate.toString());

/**
 * MOCHA UNIT TEST
 */

var expect = chai.expect;

describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });
    it("should set cow's name if provided", function() {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });
  describe("#greets", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new Cow()).greets();
      }).to.throw(Error);
    });
    it("should greet passed target", function() {
      var greetings = (new Cow("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby");
    });
  });
});

describe("JSON Validator", function(){
    describe("constructor", function() {
        it("ajv", function() {
          expect(typeof ajv).to.equal("object");
        });
        it("ajv validate", function() {
          var cow = new Cow("Kate");
          expect(typeof validate).to.equal("function");
        });
    });
    describe("validate {}", function() {
        it("validate {}", function() {
            validate({});
            var thisError = validate.errors;
            expect(Array.isArray(thisError), thisError).to.equal(false);
            window.validate1 = JSON.stringify(thisError);
            console.log(thisError);
        });
    });
    describe("validate window.cow_json", function() {
        it("validate window.cow_json", function() {
            validate(window.cow_json);
            var thisError = validate.errors;
            expect(Array.isArray(thisError), thisError).to.equal(false);
            window.validate2 = JSON.stringify(thisError);
        });
    });
});