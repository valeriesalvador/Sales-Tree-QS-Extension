define( [
        './properties',
        './initialproperties',
        'text!./sample_connecting_tables.html',
        'qlik'
    ],
    function ( props, initProps, ngTemplate, qlik ) {
        'use strict';


        return {
            definition: props,
            initialProperties: initProps,
            snapshot: {canTakeSnapshot: true},
            template: ngTemplate,
            controller: function ( $scope, $element ) {
                $scope.app=qlik.currApp();
                $scope.currentChart=$scope.component.model.layout.props.obj_hr1;
                $scope.object2=$scope.component.model.layout.props.obj_hr2;
                $scope.object3=$scope.component.model.layout.props.obj_hr3;
                $scope.object4=$scope.component.model.layout.props.obj_hr4;
                $scope.object5=$scope.component.model.layout.props.obj_hr5;
                $scope.object6=$scope.component.model.layout.props.obj_hr6;
                $scope.object7=$scope.component.model.layout.props.obj_hr7;

                console.log($scope.currentChart);
                $scope.currentChartModel=null;

                if($scope.currentChart){
                        renderChart();
                };


                function renderChart(){

                    if($scope.currentChartModel==null){
                        $scope.app.getObject($element.find('div#box1'), $scope.currentChart)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                        $scope.app.getObject($element.find('div#box2'), $scope.object2)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                        $scope.app.getObject($element.find('div#box3'), $scope.object3)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                        $scope.app.getObject($element.find('div#box4'), $scope.object4)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                        $scope.app.getObject($element.find('div#box5'), $scope.object5)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                        $scope.app.getObject($element.find('div#box6'), $scope.object6)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                        $scope.app.getObject($element.find('div#box7'), $scope.object7)
                        .then(function(model){
                            $scope.currentChartModel=model;
                        });
                    }
                    else{
                        $scope.currentChartModel.enigmaModel.endSelections(true)
                .then(destroyObject)
                .then(
                function() {
                    $scope.app.getObject($element.find('div#box1'), $scope.currentChart)
                        .then(function(model) {
                        $scope.currentChartModel = model;
                    });
                });
                    }
                };
            }
        };
    } );
