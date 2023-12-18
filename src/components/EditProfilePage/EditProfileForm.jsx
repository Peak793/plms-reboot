/* eslint-disable react/prop-types */
import { Box, Grid, Stack, TextField, Button } from "@mui/material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "@/utils/api";
import { getAllDepartment } from "@/utils/api";
import PersonalInfoForm from "@/components/EditProfilePage/PersonalInfoForm";
import ContactForm from "./ContactForm";
import ResetPasswordForm from "./ResetPasswordForm";

const defaultValue = {
  "avatar": "",
  "firstname": "",
  "lastName": "",
  "nickname": "",
  "dob": null,
  "gender": "",
  "department": "",
  "email": "",
  "tel": "",
}

const EditProfileForm = ({ formData = defaultValue, userId }) => {
  const queryClient = useQueryClient()
  const { mutateAsync: mutateProfile } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      reset(formData);
      queryClient.invalidateQueries(['profileFormData', userId])
    }
  })
  const methods = useForm({
    defaultValues: {
      ...formData,
      ["new_password"]: "",
      ["confirm_password"]: "",
      ["current_password"]: "",
    },
    mode: "onBlur",
  })

  const { control, handleSubmit, reset, formState: { errors }, watch } = methods
  const formValues = watch();
  const currentPassword = watch("current_password");

  const formValuesWithoutCurrentPassword = { ...formValues };
  delete formValuesWithoutCurrentPassword['current_password'];

  const hasChanges = Object.keys(formValuesWithoutCurrentPassword).some(key => formValuesWithoutCurrentPassword[key] !== formData[key]);

  const { data: departments, isLoading: isDepLoading } = useQuery({
    queryKey: ['departments'],
    queryFn: getAllDepartment,
  })

  useEffect(() => {
    reset({
      ...formData,
      ["new_password"]: "",
      ["confirm_password"]: "",
      ["current_password"]: "",
    });
  }, [formData, reset]);

  const onSubmit = (data) => {
    data[`dob`] = data[`dob`]?.format("YYYY-MM-DD");
    if (typeof data.avatar === "string") {
      delete data.avatar;
    }
    for (const key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }
    console.log(data);
    mutateProfile(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Grid container spacing={"10px"} >
          <PersonalInfoForm control={control} formData={formData} errors={errors} />

          <Grid item xs={12} md={6}>
            <Stack spacing="10px">

              <ContactForm isDepLoading={isDepLoading} departments={departments} />

              <ResetPasswordForm />

            </Stack>
          </Grid>
        </Grid>

        <Stack direction={"row"} spacing={"10px"} justifyContent='flex-end' marginTop={"10px"} >
          <Box>
            <Controller
              name={"current_password"}
              control={control}
              rules={{ required: 'Please enter your password.' }}
              render={({ field }) => (
                <TextField
                  size="small"
                  label={"Current password*"}
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors.current_password}
                  type="password"
                  helperText={errors.current_password ? errors.current_password.message : ""}
                  sx={{ flex: 1 }}
                />
              )}
            />
          </Box>
          <Box>
            <Button type='submit' variant="contained" sx={{ flex: 1 }} disabled={Object.keys(errors).length > 0 || !hasChanges || currentPassword === ""}>
              Save
            </Button>
          </Box>
        </Stack>

      </form>
    </FormProvider >
  )
}

export default EditProfileForm