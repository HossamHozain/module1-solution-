(function () {
    'use strict';

    angular
        .module('LunchChecker', [])
        .controller('Controller1', Controller1);

    Controller1.$inject = ['$scope'];
    function Controller1($scope) {
        $scope.dishes = "";
        $scope.message = "";
        $scope.styling = "";
        $scope.check = function () {
            $scope.message = fo().message;
            $scope.styling= fo().styling;
        }
        // private function to do the work
        function fo() {
            let message = "",
                dishesArr = $scope.dishes.split(","),
                count = dishesArr.length,
                styling="";
                
                //validation to write the message and choose the color 
            if ($scope.dishes === "") {
                message = "Please enter data first"; 
                styling={"border":"1px solid red","color":"red"};
            }
            else if (count <= 3) {
                message = "Enjoy!";
                styling={"border":"1px solid green","color":"green"};
            }
            else {
                message = "Too much!";
                styling={"border":"1px solid green","color":"green"};
            }

            return {message,styling};
        }
    }
})();