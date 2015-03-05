angular.module('app.controllers', ['app.services'])
.controller('homeCTRL', function($scope) {

})
.controller('assignmentCTRL', function($scope, $http, $state, Assalidate) {
	$scope.error = {
		title: '',
		due: '',
		link: '',
		generic: []
	};
	$scope.htmlCredentials = {
		title: '',
		due: '',
		link: ''
	}

	$scope.assign = function(htmlCredentials) {
		$scope.error = Assalidate.htmlCredentials(htmlCredentials);
		console.log($scope.error);

		if(!Assalidate.hasError($scope.error)) {
			console.log($scope.error);
			var object = {
					name: htmlCredentials.title,
				 	dueOn: htmlCredentials.due,
				 	url: htmlCredentials.link
				 };
			 console.log(object);
		}
	}

})
.controller('loginCTRL', function($scope, $http, $state, Validate) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};

	/* console.log($scope.credentials); */

	$scope.login = function(htmlCredentials) {
		$scope.error = Validate.htmlCredentials(htmlCredentials);
		console.log($scope.error);

		if(!Validate.hasError($scope.error)) {

			var object = {
					username: htmlCredentials.identifier,
				 	email: htmlCredentials.identifier,
				 	password: htmlCredentials.password
				 };

			$http.post('/auth/local', htmlCredentials)
			.success(function(res) {
				console.log('success!');
				console.log(res);

				/* res is the object coming back from server, success is the property
				automatically is attached to the object coming back */
				if(res.success) {
					$state.go('home');
				}
				/* res.errors, errors is a property in the config>locals>en.json file you can change what it says */
				else {
					$scope.error.generic = res.errors;
				}
				console.log($scope.error);
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	};
	
	
})
.controller('registerCTRL', function($scope, Validate, $http, $state) {

	/* Model error object (empty) that is filled by the outcome of the service */
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};

	/* Setting format for credentials object filled by outcome of service */
	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};

	/* Pass object from HTML submit into function through the credentials method 
	of service to evaluate submission $scope.submit = function(htmlCredentials) { */
					/* calling object.method from services */
		$scope.register = function(htmlCredentials) {
		$scope.error = Validate.htmlCredentials(htmlCredentials);
			// console.log($scope.error);

			/* If it is true that val.hasError is false (no errors), if(true) and run */
			if(!Validate.hasError($scope.error)) {
				$scope.htmlCredentials = {
				identifier: $scope.identifier,
				password: $scope.password
			};
			 console.log(object);


			 $http.post('/auth/local/register', object)
			 .success(function(res) {
			 	// console.log('success');
			 	// console.log('res');

			 	if(res.success) {
			 		$state.go('home');
			 	}
			 	else {
			 		$scope.error.generic = res.errors;
			 	}
			 	// console.log($scope.error);
			 })

			 .error(function(err) {
			 	console.log('Error!');
			 	console.log(err);
			 });
			}	
			else {
				console.log($scope.error);
			}
	};
	
})




























