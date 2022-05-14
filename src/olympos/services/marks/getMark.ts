import { doc, getDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'

const getMark = async () => {
  const docuRef = doc(firestore, `marks/8iqoIVEDl19ex0iapI63`)

  const response = await getDoc(docuRef)
  const data = response.data()

  return data
}

export { getMark }
