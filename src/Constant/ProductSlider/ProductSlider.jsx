import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ShopItem } from "../index";
import './productSlider.css';
import Modal from '../../Constant/Modal/Modal';

const ProductSlider = ({ items }) => {
  const productContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(-1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const containerWidth = productContainerRef.current.offsetWidth;
      const shopItemWidth = 250;
      const newItemsPerPage = Math.floor(containerWidth / shopItemWidth);
      setItemsPerPage(newItemsPerPage);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const nextSlide = () => {
    const container = productContainerRef.current;
    const step = container.offsetWidth / itemsPerPage;
    const start = container.scrollLeft;
    const end = start + step;
    const gap = 10 * itemsPerPage;
    smoothScroll(container, start, end + gap, 500);
    setCurrentIndex(Math.min(currentIndex + 1, items.length - 1));
  };

  const prevSlide = () => {
    const container = productContainerRef.current;
    const step = container.offsetWidth / itemsPerPage;
    const start = container.scrollLeft;
    const end = start - step;
    smoothScroll(container, start, end, 500);
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const smoothScroll = (element, start, end, duration) => {
    const startTime = performance.now();
    const scroll = () => {
      const currentTime = performance.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      element.scrollLeft = start + (end - start) * easedProgress;
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };

  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  const [showModal, setShowModal] = useState(false);
  const [passItem, setPassItem] = useState(null)

  const callModal = (modalItem) => {
    setShowModal(true);
    setPassItem(modalItem);
  };

  const closeModal = () => {
    setShowModal(false);
    setPassItem(null);
  };
  return (
    <div className="product">
      <div className="shopItem_modal">
        {
          showModal && <Modal item={passItem} closeModal={closeModal} />
        }
      </div>
      <MdOutlineKeyboardArrowLeft className='pre-btn' onClick={prevSlide} />
      <MdOutlineKeyboardArrowRight className='nxt-btn' onClick={nextSlide} />
      <ul className="product-container" ref={productContainerRef}>
        {items.map((item) => (
          <ShopItem key={item.id} item={item} callModal={callModal} />
        ))}
      </ul>
    </div>
  );
};

export default ProductSlider;