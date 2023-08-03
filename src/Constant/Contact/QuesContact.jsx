import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import './cont.css';
const QuesContact = ({ item }) => {
  const [toggleSection, setToggleSection] = useState(false);

  const navigate = () => {
    setToggleSection(!toggleSection);
  }
  return (
    <>
      <div className='Bottom_section' key={item.id}  >
        <div className={`section ${toggleSection ? "Bottom_section-bg" : ""}`}
          style={{ background: toggleSection ? 'var(--fade-col)' : '' }}>
          <div className="section_text">
            <div className="text_primary">{item.question}</div>
          </div>
          <button type="button" onClick={navigate} id='botn' >
            <MdOutlineKeyboardArrowRight fontSize={30} className="svg"
              style={{ transform: toggleSection ? 'rotate(270deg)' : 'rotate(0deg)' }} />
          </button>

        </div>
        {toggleSection && (
          <div className="section_toggle">
            <ul>
              {typeof item.des === 'string' ? (
                <li className="text_secondary" dangerouslySetInnerHTML={{ __html: item.des }}></li>
              ) : (
                Object.values(item.des).map((desItem, index) => (
                  <li className="text_secondary" key={index}>{desItem}</li>
                ))
              )}
            </ul>
          </div>
        )}
      </div >
    </>
  );
};
export default QuesContact;

