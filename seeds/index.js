// const seedPosts = require('./post');
// const seedUsers = require('./user');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
   
  await seedUsers();
    console.log('\n dont with users\n');
  
  await seedPosts();
    console.log('\n done with postd\n');

  await seedComments();
    console.log('Done with comments ');

  process.exit(0);
};

seedAll();