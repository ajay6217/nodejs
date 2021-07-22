show db
use ajaykart
show collections
db.anotherCollection.insertOne({a:65})
db.items.insertOne({
    name:
    "samsung",price:12,rating:4.5,qty:233,
    sold:7567
})
db.items.insertMany([{
    name:
    "moto",price:1452,rating:40.5,qty:2433,
    sold:7567
},{name:
"tea",price:122,rating:1.5,qty:2343,
sold:7567}])
//searching
db.items.find({rating:4.5})
db.items.find({rating:{$gte:3}})
db.items.find({rating:{$gte:3},price:{$gte:11}})
db.items.find({$or:[{rating:{$gte:3}},{price:{$gte:11}}]})
//deleting
db.items.deleteOne({price:12})
db.items.deleteMany({price:12})

db.items.updateOne({name:"samsung"},{$set:{price:1000}})
db.items.updateMany({name:"samsung"},{$set:{price:1000}})