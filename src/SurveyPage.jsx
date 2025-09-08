import Questions from "./components/Questions";
import NavButtons from "./components/NavButtons";
import inputs from "./inputs";
import React from "react";


export default function SurveyPage() {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [formData, setFormData] = React.useState(inputs);

  function handleNext() {
    setCurrentPage(prevPage => prevPage + 1);
    console.log(currentPage);
  }

  function handlePrev() {
    setCurrentPage(prevPage => prevPage - 1);
  }

  function signUp(formData) {
        const data = Object.fromEntries(formData);
        console.log(data);
    }

  return (
    <main>
      <Questions page={currentPage} onSubmit={signUp}/>
      <NavButtons page={currentPage} pages={3} handlePrev={handlePrev} handleNext={handleNext} />
    </main>
  )
}