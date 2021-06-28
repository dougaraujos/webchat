/**
 * IMPORTS
 */
import App from 'src/app';
import WebChat from 'src/app/webchat/';
import 'src/stylesheets';


// set application
const application = new App(WebChat);

// initialize application
application.start();
