import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBy } from "../../stores/contacts/filtersSlice";
import { getStatusFilter } from "../../stores/contacts/selectors";
import FilterStyles from "./FilterStyles";

const Filter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const searchBy = useSelector(getStatusFilter);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchBy(value));
    onFilterChange(value);
  };

  return (
    <FilterStyles>
      <input
        type="text"
        value={searchBy}
        onChange={handleFilterChange}
        placeholder="Search..."
      />
    </FilterStyles>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
