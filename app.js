const 
  express = require('express'),
  app = express(),
  path = require('path');

app.use(function(req,res,next){
  console.log(req.method, req.path, res.statusCode);
  next();
});


app.get('/', function(req, res, next){
  res.send('Welcome');
});
















const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
