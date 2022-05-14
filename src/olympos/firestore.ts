import { getFirestore, doc, getDoc, addDoc, collection } from 'firebase/firestore/lite'
import { app } from './firebaseSetup'

const firestore = getFirestore(app)

const addMark = async () => {
  const colRef = collection(firestore, `marks`)
  const response = await addDoc(colRef, { value: 1234 })
  console.log(response)
}

export { addMark }
