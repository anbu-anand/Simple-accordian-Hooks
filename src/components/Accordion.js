import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveindex] = useState(null);
  const onTitleClick = (index) => {
    setActiveindex(index);
  };
  const rendereredList = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{rendereredList}</div>;
};

export default Accordion;
