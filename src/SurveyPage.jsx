import Questions from "./components/Questions";
import NavButtons from "./components/NavButtons";

export default function SurveyPage() {
  return (
    <main>
      <Questions page={2} />
      <NavButtons page={2} pages={2} />
    </main>
  )
}