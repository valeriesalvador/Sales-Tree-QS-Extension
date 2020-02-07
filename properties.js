define(["qlik", 'ng!$q'], function( qlik, $q){

    var app=qlik.currApp(this);

    var getMasterObjectList = function (){
        var defer= $q.defer();

        app.getAppObjectList( 'masterobject', function( data ){
            var masterobject=[];
            var sortedData= _.sortBy(data.qAppObjectList.qItems, function ( item ){
                return item.qData.rank;
            });

            _.each( sortedData, function( item ){
                masterobject.push( {
                    value: item.qInfo.qId,
                    label: item.qMeta.title
                });
            });

            return defer.resolve(masterobject);
        } );

        return defer.promise;
    };

    var obj_for_hr1={
        ref: "props.obj_hr1",
        label: "Object for Position 1",
        component: "dropdown",
        type: "string",
            options: function(){
                return getMasterObjectList().then( function ( items ){
                    return items;
                });
            }
    };

    var obj_for_hr2={
        ref: "props.obj_hr2",
        label: "Object for Position 2",
        component: "dropdown",
        type: "string",
        options: function(){
            return getMasterObjectList().then(function (items) {
                return items;
            });
        }
    };

    var obj_for_hr3={
        ref: "props.obj_hr3",
        label: "Object for Position 3",
        component: "dropdown",
        type: "string",
        options: function(){
            return getMasterObjectList().then(function (items) {
                return items;
            });
        }
    };
    var obj_for_hr4={
        ref: "props.obj_hr4",
        label: "Object for Position 4",
        component: "dropdown",
        type: "string",
        options: function(){
            return getMasterObjectList().then(function (items) {
                return items;
            });
        }
    };
    var obj_for_hr5={
        ref: "props.obj_hr5",
        label: "Object for Position 5",
        component: "dropdown",
        type: "string",
        options: function(){
            return getMasterObjectList().then(function (items) {
                return items;
            });
        }
    };
    var obj_for_hr6={
        ref: "props.obj_hr6",
        label: "Object for Position 6",
        component: "dropdown",
        type: "string",
        options: function(){
            return getMasterObjectList().then(function (items) {
                return items;
            });
        }
    };
    var obj_for_hr7={
        ref: "props.obj_hr7",
        label: "Object for Position 7",
        component: "dropdown",
        type: "string",
        options: function(){
            return getMasterObjectList().then(function (items) {
                return items;
            });
        }
    };

    var myCustomSection={
            component: "expandable-items",
            label: "Configuration",
            items:{
                obj_for_hr1:obj_for_hr1,
                obj_for_hr2:obj_for_hr2,
                obj_for_hr3:obj_for_hr3,
                obj_for_hr4:obj_for_hr4,
                obj_for_hr5:obj_for_hr5,
                obj_for_hr6:obj_for_hr6,
                obj_for_hr7:obj_for_hr7
            }
    };

    return{
        type: "items",
        component: "accordion",
        items:{
            customSection: myCustomSection
        }
    };

});
