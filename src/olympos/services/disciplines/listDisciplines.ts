import { collection, getDocs } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Discipline } from '../../types'

const listDisciplines = async (): Promise<Discipline[]> => {
  const disciplinesRef = collection(firestore, `disciplines`)
  const docs = await getDocs(disciplinesRef)

  const disciplines: Discipline[] = []

  docs.forEach(doc => {
    const data = doc.data()
    disciplines.push({
      disciplineId: doc.id,
      eventId: data.event_ID,
      name: {
        en: data.name_en,
        es: data.name_es,
      },
    })
  })

  return disciplines
}

export { listDisciplines }
