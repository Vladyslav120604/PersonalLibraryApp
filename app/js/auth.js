var config = {
		    apiKey: "AIzaSyCDQ5cCDHyssXBH3hgAlFLrpiQKarYlxJM",
		    authDomain: "mylibapp-2fef8.firebaseapp.com",
		    databaseURL: "https://mylibapp-2fef8.firebaseio.com",
		    projectId: "mylibapp-2fef8",
		    storageBucket: "mylibapp-2fef8.appspot.com",
		    messagingSenderId: "568605790913"
		  };
		firebase.initializeApp(config)

var app = angular.module("myApp", ['firebase']);

app.controller("myCtrl", function($scope, $firebaseAuth) {
	var authObj = $firebaseAuth();
	console.log(authObj);

	$scope.logIn = function (){
		var email = $scope.userEmail;
		var password = $scope.userPassword;
		authObj.$signInWithEmailAndPassword(email, password).then(function(data){
				console.log(data.uid);
			})
			.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			alert(errorMessage);
		});
	},

	$scope.signUp = function(){
		var email = $scope.userEmail;
		var password = $scope.userPassword;
		authObj.$createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			alert(errorMessage);
		});		
	}

	authObj.$onAuthStateChanged(function(user) {
		console.log(user);
  		if (user) {
  				window.location.replace("/mainPage.html");
		}
	});
});
