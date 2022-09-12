import React from "react";
import { useState, useEffect } from "react";
import CardExperience from "./CardExperience";
const Experience = () => {
  const urlApi = "https://apimocha.com/stom83/api";
  const apiFetch = (url) => {
    fetch(url)
      .then((dataFile) => dataFile.json())
      .then((data) => updateDataApi(data))
      .catch((error) => console.log(error));
    };
    useEffect(() => {
      apiFetch(urlApi);
    }, []);
    const [dataApi, updateDataApi] = useState([]);
    return (
      <>
      {console.log(dataApi)}
      <h2>My work experience</h2>
      <div className='box-p'>
        {
          dataApi.map( dataExperience => (
            <CardExperience 
            key = {dataExperience.id}
            dataExperience = {dataExperience}
            />
            )
            )
          }
      </div>
    </>
  );
};
export default Experience;
