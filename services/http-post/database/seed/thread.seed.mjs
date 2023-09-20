import { faker } from '@faker-js/faker';
import { ObjectId, MongoClient, Collection, Db } from 'mongodb';
import 'dotenv/config';

(async function seeding() {
	/** @type {{c: Buffer, di: Buffer[], i: Buffer[], del: boolean, do: {date: number, amount: number, donator: Buffer}[], sample: boolean, n: Buffer, o: Buffer, p: {date: number, amount: number, promoter: Buffer}[], des: Buffer, t: Buffer[], up: number, li: Buffer[], ca: number}[]}*/
	const users = [];
	for ( let i = 0 ; i < faker.datatype.number({ min: 200, max: 300 }) ; i++ ) {
		users.push(createUser());
	}

	console.log('[Connecting to MongoClient]');
	/** @type {MongoClient} */
	const mongoClient = new MongoClient(process.env.DB_URI);

	console.log(`[Connecting to Database "${ process.env.DB_NAME }:]`);
	/** @type {Db} */
	const mongoDB = mongoClient.db(process.env.DB_NAME);

	console.log(`[Connecting to Collection "${ process.env.DB_THREADS_COLLECTION }"] `);
	/** @type {Collection<IThreadSchema>} */
	const threads_collection = mongoDB.collection(process.env.DB_THREADS_COLLECTION);

	let flag = true
	try {
		await threads_collection.insertMany(users)
			.then(res => console.log(`[Successfully seeded the database with -->] ${ res.insertedCount }`));
	} catch ( e ) {
		console.log('[Database seeded unsuccessfully]: ', e)
		flag = false
	} finally {
		flag ? process.exit(0) : process.exit(1);
	}
})()

/**
 *
 * @return {{c: Buffer, di: Buffer[], i: Buffer[], del: boolean, do: {date: number, amount: number, donator: Buffer}[], sample: boolean, n: Buffer, o: Buffer, p: {date: number, amount: number, promoter: Buffer}[], des: Buffer, t: Buffer[], up: number, li: Buffer[], ca: number}}
 */
export function createUser() {
	return {
		n: Buffer.from(faker.internet.userName()),
		des: Buffer.from(faker.string.sample({ min: 3, max: 120 })),
		c: Buffer.from(faker.string.sample({ min: 26, max: 360 })),
		i: _Images(faker.datatype.number({ min: 0, max: 50 })),
		ca: Math.floor(new Date().getTime() / 1000),
		up: Math.floor(new Date().getTime() / 1000),
		o: Buffer.from(new ObjectId().toString(), 'hex'),
		del: faker.datatype.number({ min: 5, max: 4000 }) < 0.9,
		p: _Promotions(faker.datatype.number({ min: 0, max: 50 })),
		do: _Donations(faker.datatype.number({ min: 0, max: 4 })),
		li: _ObjectIds(faker.datatype.number({ min: 0, max: 150 })),
		di: _ObjectIds(faker.datatype.number({ min: 0, max: 150 })),
		t: _Tags(faker.datatype.number({ min: 0, max: 150 })),
		sample: true,
	};
}

/**
 * @param {number} count
 * @return {Buffer[]}
 */
function _ObjectIds(count) {
	/** @type {Buffer[]} */
	const data = [];
	for ( let i = 0 ; i < count ; i++ ) {
		data.push(Buffer.from(new ObjectId().toString(), 'hex'))
	}
	return data;
}

/**
 * @param {number} count
 * @return {Buffer[]}
 */
function _Images(count) {
	/** @type {Buffer[]} */
	const data = [];
	for ( let i = 0 ; i < count ; i++ ) {
		data.push(Buffer.from(faker.image.url()));
	}
	return data;
}

/**
 * @param {number} count
 * @return {Buffer[]}
 */
function _Tags(count) {
	/** @type {Buffer[]} */
	const data = [];
	for ( let i = 0 ; i < count ; i++ ) {
		data.push(Buffer.from(faker.internet.emoji()));
	}
	return data;
}

/**
 * @param {number} count
 * @return {{date: number, amount: number, donator: Buffer}[]}
 */
function _Donations(count) {
	/** @type {{date: number, amount: number, donator: Buffer}[]} */
	const data = [];
	for ( let i = 0 ; i < count ; i++ ) {
		data.push({
			donator: Buffer.from(new ObjectId().toString(), 'hex'),
			amount: faker.datatype.number({ min: 5, max: 4000 }),
			date: Math.floor(new Date().getTime() / 1000),
		});
	}
	return data;
}

/**
 * @param {number} count
 * @return {{date: number, amount: number, promoter: Buffer}[]}
 */
function _Promotions(count) {
	/**
	 * @type {{date: number, amount: number, promoter: Buffer}[]}
	 */
	const data = [];
	for ( let i = 0 ; i < count ; i++ ) {
		data.push({
			amount: faker.datatype.number({ min: 5, max: 4000 }),
			promoter: Buffer.from(new ObjectId().toString(), 'hex'),
			date: Math.floor(new Date().getTime() / 1000),
		});
	}
	return data;
}

