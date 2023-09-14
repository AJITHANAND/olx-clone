import {collection, getFirestore} from 'firebase/firestore';
import { Firebase } from './config';

export const db = getFirestore(Firebase);
export const userCollection = collection(db,'users');
export const productCollection = collection(db,'products');
export const locationsRef = collection(db, "locations");