var PROTOTYPE_amod = Object.create({
    //*
    log: console.log,
    /*/
    log: function(){}, // silence logs
    //*/
    getPageSize: function(){
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    },
});

var _amod = Object.create(PROTOTYPE_amod);