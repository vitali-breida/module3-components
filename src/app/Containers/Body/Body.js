import ResultsCount from "../../Components/ResultsCount/ResultsCount";
import ResultsFilter from "../../Components/ResultsFilter/ResultsFilter";
import ResultsSort from "../../Components/ResultsSort/ResultsSort";
import ResultsBody from "../ResultsBody/ResultsBody";

export default function Body() {
  return (
    <>
      <ResultsFilter />
      <ResultsSort />
      <ResultsCount />
      <ResultsBody />
    </>
  );
}
