var myApp = angular.module("myItems", ['lbServices']);

myApp.controller("myItemsController", function($scope, $http, Item, CHECKLIST_RECORD){
	$scope.Items = Item.find({limit: 5});
	//$scope.CHECKLIST_RECORDs = CHECKLIST_RECORD.findOne();

	

	$scope.CHECKLIST_RECORDs = [];

	$scope.go = function(searchText, selectFilter){

		console.log("my variables");
		console.log(searchText);
		console.log(selectFilter);

		var myUrl = '/api/CHECKLIST_RECORDs?filter[limit]=300'
		  + '&filter[order]=CHECKLIST_RECORD_ID%20DESC'

		if(selectFilter == 1) {
			var myUrl = '/api/CHECKLIST_RECORDs?filter[limit]=300'
		  + '&filter[order]=CHECKLIST_RECORD_ID%20DESC'
		}
		if(selectFilter == 2) {
			var myUrl = '/api/CHECKLIST_RECORDs?filter[limit]=300'
		  + '&filter[order]=CHECKLIST_RECORD_ID%20DESC'
		  + '&filter[where][CHECKLIST_RECORD_ID]=' + searchText
		}
		if(selectFilter == 3) {
			var myUrl = '/api/CHECKLIST_RECORDs?filter[limit]=300'
		  + '&filter[order]=CHECKLIST_RECORD_ID%20DESC'
		  + '&filter[where][CHECKLIST_REQUEST_ID]=' + searchText
		}
		if(selectFilter == 4) {
			var myUrl = '/api/CHECKLIST_RECORDs?filter[limit]=300'
		  + '&filter[order]=CHECKLIST_RECORD_ID%20DESC'
		  + '&filter[where][or][0][SUBCONTRACTOR_FIRST_NAME]=' + searchText
		  + '&filter[where][or][1][SUBCONTRACTOR_MIDDLE_NAME]=' + searchText
		  + '&filter[where][or][2][SUBCONTRACTOR_LAST_NAME]=' + searchText
		}
		
		console.log(myUrl);


		  //console.log(myUrl);
		$http({
		  method: 'GET',
		  //url: '/api/CHECKLIST_RECORDs?filter[limit]=300&filter[order]=CHECKLIST_RECORD_ID%20DESC&filter[where][CHECKLIST_RECORD_ID]=' + searchText
		  url: myUrl

			  // url: '/api/CHECKLIST_RECORDs?filter[limit]=300'
			  // + '&filter[order]=CHECKLIST_RECORD_ID%20DESC'
			  // + '&filter[where][CHECKLIST_RECORD_ID]=' + searchText

			// url: '/api/CHECKLIST_RECORDs?filter[limit]=300&filter[order]=CHECKLIST_RECORD_ID%20DESC&filter[where][or][0][CHECKLIST_RECORD_ID]=' 
			// + searchText 
			// + '&filter[where][or][1][CHECKLIST_REQUEST_ID]='
			// + searchText

		}).then(function successCallback(response) {

		    console.log(response.data.CHECKLIST_RECORD_ID);
		    $scope.CHECKLIST_RECORDs = response.data;
		    $scope.recordStatusMap = {
		    	"ONBDD": "Onboarding",
		    	"INIT ": "Initial",
		    	"SBMT ": "Submitted",
		    	"CANDD": "Cancelled",
		    	"CHNGD": "Changed",
		    	"OFBDD": "Offboarded",
		    	"NA": "N/A",
		    	"REI": "REINSTATED",
		    	"CANCG": "CANCELLING",
		    	"CHNGN": "CHANGING",
		    	"FINAL": "FINAL",
		    	"PROCESSING": "PROCESSING",
		    	"CLOSE": "CLOSED",
		    	"SBMTR": "SUBMITTED_RETURNED",
		    	"RSBMT": "RESUBMITTED",
		    	"DRFT": "DRAFT",
		    	"RSBMT": "RESUBMITTED"
		    }
		  }, function errorCallback(response) {
		    console.log("error");
		    console.log(response);
		  });
	}
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
	  url: '/api/CHECKLIST_RECORDs?filter[limit]=300&filter[order]=CHECKLIST_RECORD_ID%20DESC'
	}).then(function successCallback(response) {

	    console.log(response.data.CHECKLIST_RECORD_ID);
	    $scope.CHECKLIST_RECORDs = response.data;
	    $scope.recordStatusMap = {
	    	"ONBDD": "Onboarding",
	    	"INIT ": "Initial",
	    	"SBMT ": "Submitted",
	    	"CANDD": "Cancelled",
	    	"CHNGD": "Changed",
	    	"OFBDD": "Offboarded",
	    	"NA": "N/A",
	    	"REI": "REINSTATED",
	    	"CANCG": "CANCELLING",
	    	"CHNGN": "CHANGING",
	    	"FINAL": "FINAL",
	    	"PROCESSING": "PROCESSING",
	    	"CLOSE": "CLOSED",
	    	"SBMTR": "SUBMITTED_RETURNED",
	    	"RSBMT": "RESUBMITTED",
	    	"DRFT": "DRAFT",
	    	"RSBMT": "RESUBMITTED"
	    }
	  }, function errorCallback(response) {
	    console.log("error");
	    console.log(response);
	  });


	console.log($scope);
});