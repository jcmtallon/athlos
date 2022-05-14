import { collection, getDocs } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Federation } from '../../types'

// TODO: Should this normalization happen in the olympos < > athlos middleware?
const getFederations = async () => {
  const federationRef = collection(firestore, `federations`)
  const docs = await getDocs(federationRef)

  const federations: { [key: string]: Federation } = {}

  docs.forEach(doc => {
    const data = doc.data()
    federations[doc.id] = { name: data.name, federationId: doc.id }
  })

  return federations
}

export { getFederations }
