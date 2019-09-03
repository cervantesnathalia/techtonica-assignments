# Mongo DB  - Challenge



lt" was used earlier to filter out which documents you deleted. MongoDB's documentation has a page on [Operators](https://docs.mongodb.com/manual/reference/operator/query/). What type of operator is "$lt"?

**$lt - Matches values that are less than a specified value**

Operators can be used to filter what you want to include and what you want to exclude. For example, `db.classmated.find({"month": {$lt: 6}})` will output anyone born before July (if you set your_birthmonth "July" as 6; because January is 0 in DateTime). You will be testing some of it next.

Open up the MongoDB daemon and shell again, create a database named "filterData". Create a collection named "zoo". Create at least 3 documents in the following format: `{"type": "lion", "name": "Suzy", "age": 10}`. Look at MongoDB's Operator page and find at least one operator other than Comparison Operator (which $lt was), and then test it out in the zoo collection.

Create a database - name - "filterData"

```
use filterData
```

Create a collection named "zoo"

```
 db.zoo.insert( {"type": "lion", "name": "Suzy", "age": 10} );
```

Create at least 3 documents in the following format: `{"type": "lion", "name": "Suzy", "age": 10}`. 

```
db.zoo.insert( {"type": "lion", "name": "Suzy", "age": 10} );
db.zoo.insert( {"type": "cat", "name": "Mane", "age": 8} );
db.zoo.insert( {"type": "dog", "name": "fofo", "age": 16} );
```

Look at MongoDB's Operator page and find at least one operator other than Comparison Operator (which $lt was), and then test it out in the zoo collection.

```
 $and
 $ne
 
 db.zoo.find( { $and: [ { age: { $ne: 10 } }, { name: { $exists: true } } ] } )
```

![Screen Shot 2019-09-03 at 11.45.07 AM](/Users/naty/techtonica/techtonica-assignments/MongoDB/Screen Shot 2019-09-03 at 11.45.07 AM.png)

