import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Filterbar = ({ isFilterOpen, filterContainer, handleClear, myData }) => {
  // const { level, role, tools, language } = filterContainer;
  console.log(filterContainer);

  const removeTag = (e) => {
    console.log(e.target.previousElementSibling);
  };

  if (isFilterOpen)
    return (
      <article
        className={`filter-container ${
          isFilterOpen ? "filter-active" : "filter-unactive "
        }`}
      >
        <div className='text-btn'>
          <ul className='filter-list'>
            {filterContainer.map((item) => {
              const { id, level, tools, languages, role } = item;

              return (
                <li className='tag-filter' key={id}>
                  <p className='filtered'>{level}</p>
                  <button className='close-btn' onClick={removeTag}>
                    <AiOutlineClose />
                  </button>
                </li>
              );
            })}

            {/* {level && (
              <li className='tag-filter'>
                <p className='filtered'>{level}</p>
                <button className='close-btn' onClick={removeTag}>
                  <AiOutlineClose />
                </button>
              </li>
            )}

            {role && (
              <li className='tag-filter'>
                <p className='filtered'>{role}</p>
                <button className='close-btn' onClick={removeTag}>
                  <AiOutlineClose />
                </button>
              </li>
            )}

            {tools && (
              <li className='tag-filter'>
                <p className='filtered'>{tools}</p>
                <button className='close-btn' onClick={removeTag}>
                  <AiOutlineClose />
                </button>
              </li>
            )}

            {language && (
              <li className='tag-filter'>
                <p className='filtered'>{language}</p>
                <button className='close-btn' onClick={removeTag}>
                  <AiOutlineClose />
                </button>
              </li>
            )} */}
          </ul>
        </div>
        <button className='clear' onClick={handleClear}>
          Clear
        </button>
      </article>
    );
};

export default Filterbar;
