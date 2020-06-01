var express = require('express');
//These are for authentication *************************
var mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
// authentication ends here *****************************
mongoose.set( 'useUnifiedTopology', true );
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser',true )
mongoose.connect('mongodb://localhost/portal2');
mongoose.connection.on("error",( )=> {
    console.log("Error occured");
});
mongoose.connection.on("open",( )=> {
    console.log("Connected");
}); 
var app = express();
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';
//Configure our app
app.use(cors());
app.use('/images',express.static('images'))
app.use(express.static(path.join(__dirname, '/uploads')))
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


if(!isProduction) {
    app.use(errorHandler());
  }


  //Models & routes
require('./models/User');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}
  
  app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });

var port = 3001;

app.listen(port,()=>console.log("up and runing on port "+port));