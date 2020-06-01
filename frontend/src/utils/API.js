import axios from 'axios';
import promise from 'promise';

// Add a request interceptor 
var axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
});

axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent 
  //If the header does not contain the token and the url not public, redirect to login  
  
  //if token is found add it to the header

  if(isUrlInterceptable(config.url)){
      return config;
  }
  var accessToken = getAccessTokenFromCookies();
  
  if (accessToken) {
    if (config.method !== 'OPTIONS') {
          config.headers.authorization = 'Token '+accessToken;
        }
  }else{
         window.location = '/login';
  }
  return config;
}, function (error) {
   // Do something with request error 
   return promise.reject(error);
});
var isUrlInterceptable = function(url){
    return url.includes('login') || url.includes('signup');
}
var getAccessTokenFromCookies = function(){
    var user =JSON.parse(localStorage.getItem('user'));
    if(user){
        return user.token;
    }
    return '';
}

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        localStorage.removeItem('user');
        window.location = '/login';
    } else {
        return Promise.reject(error);
    }
});
export default axiosInstance;