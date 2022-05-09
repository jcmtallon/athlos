import { getFirestore, doc, getDoc } from 'firebase/firestore'
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

export { getMark, getAthlete }
