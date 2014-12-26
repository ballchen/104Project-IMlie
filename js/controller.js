var app = angular.module('lieApp', ['ngAnimate'])
	.controller('lieCtrl', ['$scope', function($scope){
		$scope.showtruth = false


		$scope.changetruth = function(num){
			if($scope.showtruth){
				$scope.showtruth = false;
			}
			else $scope.showtruth = true;
			
		}


	}])