angular.module('PortfolioApp', ['ngAnimate', 'ui.router', 'ui.bootstrap'])
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

.run(function($rootScope) {
	$rootScope.$on('$stateChangeSuccess', 
	function(event, toState, toParams, fromState, fromParams){ 
		$(document).ready(function() {resize()});
	})
})

.controller('CarouselCtrl', function ($scope) {
	// carousel stuff
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	var currIndex = 0;
	$scope.slides = [
		{
			image: 'img/concerts.png',
			text: 'This website finds concerts and music festivals and places them on a map for you. You can filter by city or date and even listen to the artist\'s top hit on spotify!',
			id: 0,
			name: 'ConcertFindr',
			link: 'http://students.washington.edu/kaiyosh/info343/challenges/Group_Project/#/',
			github: 'https://github.com/dhan206/Group_Project'
		},
		{
			image: 'img/coffee.png',
			text: 'Here I built a very fun mock marketing and e-commerce site. It has afunctional shopping cart and other useful responisve features.',
			id: 1,
			name: 'Dawg Coffee',
			link: 'http://students.washington.edu/kaiyosh/info343/challenges/dawg-coffee/#/',
			github: 'https://github.com/kaiyoshino/website-projects/tree/master/dawg-coffee'
		},
		{
			image: 'img/paint_full.png',
			text: 'This android app tracks your location and paints your movement as you go.',
			id: 2,
			name: 'GeoPainter',
			link: 'https://github.com/kaiyoshino/geopaint',
			github: 'link" href="https://github.com/kaiyoshino/geopaint'
		},
		{
			image: 'img/shooting_map.png',
			text: 'Infographic website that displays police shooting data on an interactive map.',
			id: 3,
			name: 'Shootings',
			link: 'http://students.washington.edu/kaiyosh/info343/challenges/shooting-map/#/',
			github: 'ttps://github.com/kaiyoshino/website-projects/tree/master/shooting-map'
		}
	];
})

.controller('AboutCtrl', ['$scope', '$http', function($scope, $http) {

}])

.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {

}])

.controller('ConnectCtrl', ['$scope', '$http', function($scope, $http) {

}])



			    // <div class="item">
			    //   	<a href="http://students.washington.edu/kaiyosh/info343/challenges/shooting-map/#/">
			    //   		<img class="car-img" src="img/shooting_map.png" alt="Shooting Map" href="">
			    //   	</a>
			    //   	<h2><a class="link" href="http://students.washington.edu/kaiyosh/info343/challenges/shooting-map/#/">Shooting Map</a></h2>
				  	// <p>Infographic website that displays police shooting data on an interactive map.</p>
				  	// <p><a class="link" href="https://github.com/kaiyoshino/website-projects/tree/master/shooting-map">GitHub</a></p>

