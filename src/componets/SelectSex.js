import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectSex = ({ sex, setValues }) => {
  // const [sex, setSex] = useState("");

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sex</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sex}
        label="Sex"
        name="sex"
        onChange={handleChange}
      >
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSex;
