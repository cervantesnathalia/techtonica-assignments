# Data Modeling

## Intro to Databases

- How to model your data in the database

  Using Entity Relationship Diagrams (ERD)

   It’s a visual way of looking at your database structure. Each table translates into an entity. And your columns in each table are listed as attributes in their respective entity. Finally, the programmed connections between your tables are visualized through relationship lines.

  

- How to set up and use a database

  A good method is to split your data up into smaller tables that have a narrower focus. These tables organize your data in a more efficient way and come together via relationships to form a database. And a database management system is the software that handles the storage, retrieval, and updating of that database.

  

- How to query data from a database

  The ERD import feature uploads all  database tables and schemas directly to the Toolbox. Drag related table onto the canvas and Lucidchart draws relationship lines automatically. 

  https://lucidchart.zendesk.com/hc/en-us/articles/207299756-Entity-Relationship-Diagrams#collapseEight

- How to connect a database to Node/Express to make an app that can store data

  Installing mongoose, to connect to the database in the app.js file. MongoDB, by default, runs on port 27017. Connect to the database by telling it the location of the database and the name of the database.

  In the app.js file after the line for the port and before the app.use line, enter the  two lines to get access to mongoose and to connect to the database. For the database, use “node-demo”.

  ```
  var mongoose = require("mongoose");mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");
  ```

  https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/

### Independent practice

1. Write down an example of when you could use a database (other than the examples given in this lesson)

   I could use database to Create an software to manage an System for Hostel , with each guests, dorms and cleaning for the Hostel. 

   

2. Write down 1-3 things you learned from the video

   That we can use Diagrams to organize better our thoughts.

   I learned how to connect the Attributes and entities.

3. Write down 3 questions you have about databases

   How can we save this information and connects to the system to transform the diagrams to objects.

   