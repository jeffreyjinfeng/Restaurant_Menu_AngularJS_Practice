app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
    	name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oils.',
      price: 4.95
    }
  ];
	$scope.mains = [
    {
      name: 'food1',
      description: 'one',
      price: 1.23
    },
    {
      name: 'food2',
      description: 'two',
      price: 2.24
    },
    {
      name: 'food3',
      description: 'three',
      price: 3.43
    }
  ]
}]);
