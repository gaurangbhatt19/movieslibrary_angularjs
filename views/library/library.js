var library = angular.module("app.library",['ngRoute','app.userDetails']).factory('movies',function(){
    var movies_value={};
    var movies=[]
    movies_value.setValue=function(details){
        movies=details
    }

    movies_value.getValue=function(){
        return movies
    }
    return movies_value
})

premium.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/library",{
        templateUrl:"./views/library/library.html",
        controller:"libraryCtrl"
    })
}])

library.controller("libraryCtrl",["$scope",'details','$location','movies',function($scope,details,$location,movies){
    $scope.init=function(){
        let values=details.getValues()
        // if(!values.isLogin){
        //     $location.path("/login")
        // }else{
            const API_KEY="9ef2e3f26cdd29068b7de1316c112cac"
            const base_url="https://api.themoviedb.org/3/discover/movie"
            let url=`${base_url}?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false`
            console.log(url)
            fetch(url).then((value)=>{
                let json=value.json()
                return json
            }).then((response)=>{
                console.log(response.results)
                movies.setValue(response.results)
            })

        // }
    }

    $scope.movies_library = movies.getValue()
    console.log($scope.movies_library)
   
}])