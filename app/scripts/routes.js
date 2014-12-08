// Angular's classic routes
app.routes = {
    '/': {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',        
    },
    '/products': {
        controller: 'ProductsCtrl',
        templateUrl: 'templates/products.html',
        //requireLogin: true
    },
    '/about': {
        templateUrl: 'templates/about.html',
    },
    '/contact': {
        controller: 'ContactUsCtrl',
        templateUrl: 'templates/contact.html',
    },
    '/login': {
        templateUrl: 'templates/login.html',
    }
};


// UI-Router states
app.states = {
    'index': {
        url: '',
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',        
    },
    'home': {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',        
    },
    'products': {
        url: '/products',
        controller: 'ProductsCtrl',
        templateUrl: 'templates/products.html'        
    },    
    'product': {
        url: '/product/:id',
        controller: 'ProductCtrl',
        templateUrl: 'templates/product.html',
        resolve: {
            'product': function(){
                console.log( 'resolved' );
                return 'Test';
            }
        }
    },
    'about': {
        url: '/about',
        templateUrl: 'templates/about.html',
    },
    'contact': {
        url: '/contact',
        controller: 'ContactUsCtrl',
        templateUrl: 'templates/contact.html',
    },
    'multiple': {
        url: '/multiple',
        views: {
            '': {
                templateUrl: 'templates/layout/main.html'
            },
            'sidebar@multiple': {
                template: 'templates/products.html'
            },
            'mainContent@multiple': {
                templateUrl: 'templates/contact.html',
                controller: 'ContactUsCtrl'
            }
        }
    },
    'login': {
        url: '/login',
        templateUrl: 'templates/login.html',
    }
};