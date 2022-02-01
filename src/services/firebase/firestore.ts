import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { app } from './firebaseSetup'

const firestore = getFirestore(app)

const getDocument = async () => {
  const docuRef = doc(firestore, `marks/xH5jSxsA2p69HX5xkvPE`)

  const response = await getDoc(docuRef)
  const data = response.data()
  console.log(data)

  return response.data
}

export { getDocument }
