const { MongoClient, ObjectId, Binary, } = require('mongodb');

(async () => {
	console.log('=================================')
	console.log('Connecting Db...');
	const col = new MongoClient('mongodb+srv://janoopsi:janoopsi9999@clickercluster.ltycehn.mongodb.net/?retryWrites=true&w=majority')
		.db('test').collection('test')
	console.log('Calling Query...')


	const d =  await col.insertOne({
		a: new Binary(Buffer.from('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'hex'), 0),
		u: new Binary(Buffer.from('test'), 0),
		p: new Binary(Buffer.from('asdijaijdsijsdijadsijdaidas'), 0),
	})
		.then((d) => {
			console.log(d)
			return d;
		});

	// const data = await col.findOne(
	// 	{ _id: new ObjectId(d.insertedId.toString()) }
	// ).then((d) => {
	// 	console.log(d)
	// 	console.log('=========================================')
	// 	console.log(`0x${d.a.buffer.toString()}`);
	// 	console.log({
	// 		id: d._id.toString(),
	// 		address: `0x${ d.a.buffer.toString('hex')}`,
	// 		username: d.u.buffer.toString(),
	// 		picture: d.p.buffer.toString(),
	// 	})
	// 	return (d)
	// }).catch(console.log)

	// console.log(data);

	console.log("Done!")
	console.log("Exiting ...")
	process.exit(0);
})()
