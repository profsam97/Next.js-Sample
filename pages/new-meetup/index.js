import { useRouter } from "next/router";
import Head from 'next/head'
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUp() {
  const router = useRouter();
 async function addMeetUpHandler(recieveData){
  try {
    const response = await fetch('/api/new-meetup', {
      body: JSON.stringify(recieveData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    });
    const data = await response.json();
        console.log(data);

    if(!response.ok){
      throw new Error(data.error.message);
    }
  } catch (error) {
      console.log(error.message);
  }  
    router.push('/');
   }
    return (
      <>
      <Head>
        <title>New Meetup</title>
        <meta description="Add your meetup and create amazing opportunities" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
      </>
    ) 
}
export default NewMeetUp;