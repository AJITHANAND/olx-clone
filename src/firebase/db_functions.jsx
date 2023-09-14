import {  doc, setDoc, getDoc,getDocs } from "firebase/firestore";
import { locationsRef } from "./constants";


export async function addLocation(location) {
  const docRef = doc(locationsRef, location);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, { name: location });
    console.log("Location added!");
  } else {
    console.log("Location already exists!");
  }
}

export async function getLocations() {
  const locations = [];
  const querySnapshot = await getDocs(locationsRef);
  querySnapshot.forEach((doc) => {
    locations.push( { value: doc.data().name, label: doc.data().name});
  });
  console.log(locations)
  return locations;
}