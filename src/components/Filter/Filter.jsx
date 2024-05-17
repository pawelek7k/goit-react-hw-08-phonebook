import { useDispatch, useSelector } from "react-redux";
import { setSearchBy } from "../../stores/contacts/filtersSlice";
import { getFilters } from "../../stores/contacts/selectors";
import FilterStyles from "./FilterStyles";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchBy(value));
  };

  return (
    <FilterStyles>
      <input
        type="text"
        value={filters.searchBy}
        onChange={handleFilterChange}
        placeholder="Search..."
      />
    </FilterStyles>
  );
};

export default Filter;
