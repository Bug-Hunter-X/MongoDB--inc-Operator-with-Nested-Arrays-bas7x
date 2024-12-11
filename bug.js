```javascript
// Incorrect usage of $inc operator for updating nested arrays
db.collection('products').updateOne({
  _id: ObjectId('6501234567890abcdef')
}, {
  $inc: {
    'sizes.S': 1 // This will not work as expected
  }
})
```