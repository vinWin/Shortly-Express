var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  initialize: function(){
    this.on('creating', function(model, attrs, options) {
      bcrypt.hash(model.get('password'), null, null, function (err, hash) {
        model.set('password', hash);
        console.log(model.get('password'));
      });
    });
      /*  this.on('creating', function(model, attrs, options){
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(model.get('password'), salt, null ,function (err, hash) {
              // console.log('Salt/hash: ', salt, hash);
              model.set('password', hash);
              console.log(model.get('password'));
            });
          });
        });*/
  }
});

module.exports = User;
