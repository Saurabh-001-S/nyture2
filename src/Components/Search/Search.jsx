import React, { useEffect, useState } from 'react'
import { recommendation } from "../../Data/ItemData";
import { ShopItem } from '../../Constant';
import { callNotification } from "../../Store/StoreCart/StoreCart";
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Constant/Modal/Modal';

const Search = () => {

  const data = useSelector((state) => state.allCart.item);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(data);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [passItem, setPassItem] = useState(null)

  const callModal = (modalItem) => {
    setShowModal(true);
    setPassItem(modalItem);
  };

  const seachQuery = (e) => {
    e.preventDefault();
    if (query === '') {
      dispatch(callNotification(4));
      return;
    } else {
      showProducts();
    }
  }

  const showProducts = () => {
    results.filter((item) => {
      return query.toLowerCase() === '' ?
        item
        : item.category.toLowerCase().includes(query)
          ? item.category.toLowerCase().includes(query) === null
          : item.name.toLowerCase().includes(query)
    })
  };
  useEffect(() => {
    showProducts();
  }, [query])

  const closeModal = () => {
    setShowModal(false);
    setPassItem(null);
  };

  return (
    <div className='search'>
      <div className="search_modal">
        {
          showModal && <Modal item={passItem} closeModal={closeModal} />
        }
      </div>
      <div className="search_box">
        <div className="search_bg">
          <form onSubmit={seachQuery}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="search_results">
        <div className='flex-col result_container'
          style={{ width: `${results.length === 0 ? "90vw" : ""}` }}>
          <h2>Search results</h2>
          {
            <ul className="result_ul">
              {results
                .filter((item) => {
                  return query.toLowerCase() === '' ?
                    item
                    : item.name.toLowerCase().includes(query);
                })
                .map((item) => (
                  <ShopItem key={item.id} item={item} callModal={callModal} />
                ))}
            </ul>
          }
        </div>
      </div>

    </div >
  )
}
export default Search