angular.module('app.controllers', ['app.services'])
.controller('homeCTRL', function($scope) {

})
.controller('navCTRL', function($scope, $state, $http){
	$scope.logout = function(){
		$http.get('/logout');
		$state.go('home');
	}
})
.controller('assignmentCTRL', function($scope, $http, $state, AssignVal) {
	$scope.error = {
		title: '',
		url: '',
		dueDate: '',
		dueTime: '',
		generic: []
	};
	$scope.assignment = {
		title: '',
		url: '',
		dueDate: moment().add(1, 'day').toDate(),
		dueTime: new Date(1970, 0, 1, 22, 0, 0)
	}

	$scope.assign = function(assignment) {
		$scope.error = AssignVal.assignment(assignment);
		console.log($scope.error);

		if(!AssignVal.hasError($scope.error)) {
			var dueAt = moment(assignment.dueDate);
			dueAt.hour(assignment.dueTime.getHours());
			dueAt.minute(assignment.dueTime.getMinutes());
			dueAt.second(assignment.dueTime.getSeconds());
			console.log($scope.error);
			var object = {
					name: assignment.title,
				 	url: assignment.url,
				 	dueAt: dueAt.format('YYYY-MM-DD HH:mm:ss')
				 };
			 console.log(object);

			$http.post('/assignment', object)
			.success(function(newAssignment){
				console.log(newAssignment);
			})
			.error(function(err){
				console.log(err);
			});
			console.log(assignment);

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

				if(res.success) {
					$state.go('home');
				}

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


	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};


	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};


		$scope.register = function(htmlCredentials) {
		$scope.error = Validate.htmlCredentials(htmlCredentials);
			console.log($scope.error);


			if(!Validate.hasError($scope.error)) {
				var object = {
					username: htmlCredentials.identifier,
					email: htmlCredentials.identifier,
					password: htmlCredentials.password
				};
			 console.log(object);


			 $http.post('/auth/local/register', object)
			 .success(function(res) {
			 	console.log('success');
			 	console.log('res');

			 	if(res.success) {
			 		$state.go('home');
			 	}
			 	else {
			 		$scope.error.generic = res.errors;
			 	}
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

.controller('dashboardCTRL', function($scope, $http){
	$scope.assignments = [];

	$http.get('/assignment?sort=id DESC')
	.success(function(assignments){
		$scope.assignments = assignments;
	})
	.error(function(err){
		console.log('err');
		console.log(err);
	});
})




























