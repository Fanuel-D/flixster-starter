import PropTypes from "prop-types";
function DropDown({ chooseFilter }) {
  return (
    <select name="" id="" defaultValue="sort" onChange={chooseFilter}>
      <option value="sort" disabled>
        Sort by
      </option>
      <option value="primary_release_date.desc">Release Descending</option>
      <option value="vote_average.desc">Vote Average Descending</option>
      <option value="popularity.desc">Popularity</option>
    </select>
  );
}

DropDown.propTypes = {
  chooseFilter: PropTypes.func,
};

export default DropDown;
