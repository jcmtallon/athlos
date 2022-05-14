import { collection, getDocs } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Athlete } from '../../types'

const listAthletes = async () => {
  const athletesRef = collection(firestore, `athletes`)
  const docs = await getDocs(athletesRef)

  const athletes: Athlete[] = []

  docs.forEach(doc => {
    const data = doc.data()
    athletes.push({
      athleteId: doc.id,
      name: data.name,
      surnames: data.surnames,
      nationality: data.nationality,
      birthPlace: data.birth_place,
      birthDate: data.birth_date.toDate().toISOString(),
      clubId: data.club,
      federationId: data.federation,
      licenseCode: data.license_code,
    })
  })

  return athletes
}

export { listAthletes }
