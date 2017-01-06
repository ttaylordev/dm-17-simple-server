const express = require('express');
const bp = require('body-parser');


const app = express();

// dummy data
var customers = [
  {id:1, first: 'Scott', last: 'Gourley'},
  {id:2, first: 'Doug', last: 'Maxfield'},
  {id:3, first: 'Tom', last: 'Pridham'}
];



app.use(bp.json());
app.use(express.static(__dirname + '/dist'));

app.get('/api/customers', function(req, res) {
  res.status(200).json(customers);
});

app.post('/api/customers', function(req, res){
  customers.push(req.body);
  res.status(200).json('success');
});

app.put('/api/customers/:id', function(req, res){
  console.log(req.params.id);
  for(var i = 0; i < customers.length; i++){
    if(customers[i].id == req.params.id){
      customers[i].first = req.body.first;
      customers[i].last = req.body.last;
      console.log(customers[i]);
    }
  }
  res.status(200).json('updated');
});

app.delete('/api/customers/:id', function(req, res){
  customers.forEach(function(val, i , arr){
    if(val.id == req.params.id){
      arr.splice(i, 1);
    }
  })
  res.status(200).json('deleted');
});


const port = 4000
app.listen(port, function(){
  console.log(`listening on port ${port}`);
})