import { useDispatch } from "react-redux";
import { setSearchBy } from "../../stores/contacts/filtersSlice";

import FilterStyles from "./FilterStyles";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchBy(value));
  };

  return (
    <FilterStyles>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Search..."
      />
    </FilterStyles>
  );
};

export default Filter;
