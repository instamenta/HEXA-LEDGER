const { Binary, MongoClient } = require('mongodb');

(() => {
	const col = new MongoClient('mongodb+srv://janoopsi:janoopsi9999@clickercluster.ltycehn.mongodb.net/?retryWrites=true&w=majority')
		.db('test')
		.collection('test')


	col.insertOne({
		a: new Binary(Buffer.from('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'hex'), 0),
		u: new Binary(Buffer.from('test'), 0),
		p: new Binary(Buffer.from('asdijaijdsijsdijadsijdaidas'), 0),
	})
		.then(console.log)
})()
