import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function Search() {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box flexGrow={1}>
        <TextField fullWidth placeholder="What do want to watch?" />
      </Box>
      <Button>Search</Button>
    </Box>
  );
}
