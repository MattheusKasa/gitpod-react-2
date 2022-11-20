import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        }
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return (
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            })
        }
        <hr />
        {
            books.map((book, index) => {
                return <Book key={index} book={book} />
            })
        }
    </div>
  )
}

export default RenderingLists


// When to use index as a key??

// 1. Use index only if no unique IDs are available
// 2. The list of elements youre rendering must be static
// 3. Your list must never be sorted or filtered


// How to get an unique key?

// 1. Derive one from list items properties
// 2. Use one of npms libraries, i.e. uuid, uuidv4, nanoid, etc


// Rendering lists in React 

// 1. Make sure every item has a unique key prop.
// 2. Dont use index in general, leades to issues when adding, removing or filtering items.





