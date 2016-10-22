angular.module('starter.services', [])

    .service('CoCs', function ($http, $q) {
        var service = this,
            baseUrl = '/api/coc/';

        function getUrl() {
            return 'http://localhost:5000' + baseUrl;
        }

        service.all = function () {
            return $http.get(getUrl() + "all");
        };

        service.fetch = function (id) {
            return $http.get(getUrl() + "read/" + id);
        };

        service.create = function (object) {
            return $http.post(getUrl() + "create", object);
        };

        service.update = function (id, object) {
            return $http.post(getUrl() + "update/" + id, object);
        };

        service.delete = function (id) {
            return $http.delete(getUrl() + "delete/" + id);
        };
    })

    .service('Organizations', function ($http) {
        var service = this,
            baseUrl = '/api/organization/';

        function getUrl() {
            return 'http://localhost:5000' + baseUrl;
        }

        service.all = function () {
            return $http.get(getUrl() + "all");
        };

        service.fetch = function (id) {
            return $http.get(getUrl() + "read/" + id);
        };

        service.create = function (object) {
            return $http.post(getUrl() + "create", object);
        };

        service.update = function (id, object) {
            return $http.post(getUrl() + "update/" + id, object);
        };

        service.delete = function (id) {
            return $http.delete(getUrl() + "delete/" + id);
        };
    })

    .service('Persons', function ($http) {
        var service = this,
            baseUrl = '/api/person/';

        function getUrl() {
            return 'http://localhost:5000' + baseUrl;
        }

        service.all = function () {
            return $http.get(getUrl() + "all");
        };

        service.fetch = function (id) {
            return $http.get(getUrl() + "read/" + id);
        };

        service.create = function (object) {
            return $http.post(getUrl() + "create", object);
        };

        service.update = function (id, object) {
            return $http.post(getUrl() + "update/" + id, object);
        };

        service.delete = function (id) {
            return $http.delete(getUrl() + "delete/" + id);
        };
    })

    .service('Users', function ($http) {
        var service = this,
            baseUrl = '/api/user/';

        function getUrl() {
            return 'http://localhost:5000' + baseUrl;
        }

        service.all = function () {
            return $http.get(getUrl() + "all");
        };

        service.fetch = function (id) {
            return $http.get(getUrl() + "read/" + id);
        };

        service.create = function (object) {
            return $http.post(getUrl() + "create", object);
        };

        service.update = function (id, object) {
            return $http.post(getUrl() + "update/" + id, object);
        };

        service.delete = function (id) {
            return $http.delete(getUrl() + "delete/" + id);
        };
    })

    .service('Forms', function ($http) {
        var service = this,
            baseUrl = '/api/form/';

        function getUrl() {
            return 'http://localhost:5000' + baseUrl;
        }

        service.all = function () {
            return $http.get(getUrl() + "all");
        };

        service.fetch = function (id) {
            return $http.get(getUrl() + "read/" + id);
        };

        service.create = function (object) {
            return $http.post(getUrl() + "create", object);
        };

        service.update = function (id, object) {
            return $http.post(getUrl() + "update/" + id, object);
        };

        service.delete = function (id) {
            return $http.delete(getUrl() + "delete/" + id);
        };
    })

    .service('Questions', function ($http) {
        var service = this,
            baseUrl = '/api/question/';

        function getUrl() {
            return 'http://localhost:5000' + baseUrl;
        }

        service.all = function () {
            return $http.get(getUrl() + "all");
        };

        service.fetch = function (id) {
            return $http.get(getUrl() + "read/" + id);
        };

        service.create = function (object) {
            return $http.post(getUrl() + "create", object);
        };

        service.update = function (id, object) {
            return $http.post(getUrl() + "update/" + id, object);
        };

        service.delete = function (id) {
            return $http.delete(getUrl() + "delete/" + id);
        };
    });
