
    var app = angular.module('myapp',['ui.bootstrap'])
        .controller('CalenderCtrl',function($scope, $http){
            //before merge
            var active='calendar';
            $scope.getclass  = function(current){
                return 'active';
            }

            $scope.arr=[
            {start:'08.00 AM',end:'08.30 AM'},
            {start:'09.00 AM',end:'09.30 AM'},
            {start:'10.00 AM',end:'10.30 AM'},
            {start:'11.00 AM',end:'11.30 AM'},
            {start:'12.00 PM',end:'12.30 PM'},
            {start:'01.00 PM',end:'01.30 PM'},
            {start:'02.00 PM',end:'02.30 PM'},
            {start:'03.00 PM',end:'03.30 PM'},
            {start:'04.00 PM',end:'04.30 PM'},
            {start:'05.00 PM',end:'05.30 PM'},
            {start:'06.00 PM',end:'06.30 PM'},
            {start:'07.00 PM',end:'07.30 PM'},
            {start:'08.00 PM',end:'08.30 PM'},
            {start:'09.00 PM',end:'09.30 PM'},
            {start:'10.00 PM',end:'10.30 PM'},
            ];

            $scope.days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            $scope.selarr= [];
            $scope.select = function(select, day,time){
              if(select==true){
                $scope.selarr.push({day:day,time:time});
              }else{
                    index = -1;
                    for(var i = 0, len = $scope.selarr.length; i < len; i++) {
                        if ($scope.selarr[i].day === day && $scope.selarr[i].time === time) {
                            index = i;
                            $scope.selarr.splice(index,1);
                            break;
                        }
                    }
              }
            }

            $scope.create_json = function(){
                $http({
                    method:'POST',
                    url   :'json/json.php',
                    data  :$scope.selarr
                }).then(function(result){
                    alert("Your selection has been saved !");
                    var oldpath = window.location.pathname;
                    var newpath = oldpath.replace("calendar.html","comp.html");
                    window.location.pathname = newpath;                    
                });
            }
        });
