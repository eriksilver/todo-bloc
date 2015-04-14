app = angular.module('blocitoffApp');


 app.controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }]);


app.controller("SampleCtrl", function($scope, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://dazzling-torch-1941.firebaseio.com/data");
  var itemsRef = new Firebase("https://dazzling-torch-1941.firebaseio.com/dataItems");

  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // var syncArray = $firebaseArray(itemsRef);
  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "data");
  // syncArray.$bindTo($scope, "dataItems");
  $scope.dataItems = $firebaseArray(itemsRef);


});

//tasks controller
app.controller('HomeCtrl', ['$scope', '$http', '$firebaseArray', function($scope, $http, $firebaseArray) {
>>>>>>> add-3way-binding
    
    console.log("home.controller.js start");
    
    //database for current task Data
    var taskData = new Firebase("https://dazzling-torch-1941.firebaseio.com/tasks");
    
    // create a synchronized array
    $scope.tasks = $firebaseArray(taskData);
  
>>>>>>> add-3way-binding
    
    //test for tasks array
    //$scope.tasks.$add({"text": "first task added"});
    
    // add new items to the array
    // the task is automatically added to Firebase!
    taskSync.addTask = function() {
        var newTask = {
            text: $scope.newTaskText,
            status: false 
        };
        //console.log(newTask);

=======
        $scope.tasks.$add(newTask);
        //$scope.addTasker.$setUntouched();
    };



    // When inputting form, need to clear form when submitted
    // e.g. if form is named "addForm", you can use the setPristine() method on $scope.addForm
    // Also need to clear model inputs with something like: $scope.currentRecord={};







>>>>>>> add-3way-binding
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