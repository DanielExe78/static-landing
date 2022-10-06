import React, { useEffect, useState } from "react";
import myData from "../data.json";
import Filterbar from "./Filterbar";
import { v4 as uuidv4 } from "uuid";

const setLang = new Set(
  myData.reduce((item, index) => [...item, ...index.languages], [])
);

const setTools = new Set(
  myData.reduce((item, index) => [...item, ...index.tools], [])
);

const Hero = () => {
  const [isFilterOpen, setFilter] = useState(false);
  const [filterContainer, setFilterContainer] = useState([
    {
      id: uuidv4(),
      level: "",
      role: "",
      tools: [],
      language: [],
    },
  ]);

  const handleClick = (e) => {
    setFilter(true);
    const val = e.target.textContent;

    const language = Array.from(setLang)
      .map((item) => item)
      .filter((item) => item === val);

    const tool = Array.from(setTools)
      .map((item) => item)
      .filter((item) => item === val);

    setFilterContainer((prevVal) => {
      const newTools = [...tool];
      const newLanguage = [...language];
      return [
        {
          ...prevVal,
          id: uuidv4(),
          [e.target.name]: val,
          tools: newTools,
          language: newLanguage,
        },
      ];
    });
  };

  const handleClear = () => {
    setFilter(false);
    setFilterContainer([
      {
        level: "",
        role: "",
        // tools: [],
        // language: [],
      },
    ]);
  };

  return (
    <section className='section-center '>
      <Filterbar
        isFilterOpen={isFilterOpen}
        myData={myData}
        filterContainer={filterContainer}
        handleClear={handleClear}
      />
      {myData.map((item) => {
        const {
          id,
          company,
          logo,
          position,
          role,
          level,
          location,
          new: recently,
          featured,
          languages,
          tools,
          contract,
          postedAt,
        } = item;

        return (
          <div
            className={`single-card row ${
              company === "Photosnap" || company === "Manage" ? "side" : null
            }`}
            key={id}
          >
            <div className='info-container'>
              <div className='img-container'>
                <img src={logo} alt={company} />
              </div>

              <article className='general-info '>
                <div className='company'>
                  <p>{company}</p>
                  {recently && <span className='new'>NEW!</span>}
                  {featured && <span className='featured'>FEATURED</span>}
                </div>

                <h3>{position}</h3>

                <div className='sub-info'>
                  <span>{postedAt}</span>
                  <span className='bullet'>{contract}</span>
                  <span className='bullet'>{location}</span>
                </div>
              </article>
            </div>

            <div className='tags'>
              <ul>
                <li className='tag'>
                  <button
                    type='button'
                    className='btn'
                    onClick={handleClick}
                    name='role'
                  >
                    {role}
                  </button>
                </li>
                <li className='tag'>
                  <button
                    type='button'
                    className='btn'
                    onClick={handleClick}
                    name='level'
                  >
                    {level}
                  </button>
                </li>

                {tools.map((tool, index) => {
                  return (
                    <li className='tag' key={index}>
                      <button
                        type='button'
                        className='btn'
                        onClick={handleClick}
                      >
                        {tool}
                      </button>
                    </li>
                  );
                })}

                {languages.map((tool, index) => {
                  return (
                    <li className='tag' key={index}>
                      <button
                        type='button'
                        className='btn'
                        onClick={handleClick}
                      >
                        {tool}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
