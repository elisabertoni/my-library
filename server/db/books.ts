import connection from './connection'
import { Book, BookCreate, BookUpdate } from '../../models/book'

export function getAllBooks( db = connection): Promise<Book[]> {
  return db('books').select('id', 'title', 'author')
}

export async function addBook(newBook: BookCreate, db = connection): Promise<Book[]> {
  await db('books').insert({...newBook})
  return getAllBooks()
}

export async function updateBook(bookId:number, updatedBook: BookUpdate, db = connection): Promise<Book[]> {
  await db('books').update(updatedBook).where('id', bookId )
  return getAllBooks()
}

export async function deleteBook(bookId:number, db = connection): Promise<Book[]> {
  await db('books').where('id', bookId).del()
  return getAllBooks()
}