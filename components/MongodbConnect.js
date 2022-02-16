 import { MongoClient } from 'mongodb';

 export const client = await MongoClient.connect('mongodb+srv://samuel:TxxzfTXdwqJfCClt@cluster0.ic6ns.mongodb.net/meetups?retryWrites=true&w=majority');
 const db = client.db();
 const MeetupsCollections = db.collection('meetups');
 export default MeetupsCollections;