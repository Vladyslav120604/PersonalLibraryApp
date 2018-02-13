var app = angular.module("myApp", ['jkAngularRatingStars']);

app.controller("myCtrl", function($scope) {
    $scope.books = [
   		{
			'id': 0,
			'name': 'Zero to one',
			'author': 'Joanne Rowling',
			'date': '01.03.14',
			'rate': 4,
			'rateDisplay': 'block',
			'notes': 'read' 
		},

		{
			'id': 1,
			'name': 'Harry Potter',
			'author': 'Martin Garix',
			'date': '01.12.18',
			'rate': 2,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 2,
			'name': 'The Hound',
			'author': 'A.Conan Doyle',
			'date': '25.12.10',
			'rate': 1,
			'rateDisplay': 'block',
			'notes': 'read' 
		},

		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 1,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 1,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 3,
			'rateDisplay': 'block',
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 1,
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 0,
			'rateDisplay': 'none',
			'notes': 'unread' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rateDisplay': 'block',
			'rate': 5,
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rateDisplay': 'block',
			'rate': 3,
			'notes': 'read' 
		},
	];

  $scope.addPerson = function(){
    var person = {
        name: $scope.name,
        author: $scope.author,
        rate: $scope.rate,
        notes: 'adsfasdfasdfasdf'
    };

    $scope.books.push(person);
  }; 

  $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});











