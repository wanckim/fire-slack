angular.module('angularfireSlackApp')
  .factory('User', function($firebaseArray, $firebaseObject) {
    var usersRef = firebase.database().ref('users');
    var users = $firebaseArray(usersRef);

    var Users = {
      getProfile: function(uid) {
        return $firebaseObject(userRef.child(uid));
      },
      getDisplayName: function(uid) {
        return users.$getRecord(uid).displayName;
      },
      getGravatar: function(uid) {
        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
      },
      all: users
    };

    return Users;
  });
