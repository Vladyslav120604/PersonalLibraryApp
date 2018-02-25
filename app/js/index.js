var app = angular.module("myApp", ['jkAngularRatingStars']);

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
	methods.getBook = function(name){
		console.log('hello ' + name + ' !');
	}

	
 return methods;
}),



app.controller("myCtrl", function(myFactory ,$scope) {
    myFactory.getBook('Vlad');
    
    $scope.books = myFactory.books;

	$scope.orderByMe = function(x) {
	        $scope.myOrderBy = x;
	}


	$scope.addRow = function(){	
	console.log(1);	
		$scope.books.push({ 'name':$scope.name, 'author': $scope.author, 'rate':$scope.rate, 'bgSrc': $scope.bgSrc });
		console.log($scope.name);
		$scope.clearForm();
	};

	$scope.showForm = function(){
		$scope.val = 1;
	}



  $scope.showEditBookForm = function(book, val){
  		$scope.val = 2;
  		$scope.book = book;
        $scope.name = book.name;
        console.log($scope.name);
        $scope.author = book.author;
        $scope.rate = book.rate;
        $scope.bgSrc = book.bgSrc;
        $scope.id = book.id;
        $scope.bgSrc = book.bgSrc;
        //$scope.currentBook = $scope.find(book.id);
        //$scope.Month = item.budget.Month;
        
  }

  $scope.saveBook = function(){
  		console.log($scope.currentBook);
  		$scope.currentBook.name = 454
  }

  $scope.cancel = function(){
  		 $scope.clearForm();
  }

  $scope.clearForm = function() {
  		console.log(1);
  		$scope.name='';
		$scope.author='';
		$scope.rate='';

		$scope.val = 3;
		

  }

  $scope.editBook = function(){
  	console.log(1);
  		var id = $scope.id;
  		for (var i = 0; i < $scope.books.length; i++) {
  			if($scope.books[i].id === id){
  				$scope.books[i].name = $scope.name;
  				$scope.books[i].author = $scope.author;
  				$scope.books[i].rate = $scope.rate;
  				$scope.books[i].bgSrc = $scope.bgSrc;
  			}
  		}
  		$scope.clearForm();
  }


  $scope.imgPattern = /(http)s?:?(\/\/[^"']*)/;


});











