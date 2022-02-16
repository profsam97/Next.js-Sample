///new-meetup/api 
import {MongoClient} from 'mongodb';
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body; 
        const client = await MongoClient.connect('mongodb+srv://samuel:TxxzfTXdwqJfCClt@cluster0.ic6ns.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const MeetupsCollections = db.collection('meetups');
        const result = await MeetupsCollections.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: 'Meetup Inserted'});
    }
}

export default handler;