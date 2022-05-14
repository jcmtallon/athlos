import { getFirestore, doc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore/lite'
import { Athlete, Club, Federation } from 'types'
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

const getAthletes = async () => {
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

const addMark = async () => {
  const colRef = collection(firestore, `marks`)
  const response = await addDoc(colRef, { value: 1234 })
  console.log(response)
}

export { getMark, getAthlete, addMark, getAthletes, getClubs, getFederations }
