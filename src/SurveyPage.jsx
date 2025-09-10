import Questions from "./components/Questions";
import NavButtons from "./components/NavButtons";
import inputs from "./inputs";
import React from "react";


export default function SurveyPage() {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [inputData, setInputData] = React.useState(inputs);

   function handleOnChange(event) {
        const {value, name} = event.currentTarget;
        event.currentTarget.type === "checkbox" ? 
        setInputData(prevInput => ({
  ...prevInput,
  [name]: {
    ...prevInput[name],
    [value]: !prevInput[name][value]
  }
}))   : setInputData(prevInput => ({
          ...prevInput,
          [name] : value}))
}

  function handleNext() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  function handlePrev() {
    setCurrentPage(prevPage => prevPage - 1);
  }

  function signUp(formData) {
        const data = Object.fromEntries(formData);
    }

  return (
    <main>
      <Questions page={currentPage} 
                  onSubmit={signUp}
                  handleOnChange={handleOnChange}
                  inputData={inputData}/>
      <NavButtons page={currentPage} pages={3} handlePrev={handlePrev} handleNext={handleNext} />
    </main>
  )
}