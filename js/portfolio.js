angular.module('PortfolioApp' ,['ui.router', 'ui.bootstrap'])
.controller('LandingCtrl', ['$scope', '$http', function($scope, $http) {

}])

// connects templates and controllers to proper url
.config(function($stateProvider) {
	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: 'index.html',
			controller: 'LandingCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html',
			controller: 'AboutCtrl'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'partials/projects.html',
			controller: 'ProjectsCtrl'
		})
		.state('resume', {
			url: '/resume',
			templateUrl: 'partials/resume.html',
			controller: 'ResumeCtrl'
		})
		.state('connect', {
			url: '/connect',
			templateUrl: 'partials/connect.html',
			controller: 'ConnectCtrl'
		})
})

// sends to landing if url is not provided
.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
})

.controller('AboutCtrl', ['$scope', '$http', function($scope, $http) {

}])

.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {

}])

.controller('ConnectCtrl', ['$scope', '$http', function($scope, $http) {

}])