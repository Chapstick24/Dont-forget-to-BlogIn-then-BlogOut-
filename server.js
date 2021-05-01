const routes = require("./controllers")
const sequelize = require("./config/connection")
const path = require('path')
const helpers = require('./utils/helper')
const express = require('express');
const exphbs  = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// ask teacher to explain in depth...
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.engine('handlebars', hbs.engine);
app.use(routes);

// turn on connection....... make sure you connect to MYSQL
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Im listening '));
});
