import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Filterbar = ({ isFilterOpen, handleRemoveItem, filterContainer, handleClear, myData }) => {
  // const { level, role, tools, language } = filterContainer;
  console.log(filterContainer);

  const removeTag = (id) => {
    handleRemoveItem(id);
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
              const { id, value } = item;

              return (
                <li className='tag-filter' key={id}>
                  <p className='filtered'>{value}</p>
                  <button className='close-btn' onClick={() => removeTag(id)}>
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
