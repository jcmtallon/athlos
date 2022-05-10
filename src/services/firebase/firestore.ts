import { getFirestore, doc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore/lite'
import { app } from './firebaseSetup'

const firestore = getFirestore(app)

const getMark = async () => {
  const docuRef = doc(firestore, `marks/8iqoIVEDl19ex0iapI63`)

  const response = await getDoc(docuRef)
  const data = response.data()

  return data
}

const getAthlete = async () => {
  const docuRef = doc(firestore, `athletes/O8T5Aq0rqyBP21pymTWs`)

  const response = await getDoc(docuRef)
  const data = response.data()

  return data
}

const getAthletes = async () => {
  const colRef = collection(firestore, `athletes`)
  const querySnapshot = await getDocs(colRef)

  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`)
  })
}

const addMark = async () => {
  const colRef = collection(firestore, `marks`)
  const response = await addDoc(colRef, { value: 1234 })
  console.log(response)
}

export { getMark, getAthlete, addMark, getAthletes }
