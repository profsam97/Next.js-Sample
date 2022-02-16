import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"; 
import Head from 'next/head';
import { Fragment } from "react";
function Homepage(props){
    return (
        <Fragment>
        <Head>
            <title>Browse Meetup</title>
            <meta name ='Description' content="Browse a huge list of Reactive meetup" />
        </Head>
        <MeetupList meetups={props.meetups}/>
        </Fragment>
    )
}
//better if you have lot of incoming request and you need to connect with node.js/express
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEALS
//         }
//     }
// }
//better if data dont change alot
export async function getStaticProps() {
      const client = await MongoClient.connect('mongodb+srv://samuel:TxxzfTXdwqJfCClt@cluster0.ic6ns.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const MeetupsCollections = db.collection('meetups');
        const meetups = await MeetupsCollections.find().toArray();
        client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image
            }))
        },
        //revalidate allows us to re-render the initial props, when an incoming request is made
        revalidate: 5
    }
}
export default Homepage;