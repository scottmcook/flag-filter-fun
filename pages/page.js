import React, { useEffect, useState } from 'react';
import firebase from '../database/firebase';
import { collection, getDocs, querySnapshot } from 'firebase/firestore';
import { getDatabase, ref, child, get } from 'firebase/database';
import { db } from '../database/firebase';

const Page = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const snapshot = await firebase.database().ref(db).once('value');
  //       const newData = snapshot.val();
  //       setData(newData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
	

	useEffect(() => {
		const dbRef = ref(getDatabase());
		get((dbRef)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
        const newData = snapshot.val();
        setData(newData);
			} else {
				console.log("No data available");
			}
		}).catch((error) => {
			console.error(error);
		});
	}, [])

  return (
    <div>
      <h1>Your Next.js App with Firebase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
