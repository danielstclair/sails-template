angular.module('app.services', [])

.factory('Validate', function() {
	return {
			htmlCredentials: function(htmlCredentials) {
				/* error Model */
				var error = {
					identifier: '',
					password: ''
				};
				/* htmlCredentials.identifier is '' evalutates to false --> 
				!false evals to true. Therfore, it runs the if(true) statement */

				/* True its empty */
				if(!htmlCredentials.identifier) {
					error.identifier = 'Enter your email address';
				}
				else if(!validator.isEmail(htmlCredentials.identifier)) {
					error.identifier = 'The email address is not valid';
				}

				if(!htmlCredentials.password) {
					error.password = 'Enter a password';
				}

				return error;
			},

			hasError: function(error) {
				for(var i in error) {
					if(error.hasOwnProperty(i) && error[i]) {
						return true;
					}
				}
				return false;
			}
	};
})

.factory('Assalidate', function() {
	return {
			htmlCredentials: function(htmlCredentials) {
				var error = {
					title: '',
					due: '',
					link: ''
				}

				if(!htmlCredentials.title) {
					error.title = 'Enter an assignment name';
				}
				if(!validator.isDate(htmlCredentials.due)) {
					error.due = 'The date must be a date'
				}
				if(!validator.isURL(htmlCredentials.link)) {
					error.link = 'Link must be a URL'
				}
				return error;
			},

			hasError: function(error) {
				for(var i in error) {
					if(error.hasOwnProperty(i) && error[i]) {
						return true;
					}
				}
				return false;
			}

	};
})