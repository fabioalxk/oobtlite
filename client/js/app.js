var myApp = angular.module("myItems", ['lbServices']);
myApp.controller("myItemsController", function($scope, $http, Item, CHECKLIST_RECORD){
	$scope.Items = Item.find({limit: 5});
	//$scope.CHECKLIST_RECORDs = CHECKLIST_RECORD.findOne();

	

	$scope.CHECKLIST_RECORDs = [];
	//$scope.CHECKLIST_RECORDs = CHECKLIST_RECORD.findOne();

	// CHECKLIST_RECORD.findOne(function(err, results) {
	// 	console.log('error = ', err);
	// 	console.log(results.length);
	// 	console.log(results);
	// 	//$scope.CHECKLIST_RECORDs = results;
	// });


	// CHECKLIST_RECORD.findOne().$promise
 //    .then(function(results) {
 //    	console.log(results);
 //    	$scope.CHECKLIST_RECORDs = [results];
 //    });

	// CHECKLIST_RECORD.find({limit: 5}).$promise
	//     .then(function(results) {
	//     	console.log(results);
	//     	//$scope.CHECKLIST_RECORDs = [results];
	//     });

	// CHECKLIST_RECORD.find({limit: 5},  function(err, results) {
	//     console.log(results);
	// })

	//console.log(CHECKLIST_RECORD.find());

	// Simple GET request example:
	//url: 'http://localhost:9090/api/CHECKLIST_RECORDs?filter[limit]=100&filter[order]=CHECKLIST_RECORD_ID%20DESC' 
	$http({
	  method: 'GET',
	  url: '/api/CHECKLIST_RECORDs?filter[limit]=100&filter[order]=CHECKLIST_RECORD_ID%20DESC'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    console.log("response");
	    console.log(response);
	    console.log(response.data.CHECKLIST_RECORD_ID);
	    $scope.CHECKLIST_RECORDs = response.data;
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    console.log("error");
	    console.log(response);
	  });


	console.log($scope);
});