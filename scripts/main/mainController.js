(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['AddonFactory'];

    /* @ngInject */
    function MainController(AddonFactory) {
		console.log("main controller");

        var viewModel = this;
		viewModel.addons = [];
		viewModel.getAddons = getAddons;
		viewModel.browseForDirectory = browseForDirectory;
		viewModel.treeOfSaviorDirectory = "";

        activate();

        function activate() {
			return getAddons().then(function() {
				console.log("activated main controller");
			});
        }

		function getAddons() {
			return AddonFactory.getAddons().then(function(data) {
				viewModel.addons = data;
				return viewModel.addons;
			});
		}

		/*
		$scope.mods = [
			{ name: 'expviewer', author: 'Excrulon', isInstalled: false },
			{ name: 'mobframes', author: 'SecurityRisk', isInstalled: false }
		];
		*/

		function browseForDirectory() {
			var remote = require('remote');
			var dialog = remote.require('dialog');
			viewModel.treeOfSaviorDirectory = dialog.showOpenDialog({ properties: ['openDirectory']});
		};
    }
})();
