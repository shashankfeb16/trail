import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getBooks } from '../redux/books/action';

const FilterSort = () => {
  const dispatch = useDispatch();
  const [category,setCategory] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const [sortBy,setSortBy] = useState("")

  const handleCheckbox = (e)=>{
    const option = e.target.value;
    let newcategory = [...category];
    if(category.includes(option)){
      newcategory.splice(newcategory.indexOf(option),1)
    }
    else{
      newcategory.push(option)
    }
    setCategory(newcategory)
  }

  const handleSort = (e)=>{
    setSortBy(e.target.value)
  }
 
  useEffect(()=>{
    if(category){
      setSearchParams({category:category});
      // dispatch(getBooks({params:{category}}))
      
    }
  },[category,setSearchParams])

  useEffect(()=>{
    if(sortBy){
      const params = {
        category: searchParams.getAll("category"),
        sortBy
      }
      // const getBookParams={
      //  params:{
      //   category: searchParams.getAll("category"),
      //   _sort: "release_year",
      //   _order: sortBy
      //  }
      // }
      setSearchParams(params)
      // dispatch(getBooks(getBookParams));
    }
  },[sortBy,setSearchParams])

  console.log(sortBy);
  return (
    <div>
        <h3>Filter</h3>
        <div>
            <div>
              <input type="checkbox" value="Novel" defaultChecked={category.includes("Novel")} onChange={handleCheckbox} />
              <label >Novel</label>
            </div>
            <div>
              <input type="checkbox" value="Science_Fiction" defaultChecked={category.includes("Science_Fiction")} onChange={handleCheckbox} />
              <label >Science Fiction</label>
            </div>
            <div>
              <input type="checkbox" value="Motivational" defaultChecked={category.includes("Motivational")} onChange={handleCheckbox} />
              <label >Motivational</label>
            </div>
            <div>
              <input type="checkbox" value="Thriller" defaultChecked={category.includes("Thriller")} onChange={handleCheckbox}/>
              <label >Thriller</label>
            </div>
        </div>
        <h3>Sort</h3>
        <div onChange={handleSort}>
            <input type="radio" value="asc" name='sortBy' defaultChecked={sortBy==="asc"}/>Ascending
            <input type="radio" value="desc" name='sortBy' defaultChecked={sortBy==="desc"}/>Descending
        </div>
    </div>
  )
}

export default FilterSort