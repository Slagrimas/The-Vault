'use strict';
module.exports = function() {
var secretSecret = {};
return {
  setValue : function (key, value){
    secretSecret[key] = value;
  },

  getValue : function (key){
    if (secretSecret.hasOwnProperty(key)){
      return secretSecret[key];
    }else{
      return null;
    }
  }
}
};