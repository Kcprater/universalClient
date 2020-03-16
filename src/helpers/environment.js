let APIURL ='';

switch (window.location.universalapi) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http:localhost:3000/api';
    break;
    case 'kp-universalclient.herokuapp.com':

    APIURL ='https://kp-universalapi.herokuapp.com/ '
    
}

export default APIURL;