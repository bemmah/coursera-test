(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
   
  $scope.checkItems = function(){
     if(!$scope.lunchItems){
        $scope.feedback = "Please enter data first";
     }else if($scope.lunchItems){
        var enteredList = $scope.lunchItems;
        var list = enteredList.split(',');
        if(list.length <= 3)
         $scope.feedback = "Enjoy!";
        else
         $scope.feedback = "Too much!";
     }

  };
  
  $scope.returnString = function(){
     
  }
}

})();
