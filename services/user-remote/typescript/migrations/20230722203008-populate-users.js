"use strict";
module.exports = {
    async up(db, client) {
        const defaultPicture = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png`;
        await db.collection('users').updateMany({
            $or: [
                { picture: { $exists: false } },
                { following: { $exists: false } },
                { followers: { $exists: false } },
                { comments: { $exists: false } }
            ]
        }, [
            {
                $set: {
                    picture: { $ifNull: ['$picture', defaultPicture] },
                    following: { $ifNull: ['$following', []] },
                    followers: { $ifNull: ['$followers', []] },
                    comments: { $ifNull: ['$comments', []] },
                }
            }
        ])
            .then((result) => console.log('MIGRATIONS SUCCESFULL: POPULATE USERS, TOTAL COUNT: ', result.modifiedCount, ' <-- UPDATED DOCUMENTS'))
            .catch((error) => console.log('MIGRATION FAILED: PUPULATE USERS, ERROR: ', error));
    },
    async down(db, client) {
    }
};
