//'use strict';

app = angular.module('blocitoffApp');



app.filter('makeUppercase', function () {
    return function (item) {
        return item.toUpperCase();
    };
});

app.filter('hideComplete', function () {
    return function (taskItem) {
        if (taskStatus === true) {

        }
        return item.toUpperCase();
    };
});

// app.controller('PersonCtrl', function () {
//     // this.username = 'todo made uppercase';
// });



//tasks controller
app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', '$timeout', function($scope, $http, $firebaseArray, $timeout) {
    
    console.log("home.controller.js start");
    

    //EXAMPLE using the timeout service
    //Notice the function passed to the $timeout service. This function calls the callAtTimeout() function on the $scope object.
    $scope.callAtTimeout = function() {
        console.log("$scope.callAtTimeout - Timeout occurred");
    }

    $timeout( function(){ $scope.callAtTimeout(); }, 3000);
    /////

    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
    $scope.newTask = {
        text: null,
        status: false
    };

    // $scope.historyTasks = $firebaseArray(taskData).where(checked: true);
  
    
    //function reset input form
    $scope.reset = function() {
      // if (addForm) {
      //   addForm.$setPristine();
      //   addForm.$setUntouched();
      // }
      $scope.newTask = {};
    };
    
    // I have my data setup as an object; may want to refactor?
    $scope.addTask = function() {
      console.log("$scope.newTask.text", $scope.newTask);
      	// var addToArray = $scope.newTask.text
        
        //add new task to Firebase
        $scope.tasks.$add($scope.newTask['text']);

        ///Using $timeout for tasks
    	$scope.expireTaskAtTimeout = function() {
 			$scope.newTask.status = true;
    	}

    	$timeout( function(){ $scope.expireTaskAtTimeout(); }, 3000);

        //call the reset function to clear entry form
        $scope.reset();
    };




     //console log a recall of array data
    taskData.on("child_added", function(snapshot) {
      var consoleTask = snapshot.val();
      console.log("Text: " + consoleTask.text);
      console.log("Status: " + consoleTask.status);
    });




    // When inputting form, need to clear form when submitted
    // e.g. if form is named "addForm", you can use the setPristine() method on $scope.addForm
    // Also need to clear model inputs with something like: $scope.currentRecord={};

    // $scope.getAllTasks = function() {
    //     return $firebaseArray(taskData);
    // }
    
    // complete = function() {
    //     if ($scope.taskChecked === true) {
    //         $scope.tasks.$add({
    //             status: $scope.taskChecked 
    //         });
    //     };
    // };


    console.log("home.controller.js finished");
}]);
