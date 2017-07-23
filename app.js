const 
  express = require('express');
  app = express();


app.get('/', function(req, res, next){
  res.send('Welcome');
});


















const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
