const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");


const pages = [
    { route: '/', title: 'Home', content: 'Welcome to the homepage!' },
    { route: '/about', title: 'About', content: 'Learn more about us.' },
    { route: '/contact', title: 'Contact', content: 'Get in touch with us.' }
  ];
  
  
  app.get('/', (req, res) => {
    res.render('home', { page: pages[0] });
  });
  
  app.get('/about', (req, res) => {
    res.render('about', { page: pages[1] });
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact', { page: pages[2] });
  });
  

  app.listen(port, () => {
    console.log('Server is running on port', port);
  }); 