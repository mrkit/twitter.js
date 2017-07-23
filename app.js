const 
  express = require('express'),
  app = express(),
  nunjucks = require('nunjucks'),
  path = require('path'),
  routes = require('./routes');
  
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(function(req,res,next){
  console.log(req.method, req.path, res.statusCode);
  next();
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', people, function(err, output){
  if(err) return console.log(err);
  console.log(output);
});

app.use('/', routes);


const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
