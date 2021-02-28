import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

let filters = ["All", "Documentary", "Comedy", "Horror", "Crime"];
export default function ResultsFilter() {
  return (
    <ButtonGroup>
      {filters.map((filter) => (
        <Button>{filter}</Button>
      ))}
    </ButtonGroup>
  );
}
