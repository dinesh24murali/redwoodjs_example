import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const data = [
      { title: 'learn redwood', body: 'Redwood is a fullstack framework' },
    ]
    Promise.all(
      data.map(async (data) => {
        const record = await db.post.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
