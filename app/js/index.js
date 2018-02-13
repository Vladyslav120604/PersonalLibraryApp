var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.books = [
   		{
			'id': 0,
			'name': 'Zero to one',
			'author': 'Joanne Rowling',
			'date': '01.03.14',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},

		{
			'id': 1,
			'name': 'Harry Potter',
			'author': 'Martin Garix',
			'date': '01.12.18',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 2,
			'name': 'The Hound',
			'author': 'A.Conan Doyle',
			'date': '25.12.10',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},

		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'unread' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
			'notes': 'read' 
		},
		{
			'id': 3,
			'name': 'Martin Eden ',
			'author': 'Jack London',
			'date': '30.01.16',
			'rate': 5,
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











