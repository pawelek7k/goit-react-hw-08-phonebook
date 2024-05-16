import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStatusFilter } from "../../stores/contacts/selectors";
import FilterStyles from "./FilterStyles";

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
    dispatch(getStatusFilter(value));
  };

  return (
    <FilterStyles>
      <input
        type="text"
        value={filter}
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
