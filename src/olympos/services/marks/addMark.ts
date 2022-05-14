import { collection, addDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'

const addMark = async () => {
  const colRef = collection(firestore, `marks`)
  const response = await addDoc(colRef, { value: 1234 })
  console.log(response)
}

export { addMark }
