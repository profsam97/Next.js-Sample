import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head'
import MeetupDetails from '../../components/meetups/MeetupDetails'
function Meetup(props){
  return  (
    <>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name ='description' content={props.meetupData.description} />
    </Head>
    <MeetupDetails  title={props.meetupData.title}
        image = {props.meetupData.image}
        address = {props.meetupData.address}
        description=  {props.meetupData.description}/>
    </>
  ) 
}

export async function getStaticPaths(){
   const client = await MongoClient.connect('mongodb+srv://samuel:TxxzfTXdwqJfCClt@cluster0.ic6ns.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const MeetupsCollections = db.collection('meetups');
        const meetups = await MeetupsCollections.find({}, {_id: 1}).toArray();
        client.close()
  return {
    fallback: 'blocking',
    paths :  meetups.map(meetup =>({params: {meetupId: meetup._id.toString()},}))
  }
}
export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
  const client = await MongoClient.connect('mongodb+srv://samuel:TxxzfTXdwqJfCClt@cluster0.ic6ns.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetup = await meetupCollection.findOne({_id: ObjectId(meetupId), })
  client.close()
  return {
    props: {
      meetupData: {
        image : meetup.image,
        id: meetup._id.toString(),
        address: meetup.address,
        description: meetup.description,
        title : meetup.title
      }
    }
  }
}
export default Meetup;
