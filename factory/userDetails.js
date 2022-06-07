var userDetails=angular.module('app.userDetails',[])

userDetails.factory('details',function(){
    let user_details={}
    let values={}

    user_details.setValues=function(details){
                values=details
    }
    user_details.getValues=function(){
        return values
    }

    return user_details
})