import { getFirestore, doc, getDoc, addDoc, collection, getDocs, Timestamp } from 'firebase/firestore/lite'
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

  const clubs: { [key: string]: any } = {}

  docs.forEach(doc => {
    const data = doc.data()
    clubs[doc.id] = { name: data.name, id: doc.id }
  })

  return clubs as Club[]
}

const getFederations = async () => {
  const federationRef = collection(firestore, `federations`)
  const docs = await getDocs(federationRef)

  const federation: { [key: string]: any } = {}

  docs.forEach(doc => {
    const data = doc.data()
    federation[doc.id] = { name: data.name }
  })

  return federation
}

const getAthletes = async () => {
  const athletesRef = collection(firestore, `athletes`)
  const docs = await getDocs(athletesRef)

  const athletes: any[] = []

  docs.forEach(doc => {
    const data = doc.data()
    athletes.push({
      id: doc.id,
      name: data.name,
      surnames: data.surnames,
      nationality: data.nationality,
      birth_place: data.birth_place,
      birth_date: data.birth_date.toDate().toISOString(),
      club: data.club,
      federation: data.federation,
      license_code: data.license_code,
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
