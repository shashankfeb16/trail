import React from 'react'

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""
          width="100%"
        />
        <div>{bookData.book_name}</div>
        <div>{bookData.release_year}</div>
        <div>{bookData.category}</div>
      </div>
    </div>
  )
}

export default BookCard