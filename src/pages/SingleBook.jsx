import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { getBooks } from "../redux/books/action";

const SingleBook = () => {
   const {id} = useParams();
   const {books} = useSelector((state)=>state.book);
   const dispatch = useDispatch();
   const[currentBook,SetCurrentBook] = useState({});

   useEffect(()=>{
      if(books.length==0){
        dispatch(getBooks());
      }
   },[books.length,dispatch])

   useEffect(()=>{
      if(id){
        const temp = books.find((book)=>book.id===Number(id));
         SetCurrentBook(temp)
      }
   },[books,id]);
   console.log(currentBook)
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <h3>{currentBook?.book_name}</h3>
        <h3>{currentBook?.category}</h3>
        <h3>{currentBook?.release_year}</h3>
        <button><Link to={`/books/${currentBook?.id}/edit`}>Edit</Link></button>
    </div>
  )
}

export default SingleBook