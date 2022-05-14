import { doc, getDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'

// TODO: out of use?
const getAthlete = async () => {
  const docuRef = doc(firestore, `athletes/O8T5Aq0rqyBP21pymTWs`)

  const response = await getDoc(docuRef)
  const data = response.data()

  return data
}

export { getAthlete }
