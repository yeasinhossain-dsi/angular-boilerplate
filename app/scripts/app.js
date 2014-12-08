var app = angular.module('myApp', ['templates-main', 'ngRoute', 'ui.bootstrap', 'ui.router']);

app.run(['$rootScope', 'userStatusService', function($rootScope, userStatusService){
    $rootScope.$on("$routeChangeStart", function(event, next) {        
        console.log( 'changed' );
        //  Security Check for private pages
        var loginRequired = typeof( next.$$route ) === 'undefined' ? false: next.$$route.requireLogin;                
        if( loginRequired && !userStatusService.getStatus() ){
            event.preventDefault();            
            window.location = '#/login';
        }        
        
    });
}]);

app.config(['$httpProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $routeProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.interceptors.push('globalRequestInterceptor');

    //  Classical Angular Route
    // for( route in app.routes ){
    //     $routeProvider.when( route, app.routes[route] );        
    // }
    // $routeProvider.otherwise({          
    //     templateUrl: 'templates/404.html'
    // });


    //  UI-Route
    for( state in app.states ){
        $stateProvider.state( state, app.states[state] );
    }
    $urlRouterProvider.otherwise('/');

}]);