angular.module('app.controllers', ['app.services'])
.controller('homeCTRL', function($scope){

})




.controller('loginCTRL', function($scope, Validate){
	var emailIsValid = false;
	var passwordIsValid = false;
	var loginPass = {};
	$scope.emailError = false;
	$scope.passwordError = false;
	$scope.pageError = false;

	$scope.emailCheck = function(email){
		if(validator.isEmail(email)){
			emailIsValid = true;
			$scope.emailError = false;
		}
		else{
			emailIsValid = false;
			$scope.emailError = true;
		}
	}

	$scope.passwordCheck = function(password){
		if (validator.isNull(password)) {
			$scope.passwordError = true;
			passwordIsValid = false;
		}
		else{
			$scope.passwordError = false;
			passwordIsValid = true;
		}
	}

	$scope.loginSubmit = function(email, password){
		email = $scope.email;
		password = $scope.password;
		if(emailIsValid && passwordIsValid){
			loginPass = {
				identifier: email,
				password: password
			}
			console.log(loginPass);
			emailIsValid = false;
			passwordIsValid = false;
			$scope.email = '';
			$scope.password = '';
			$scope.pageError = false;
		}
		else{
			$scope.pageError = true;
		}

		console.log('click');
	}
})




.controller('registerCTRL', function($scope){
	var userIsValid = false;
	var emailIsValid = false;
	var passwordIsValid = false;
	var regPass = {};
	$scope.pageError = false;

	$scope.regUserCheck = function(regUser){
		if(validator.isNull(regUser)){
			userIsValid = false;
		}
		else{
			userIsValid = true;
		}
	}

	$scope.regEmailCheck = function(regEmail){
		if(validator.isEmail(regEmail)){
			emailIsValid = true;
		}
		else{
			emailIsValid = false;
		}
	}

	$scope.regPasswordCheck = function(regPassword){
		if(validator.isNull(regPassword)){
			passwordIsValid = false;
		}
		else{
			passwordIsValid = true;
		}
	}

	$scope.regSubmit = function(user, email, password){
		user = $scope.regUser;
		email = $scope.regEmail;
		password = $scope.regPassword;

		if(userIsValid && emailIsValid && passwordIsValid){
			regPass = {
				username: user,
				email: email,
				password: password
			}
			console.log(regPass);
			$scope.regUser = '';
			$scope.regEmail = '';
			$scope.regPassword = '';
			userIsValid = false;
			emailIsValid = false;
			passwordIsValid = false;
			$scope.pageError = false;
		}
		else{
			$scope.pageError = true;
		}




		console.log('click');
	}
})




























