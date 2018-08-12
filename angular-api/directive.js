var app = angular.module('app', ['ngSanitize'])
app.controller('demoCtrl', function ($scope) {
    $scope.checkboxModel = {
        value1: true,
        value2: 'YES'
    };
    $scope.example = {
        value: new Date(2013, 9, 22)
    };
    $scope.range = {
        value: 75,
        min: 1,
        max: 20
    };
    $scope.myHTML =
        '<strong>I am an <code>HTML</code>string with</strong> ' +
        '<a href="#">links!</a> and other <em>stuff</em>';
    $scope.name = "matt";
    $scope.age = "18";
    $scope.blur1 = false;
    $scope.blur = function (e) {
        $scope.blur1=!$scope.blur1;
        e.target.className=$scope.blur1?"blurnot":"blur";
    }
    $scope.counter=0;
    $scope.ngchange=function () {
        $scope.counter++;
    }
    $scope.list=[{"id":1,"shortName":"张三"},{"id":2,"shortName":"李四"},{"id":3,"shortName":"王二"}];
    $scope.result=[];
    $scope.selected = function(id,event){
        console.log(event)//打印看看这是什么，有利于理解
        var action = event.target;
        console.log(action.checked)
        if(action.checked){//选中，就添加
            if($scope.result.indexOf(id) == -1){//不存在就添加
                $scope.result.push(id);
            }
        }else{//去除就删除result里
            var idx = $scope.result.indexOf(id);
            if( idx != -1){//不存在就添加
                $scope.result.splice(idx,1);
            }
        }
    };
});