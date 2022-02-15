import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { app } from './firebaseSetup'

const firestore = getFirestore(app)

const getMark = async () => {
  const docuRef = doc(firestore, `marks/xH5jSxsA2p69HX5xkvPE`)

  const response = await getDoc(docuRef)
  const data = response.data()

  return data
}

const getAthlete = async () => {
  const docuRef = doc(firestore, `athletes/XH93p7kZ0ycTeSmsaS7R`)

  const response = await getDoc(docuRef)
  const data = response.data()

  return data
}

export { getMark, getAthlete }
