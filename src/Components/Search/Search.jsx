import React, { useState } from 'react'
import './search.css'
import Data from "../../Data/ItemData";
import { ShopItem } from '../../Constant';
import { callNotification } from "../../Store/StoreCart/StoreCart";
import { useDispatch } from 'react-redux';

const Search = () => {

  const [head, setHead] = useState("Recommended")
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(Data.recommendation);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      dispatch(callNotification(4))
      return;
    }
    else {
      const categoryResults = Data[searchQuery];
      if (categoryResults) {
        const results = categoryResults;
        setSearchResults(results);
        setHead("Search Result");
      } else {
        setSearchResults([]);
        setHead("Search Result");
      }
    }
    setSearchQuery('');
  };

  const category = [
    {
      value: "singlesofa",
      title: "Single sofa"
    },
    {
      value: "sofa",
      title: "Double sofa"
    },
    {
      value: "stool",
      title: "Stool"
    },
    {
      value: "chair",
      title: "Chair"
    },
  ]

  return (
    <div className='search'>

      <div className="search_box">
        <div className="search_bg">
          <form onSubmit={handleSearch}>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className='search_btn' >Search</button>
          </form>
        </div>

        <div className="search_category">
          <h2>Related Categories</h2>
          <ul className='search-text'>
            {category.map((item, i) => (
              <li key={i}>
                <button key={item.value} className="search-text-btn"
                  onClick={(e) => { setSearchQuery(item.value); }}
                  style={{ margin: "1rem" }}>{item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="search_results">
        <div className='flex-col result_container'
          style={{ width: `${searchResults.length === 0 ? "90vw" : ""}` }}>
          <h2>{head}</h2>
          {searchResults.length !== 0 ?
            (
              <ul className="search_result_item_container">
                {searchResults.map((item, i) => (
                  <ShopItem key={i} item={item} />
                ))}
              </ul>
            ) : (
              <h3>Not Found!</h3>
            )
          }
        </div>
      </div>

    </div >
  )
}
export default Search