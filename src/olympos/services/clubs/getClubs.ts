import { collection, getDocs } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Club } from '../../types'

// TODO: Should this normalization happen in the olympos < > athlos middleware?
const getClubs = async () => {
  const clubsRef = collection(firestore, `clubs`)
  const docs = await getDocs(clubsRef)

  const clubs: { [key: string]: Club } = {}

  docs.forEach(doc => {
    const data = doc.data()
    clubs[doc.id] = { name: data.name, clubId: doc.id }
  })

  return clubs
}

export { getClubs }
