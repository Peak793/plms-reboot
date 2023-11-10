/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Link, Box } from "@mui/material";
import SuggestedRule from "@/components/AddExercisePage/SuggestedRule";
import UserDefinedRule from "@/components/AddExercisePage/UserDefinedRule";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CategorySection = ({ kwCon, editable, onChange, title, category, ruleCategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rules = category == "suggested" ? kwCon.suggestedCon.value[ruleCategory] : kwCon.userDefinedCon.value[ruleCategory];

  useEffect(() => {
    if (rules.length !== 0) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [rules]);

  const handleChange = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  const handleAddingUserDefined = () => {

    // const isDuplicate = kwCon.userDefinedCon.value[ruleCategory].some((userRule) => userRule.keyword === rule.keyword);

    // // if (isDuplicate) {
    // //   // handle duplicate rule
    // //   alert(`A rule with the keyword "${rule.keyword}" already exists in the "${ruleCategory}" category.`);
    // //   return;
    // // }

    const newRule = {
      keyword: "",
      active: true,
      type: "eq",
      limit: null,
    };

    onChange((prev) => {
      console.log(prev)
      const newKwConList = { ...prev };
      newKwConList.userDefinedCon[ruleCategory] = [...prev.userDefinedCon[ruleCategory], newRule];
      return newKwConList;
    });
  }

  return (
    <Accordion expanded={isExpanded} onChange={handleChange} sx={{ borderRadius: "8px", overflow: "hidden" }} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ bgcolor: category === "user_defined" ? "var(--hover)" : "" }}
      >
        <Typography >{title} ({rules.length})</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: category === "user_defined" ? "var(--hover)" : "" }} >
        <Stack>
          <Stack spacing={1} >
            {category === "suggested" && rules.length !== 0 && rules?.map((rule, index) => (
              <SuggestedRule editable={editable} onAddingRule={onChange} kwCon={kwCon} key={index} ruleCategory={ruleCategory} ruleIndex={index} />
            ))}

            {category === "user_defined" && rules.length !== 0 && rules?.map((rule, index) => (
              <UserDefinedRule editable={editable} onChange={onChange} kwCon={kwCon} key={index} ruleCategory={ruleCategory} ruleIndex={index} />
            ))}

            {Object.keys(rules).length == 0 && <Typography paddingLeft={2} sx={{ color: "var(--frenchGray)" }} >No constraints added yet.</Typography>}
            {editable && category === "user_defined" && <Box paddingLeft={2} sx={{ marginLeft: "20px" }} >
              <Link onClick={handleAddingUserDefined} sx={{ cursor: "pointer" }} >Add new keyword constrain</Link>
            </Box>}
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}


export default CategorySection