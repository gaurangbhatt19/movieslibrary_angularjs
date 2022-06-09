var library = angular.module("app.library",['ngRoute','app.userDetails']).factory('movies_api',async function(){
    var movies_value={};
    var movies=[]
            // const API_KEY="9ef2e3f26cdd29068b7de1316c112cac"
            // const base_url="https://api.themoviedb.org/3/discover/movie"
            // let url=`${base_url}?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false`
            // console.log(url)
            // let value=await fetch(url)
            // let json=await value.json()
            // console.log(json.results)
            // movies=json.results

    // movies_value.setValue=function(details){
    //     movies=details
    // }

    movies_value.getValue=function(){
        return movies
    }
    return movies_value
})

premium.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/library",{
        templateUrl:"./views/library/library.html",
        controller:"libraryCtrl",
        resolve: {
            movies_list: async function(){
                console.log("resolve")
                const API_KEY="9ef2e3f26cdd29068b7de1316c112cac"
                const base_url="https://api.themoviedb.org/3/discover/movie"
                let url=`${base_url}?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false`
                console.log(url)
                let value=await fetch(url)
                let json=await value.json()
                console.log(json.results)
                return json.results
        }
    }
    })
}])

library.controller("libraryCtrl",["$scope",'details','$location','$mdDialog','movies_list',function($scope,details,$location,$mdDialog,movies_list){
   
    $scope.init=async function(){
        let values=details.getValues()
        console.log("init")
        if(!values.isLogin){
            $location.path("/login")
        }else{
            $scope.movies_library = movies_list
            console.log($scope.movies_library)
        }   
    }

    

    $scope.isLogin=function(ev){
        let values=details.getValues()
        if(!values.isPremium){
        $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#main_container')))
              .clickOutsideToClose(true)
              .title('Premium Content')
              .textContent('You are not a premium member')
              .ariaLabel('No Login')
              .ok('Done')
              .targetEvent(ev)
          );
        }

       




    }
   
}])