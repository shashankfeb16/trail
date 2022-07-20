import React, { useEffect } from 'react'
import BookCard from './BookCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/action';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (books.length == 0 || location.search) {
      const sortBy = searchParams.get("sortBy")
      const getBookParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: "release_year",
          _order: sortBy
        }
      }
      dispatch(getBooks(getBookParams))
    }
  }, [location.search])

  useEffect(() => {
    dispatch(getBooks)
  }, [])


  return (
    <>
      {books.map((singlebook) => {

        return <BookCardWrapper>
          <Link to={`/books/${singlebook.id}`}>
            <BookCard key={singlebook.id} bookData={singlebook}></BookCard>
          </Link>
        </BookCardWrapper>

      })}

    </>
  )
}

export default BookList;

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  padding: 5px;
  width: 310px
`