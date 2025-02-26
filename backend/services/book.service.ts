import books from '../bookData'

export const getAllBooks = async () => {
  // simulate a delay
  const data = await new Promise(resolve => setTimeout(() => resolve(books), 500))

  return data
}