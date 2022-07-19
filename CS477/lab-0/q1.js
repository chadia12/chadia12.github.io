const result = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).apply(null, [null, {exports: {}}]);
console.log(result);

// the output will be : firstname: 'John', lastname: 'Smith'
jghkh