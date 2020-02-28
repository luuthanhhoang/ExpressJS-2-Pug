var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5

var port = 3000;

var users = [
    { id: 1, name: 'Thinh' },
    { id: 2, name: 'Luu' },
    { id: 3, name: 'Tung' }
]

// var compliedFunction = pug.compileFile('include.pug');
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

app.get('/', (req, res) => {
    res.render('index', {
        name: 'HTL',
        tuoi: '18'
    });
})

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: users
    })
})

app.get('/users/search', (req, res) => {
    var q = req.query.q;
    var querySearch = users.filter((item) => {
        return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: querySearch
    })
})

app.get('/users/create', (req, res) =>{
    res.render('users/create')
})

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users')
})

app.listen(port, () => console.log('Server listening on port ' + port));

