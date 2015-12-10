(function() {
    'use strict';

    angular
        .module('app')
        .factory('AddonFactory', AddonFactory);

    AddonFactory.$inject = ['$resource'];

    /* @ngInject */
    function AddonFactory($resource) {
        var service = {
            getAddons: getAddons
        };

        return service;

        function getAddons() {
			return $resource('http://api.tosdev.info/projects').get().$promise
				.then(getAddonsComplete)
				.catch(function(message) {
					console.log("failed");
				});

			function getAddonsComplete(data, status, headers, config) {
				return data.projects;
			}
        }
    }
})();
