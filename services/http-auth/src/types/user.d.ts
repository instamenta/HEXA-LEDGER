import {ObjectId} from "mongodb";


export interface IUserSchema {
    w: Buffer, // wallet
    n: Buffer, // name
    b: Buffer, // bio
    r: ObjectId, // role
    cpuid: Buffer, // clerkPublicId
    cprid: Buffer, // clerkPrivateId
    ban: boolean, // banned
    img: string, // image
    o: {         // ownerOf

    },
    rids: {     // referenceIds
        chat: Buffer, // chat service reference
        thread: Buffer, // chat service reference
        bounty: Buffer, // bounty service reference
        bcData: Buffer, // bcData service reference
        voter: Buffer, // voter service reference
        bounty: Buffer, // bounty service reference

    }
}