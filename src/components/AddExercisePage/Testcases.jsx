/* eslint-disable react/prop-types */
import { Stack, Typography, Button } from "@mui/material"
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Testcase from "@/components/AddExercisePage/Testcase"
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getExerciseTestcases } from "@/utils/api";
import { useEffect } from "react";

const Testcases = () => {
  const { exerciseId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['testcaseData', exerciseId],
    queryFn: () => getExerciseTestcases(exerciseId)
  })

  const methods = useForm({
    defaultValues: {
      testcases: []
    }
  });

  const { watch, reset, control } = methods
  const { fields: testcaseData, append, remove } = useFieldArray({
    control,
    name: "testcases"
  });

  useEffect(() => {
    if (!isLoading && data) {
      reset({ testcases: data })
    }
  }, [data, isLoading, reset])

  return (
    <Stack spacing={"20px"} sx={{
      padding: "20px",
      border: "1px solid #202739",
      borderRadius: "8px",
    }} >
      <Stack direction={"row"} justifyContent={"space-between"} >
        <Typography variant='h6' >Test case</Typography>
        <Stack direction={"row"} spacing={"10px"} >
          <Button variant='contained' size='medium' sx={{
            paddingX: "25px",
            borderRadius: "8px",
            bgcolor: "var(--cerulean )",
            textTransform: "none",
          }} >Run all testcases</Button>
          <Button variant='contained' size='medium' color="success" sx={{
            paddingX: "25px",
            borderRadius: "8px",
            textTransform: "none",
          }} >Submit</Button>
        </Stack>
      </Stack>

      {/* <Testcase /> */}

      <FormProvider {...methods} >
        {testcaseData.map((item, index) => <Testcase key={item.id} index={index} control={control} />)}
      </FormProvider>
    </Stack>
  )
}

export default Testcases