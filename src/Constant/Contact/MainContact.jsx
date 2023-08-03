import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { QuesContact } from "../../Constant/index";
import ContactData from "../../Data/Contact";

const MainContact = () => {
  const data = ContactData;
  const [toggleSection, setToggleSection] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const navigatetohelp = (quesId) => {
    setToggleSection(!toggleSection);
    setSelectedQuestionId(quesId);

    const rbots = document.querySelectorAll('.Rbottom_section');
    rbots.forEach((element) => {
      element.style.display = 'none';
    });
  }

  const navigateBack = () => {
    setToggleSection(false);
    setSelectedQuestionId(null);
    const rbots = document.querySelectorAll('.Rbottom_section');
    rbots.forEach((element) => {
      element.style.display = '';
    });
  };

  return (
    <div className="contact_right-bottom">
      <div className="contact_navigation" onClick={navigateBack}>
        {toggleSection ? "Help Center > Help with you" : "Help Center"}
      </div>
      <div className="Rbottom_heading" id='rbot'>
        {toggleSection ? "Frequently asked question" : " What issue are you facing"}
      </div>
      {
        data.mainQuestion.map((ques) => (
          <div className="Rbottom_section" key={ques.id}>
            <div className="section_text">
              <div className="section_text_primary"> {ques.question}</div>
              <div className="section_text_secondary"> {ques.des}</div>
            </div>
            <button type='button' onClick={() => navigatetohelp(ques.id)} style={{ width: "50px" }}  >
              <MdOutlineKeyboardArrowRight fontSize={30} />
            </button>
          </div>
        ))
      }
      {
        toggleSection &&
        selectedQuestionId &&
        data[selectedQuestionId].map((ques) => (
          <QuesContact key={ques.id} item={ques} navigateBack={navigateBack} />
        ))
      }
    </div >
  )
}

export default MainContact