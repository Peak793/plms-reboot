import UserDefinedRule from "./UserDefinedRule";
import PropTypes from 'prop-types';
import { Link, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { keywordConstraintsList } from "../store/store";
import SuggestedRule from "./SuggestedRule";

const CategorySection = ({ title, category, rules }) => {
  const [, setKwConList] = useAtom(keywordConstraintsList);

  const defaultRule = {
    active: false,
    keyword: "",
    type: "eq",
    limit: null,
  };

  const handleAddingRule = () => {
    setKwConList(prev => {
      const updatedCategory = [...(prev[category] || []), defaultRule];
      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  }

  return (
    <Stack spacing={"10px"} >
      <Typography sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }} >{title}:</Typography>
      {rules.length !== 0 ? (
        rules.map((rule, index) => category === "user_defined" ?
          <UserDefinedRule key={index} category={category} ruleIndex={index} /> :
          <SuggestedRule key={index} category={category} ruleIndex={index} />
        )
      ) : (
        <Typography color={"var(--raven)"} >No constraints added yet.</Typography>
      )}
      {category === "user_defined" && <Link sx={{ cursor: "pointer", width: "fit-content" }} onClick={handleAddingRule} >Add new keyword constraint</Link>}
    </Stack>
  )
}

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      keyword: PropTypes.string,
      type: PropTypes.string,
      limit: PropTypes.number,
      active: PropTypes.bool,
    })
  ),
};

export default CategorySection