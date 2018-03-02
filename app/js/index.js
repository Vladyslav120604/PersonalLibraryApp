var config = {
		    apiKey: "AIzaSyCDQ5cCDHyssXBH3hgAlFLrpiQKarYlxJM",
		    authDomain: "mylibapp-2fef8.firebaseapp.com",
		    databaseURL: "https://mylibapp-2fef8.firebaseio.com",
		    projectId: "mylibapp-2fef8",
		    storageBucket: "mylibapp-2fef8.appspot.com",
		    messagingSenderId: "568605790913"
		  };
firebase.initializeApp(config);

var app = angular.module("myApp", ['firebase']);

app.factory("myFactory", function(){
	var methods = {}
	methods.books = [
		{
			'id': 5022,
			'name': 'Zero to one',
			'author': 'Joanne Rowling',
			'date': '01.03.14',
			'rate': 4,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/BqWzFv'
		},

		{
			'id': 838,
			'name': 'Harry Potter',
			'author': 'Martin Garix',
			'date': '01.12.18',
			'rate': 2,
			'rateDisplay': 'block',
			'notes': 'read' ,
			'bgSrc': 'https://goo.gl/V8VLZK'
		},
		{
			'id': 2185,
			'name': 'The Hound',
			'author': 'A.Conan Doyle',
			'date': '25.12.10',
			'rate': 1,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/4hpnsX'
		},

		{
			'id': 952,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/4hpnsX'
		},
		{
			'id': 139,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/4hpnsX'
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1) + 1),
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 1,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/4hpnsX'
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/4hpnsX'
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 1,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://goo.gl/4hpnsX'
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'rateDisplay': 'block',
			'notes': 'read',
			'bgSrc': 'https://img.depo.ua/745xX/Jan2015/31392.jpg'
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'rateDisplay': 'block',
			'notes': 'read',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 1,
			'notes': 'read',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread',
			//'bgSrc': 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rateDisplay': 'block',
			'rate': 5,
			'notes': 'read',
			'bgSrc': 'http://kotiki.net/wp-content/uploads/2017/02/%D0%A1%D1%82%D0%B8%D1%85%D0%B8-%D0%BF%D1%80%D0%BE-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%BE%D0%B2.-%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%9C%D0%BE%D0%B2%D1%88%D0%BE%D0%B2%D0%B8%D1%87-660x330.jpg' 
		},
		{
			'id': Math.floor(Math.random() * (1000 - 1)) + 1,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rateDisplay': 'block',
			'rate': 3,
			'notes': 'read',
			'bgSrc': 'http://bipbap.ru/wp-content/uploads/2017/09/81736420_4601429_milii_kot_2012.jpg' 
		},
	];

	methods.getBook = function(book){
		var id = book['id'];
		console.log(id);
		for (var i = 0; i < methods.books.length; i++) {
			if(id == methods.books[i]['id']){
				return  methods.books[i];
			}
		}
	},

	methods.updateBook = function(currentBook, updatedBook){
		currentBook.name = updatedBook.name;
		currentBook.author = updatedBook.author;
		currentBook.rate = updatedBook.rate;
		currentBook.bgSrc = updatedBook.bgSrc;
	},

	methods.saveBook = function(newBook){
		methods.books.unshift({ 'name':newBook.name, 'author': newBook.author, 'rate':newBook.rate, 'bgSrc': newBook.bgSrc })
	}

	
 return methods;
}),



app.controller("myCtrl", function(myFactory ,$scope, $firebaseAuth, $firebaseObject, $firebaseArray) {
    var rootRef =  firebase.database().ref().child('users');
    var authObj = $firebaseAuth();
    var ref = rootRef.child('AXOvEQCMXQOoMfLYoa9NpfVCOto2/books');
    var tt = $firebaseObject(ref);
    console.log(tt);
    $scope.books = $firebaseArray(ref);
    console.log(tt);

		  firebase.database().ref('users/' + 'AXOvEQCMXQOoMfLYoa9NpfVCOto2/' + 'books/' + 5).set({
			    id: Math.floor(Math.random() * (1000 - 1) + 1),
				name: 'hello',
				author: 'Jack London',
				date: '30.01.16',
				rate: 5,
				rateDisplay: 'block',
				notes: 'read',
				bgSrc: 'https://goo.gl/4hpnsX'
		  });


	$scope.saveNewBook = function(){	
			
		/*$scope.books.unshift({ 'name':$scope.name, 'author': $scope.author, 'rate':$scope.rate, 'bgSrc': $scope.bgSrc });
		console.log($scope.name);
		$scope.clearForm();*/
		var newBook = $scope.getDataFromInputs();
		myFactory.saveBook(newBook);
		console.log(newBook);
	};

	$scope.showForm = function(val){
		$scope.val = val;
	}

	$scope.closeForm = function(){
		$scope.val = 3;
	}

	$scope.clearForm = function() {
  		console.log('hellllllllllllo');
  		$scope.name='';
		$scope.author='';
		$scope.rate='';
		$scope.bgSrc='';
		

  	}

  	$scope.cancel = function(){
  		 $scope.clearForm();
  		 $scope.closeFrom();
  	}


//    edit book    //


	$scope.showDataInInputs = function(book){
		$scope.name = book.name;
		$scope.author = book.author;
		$scope.rate = book.rate;
		$scope.bgSrc = book.bgSrc;
	}

	$scope.getDataFromInputs = function(book){
		
		var updatedBook = {
			name: $scope.name,
			rate: $scope.rate,
			author: $scope.author,
			bgSrc: $scope.bgSrc
		};
		return updatedBook;
	}

  	$scope.editBook = function(book, val){
  		$scope.showForm(2);
  		$scope.currentBook = myFactory.getBook(book);
  		$scope.showDataInInputs(book);        
  	}

  	$scope.updateBook = function(){
  		var updatedBook = $scope.getDataFromInputs($scope.currentBook);
  		myFactory.updateBook($scope.currentBook, updatedBook);
  		$scope.clearForm();
  		$scope.closeFrom();
  	}


//    add new book    //
	$scope.addBook = function(){
		$scope.showForm(1);
		$scope.clearForm();
		var newBook = $scope.getDataFromInputs();
	}

  	$scope.imgPattern = /(http)s?:?(\/\/[^"']*)/;

  	$scope.orderByMe = function(x) {
	        $scope.myOrderBy = x;
	}

	

	authObj.$onAuthStateChanged(function(user) {
		console.log(user);
  		if (user) {
  		$scope.currentEmail = user.email; // User is signed in!
	    	// Get profile pic and user's name from the Firebase user object.
	    	
		     // Only change these two lines!
		}
		else{
			window.location.replace("./index.html");
		}
	})

	$scope.logOut = function(){
		authObj.$signOut();
	}
});











