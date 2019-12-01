module.controller("calcCtrl", CalcCtrl)

function CalcCtrl($scope, $rootScope) {
    $scope.x = 0
    $scope.oper = "+"
    $scope.y = 1 
    $scope.result = $scope.x + $scope.y
    $scope.ifDivideByZero = false;

    $scope.$watch('x', function (newX, old) {
        calcWithOper()
    })

    $scope.$watch('y', function (newY, old) {
        calcWithOper()
    })

    
    $scope.$watch('oper', function (newOper, old) {
        calcWithOper()
    })

    function calcWithOper(){        
        
        switch($scope.oper) {            
            case "plus":
                $scope.result = $scope.x + $scope.y
              break;
            case "minus":
                $scope.result = $scope.x - $scope.y            
            break;
            case "multiple":
                $scope.result = $scope.x * $scope.y
            break;
            case "divide":
                if ($scope.y == 0){
                    $scope.ifDivideByZero = true;
        
                    return
                }

                $scope.result = $scope.x / $scope.y
            break;
            
            default:
                $scope.result = $scope.x + $scope.y
                break;
          }        
    }
}