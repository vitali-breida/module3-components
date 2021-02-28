import ResultsCount from "../../Components/ResultsCount/ResultsCount";
import ResultsFilter from "../../Components/ResultsFilter/ResultsFilter";
import ResultsSort from "../../Components/ResultsSort/ResultsSort";
import ResultsBody from "../ResultsBody/ResultsBody";
import Box from "@material-ui/core/Box";

export default function Body() {
  return (
    <>
      <Box display="flex">
        <Box width="50%">
          <ResultsFilter />
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          <ResultsSort />
        </Box>
      </Box>

      <ResultsCount />
      <ResultsBody />
    </>
  );
}
