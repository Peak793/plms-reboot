/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Link, Box } from "@mui/material";
import { useAtom } from "jotai";
import { suggestedConstraints, userDefinedConstraints } from "@/store/store";
import SuggestedRule from "@/components/AddExercisePage/SuggestedRule";
import UserDefinedRule from "@/components/AddExercisePage/UserDefinedRule";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CategorySection = ({ title, category, ruleCategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggeted, setSuggeted] = useAtom(suggestedConstraints);
  const [userDefined, setUserDefined] = useAtom(userDefinedConstraints);
  const rules = category == "suggested" ? suggeted[ruleCategory] : userDefined[ruleCategory];

  useEffect(() => {
    if (rules.length !== 0) {
      setIsExpanded(true);
    }
  }, [rules]);

  const handleChange = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  const handleAddingUserDefined = () => {
    // const isDuplicate = userDefined[ruleCategory].some((userRule) => userRule.keyword === rule.keyword);

    // if (isDuplicate) {
    //   // handle duplicate rule
    //   alert(`A rule with the keyword "${rule.keyword}" already exists in the "${ruleCategory}" category.`);
    //   return;
    // }

    const newRule = {
      keyword: "",
      active: true,
      type: "eq",
      limit: null,
    };

    setUserDefined((prev) => {
      const newKwConList = {
        ...prev,
        [ruleCategory]: [...prev[ruleCategory], newRule],
      };
      return newKwConList;
    });
  }

  return (
    <Accordion expanded={isExpanded} onChange={handleChange} sx={{ borderRadius: "8px", overflow: "hidden" }} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography >{title} ({rules.length})</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <Stack spacing={1} >
            {category === "suggested" && rules.length !== 0 && rules?.map((rule, index) => (
              <SuggestedRule key={index} ruleCategory={ruleCategory} ruleIndex={index} />
            ))}

            {category === "user_defined" && rules.length !== 0 && rules?.map((rule, index) => (
              <UserDefinedRule key={index} ruleCategory={ruleCategory} ruleIndex={index} />
            ))}

            {Object.keys(rules).length == 0 && <Typography paddingLeft={2} sx={{ color: "var(--frenchGray)" }} >No constraints added yet.</Typography>}
            {category === "user_defined" && <Box paddingLeft={2} sx={{ marginLeft: "20px" }} >
              <Link onClick={handleAddingUserDefined} sx={{ cursor: "pointer" }} >Add new keyword constrain</Link>
            </Box>}
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}


export default CategorySection