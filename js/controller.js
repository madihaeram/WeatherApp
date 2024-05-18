angular.module('weatherApp')
    .controller('WeatherController', ['$scope', '$http', function($scope, $http) {
        
        $scope.getWeather = function() {
            var apiKey = 'YOUR_API_KEY'; // Replace with your API key
            var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + $scope.location + '&appid=' + apiKey + '&units=metric';

            // Get current weather
            $http.get(apiUrl)
                .then(function(response) {
                    $scope.weatherData = response.data;
                })
                .catch(function(error) {
                    console.log('Error fetching current weather:', error);
                });

            // Get weather forecast
            $http.get(apiUrl.replace('weather', 'forecast'))
                .then(function(response) {
                    $scope.forecastData = response.data.list;
                })
                .catch(function(error) {
                    console.log('Error fetching weather forecast:', error);
                });
        };

    }]);
