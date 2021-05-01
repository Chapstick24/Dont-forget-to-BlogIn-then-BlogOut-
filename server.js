const routes = require("./controllers")
const sequelize = require("./config/connection")
const path = require('path')
const helpers = require('./utils/helpers')
const express = require('express');
const exphbs  = require('express-handlebars');
// const session = require('express-session'); must go before const SequelizeStore = require('connect-session-sequelize')(session.Store); or your code wont work... 
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 3001

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.engine('handlebars', hbs.engine);
app.use(routes);
app.set('view engine', 'handlebars');
// turn on connection....... make sure you connect to MYSQL
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Im listening '));
});

