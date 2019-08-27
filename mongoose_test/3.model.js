const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});

mongoose.connection.once('open', function () {
    console.log('db connecting...');
});
const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]
});

const storySchema = Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Person'},
    title: String,
    fans: [{type: Schema.Types.ObjectId, ref: 'Person'}]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});

// author.save(function (err) {
//     if (err) return handleError(err);
//
//
//     const story1 = new Story({
//         title: 'Casino Royale',
//         author: author._id    // assign the _id from the person
//     });
//
//     author.stories.push(story1);
//     author.save(function (err) {
//         console.log(author);
//
//         story1.save(function (err) {
//             if (err) return handleError(err);
//             // thats it!
//             console.log('save success', story1);
//         });
//     });
//
//
//
// });

// Story
//     .findOne({title: 'Casino Royale'})
//     .populate('author')
//     .exec(function (err, story) {
//         if (err) return handleError(err);
//         console.log(story);
//         console.log('The author is %s', story.author.name);
//         // prints "The author is Ian Fleming"
//     });

// Story.findOne({ title: 'Casino Royale' }, function(error, story) {
//     if (error) {
//         return handleError(error);
//     }
//     story.author = author;
//     console.log('1: ',author, '2: ',story, '3: ', story.author.name); // prints "Ian Fleming"
// });

// Story.
// findOne({ title: /casino royale/i }).
// populate('author', 'name'). // 仅返回 Person 的'name'字段
// exec(function (err, story) {
//     if (err) return handleError(err);
//
//     console.log(story);
//
//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"
//
//     console.log('The authors age is %s', story.author.age);
//     // prints "The authors age is null'
// });

Person.
findOne({ name: 'Ian Fleming' }).
populate('stories'). // only works if we pushed refs to children
exec(function (err, person) {
    if (err) return handleError(err);
    console.log(person);
});