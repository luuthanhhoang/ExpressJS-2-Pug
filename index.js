var express = require('express');
var app = express();
var pug = require('pug');

var port = 3000;

//  var compliedFunction = pug.compileFile('include.pug');
// console.log(compliedFunction({
//     name: 'HTL'
// }));

//  app.get('/', (request, response) => {
//     return response.send(compliedFunction({
//         name: 'HTL'
//     }));
//  })
app.set('view engine', 'pug')

app.set('views', './views')

app.get('/', (req, res) =>{
    res.render('index', {
        name: 'HTL',
        tuoi: '18'
    });
})

app.get('/users', (req, res) =>{
    res.render('users/index', {
    	users: [
            {id : 1, name: 'Thinh'},
            {id : 2, name: 'Luu'},
            {id : 3, name: 'Tung'}
        ]
    })
})

 app.listen(port, () => console.log('Server listening on port ' + port));

