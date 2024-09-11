import { useBlocker, useNavigate, useParams } from "@tanstack/react-router";
import { Card, CircularProgress, Grid2 as Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import ControlledInput from "../ui/Form/ControlledInput";
import TextArea from "../ui/Form/TextArea";
import { StyledButton as Button } from "../ui/Button";
import { AddCafeForm, AddCafeSchema } from "../../types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useUpdateCafe from "../../hooks/useUpdateCafe";
import useGetCafeById from "../../hooks/useGetCafeById";
import { useEffect } from "react";
import UnsavedChangesModal from "../UnsavedChangesModal";
import { useQueryClient } from "@tanstack/react-query";

function EditCafe() {
  const { id } = useParams({ from: "/cafes/edit/$id" });
  const { data } = useGetCafeById(id);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.cafe_id)
      reset({
        name: data?.cafe_name,
        location: data?.location,
        description: data?.description,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isDirty, isSubmitted },
  } = useForm<z.infer<typeof AddCafeSchema>>({
    resolver: zodResolver(AddCafeSchema),
    defaultValues: {
      name: data?.cafe_name,
      location: data?.location,
      description: data?.description,
    },
  });

  const {
    proceed,
    reset: resetBlocker,
    status,
  } = useBlocker({
    condition: isDirty && !isSubmitted,
  });

  const { mutateAsync: updateCafe } = useUpdateCafe(id, {
    onSuccess: () => {
      window.alert("Successfully updated cafe!");
      queryClient.invalidateQueries({ queryKey: ["cafes"] });
      navigate({ to: "/cafes" });
    },
  });

  function onSubmit(data: AddCafeForm) {
    updateCafe(data);
  }

  return (
    <>
      <h2>Edit Cafe</h2>
      <Card className={styles.card}>
        {data ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={2}>
              <Grid size={6}>
                <ControlledInput
                  name="name"
                  register={register}
                  label="Name"
                  required
                  error={errors.name}
                />
              </Grid>
              <Grid size={6}>
                <ControlledInput
                  name="location"
                  register={register}
                  label="Location"
                  required
                  error={errors.location}
                />
              </Grid>
              <Grid size={12}>
                <TextArea
                  name="description"
                  register={register}
                  label="Description"
                  error={errors.description}
                  watch={watch}
                  required
                />
              </Grid>
            </Grid>
            <div className={styles.submitBtnContainer}>
              <Button type="submit" className={styles.submitBtn}>
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <div className={styles.loadingContainer}>
            <CircularProgress />
          </div>
        )}
      </Card>
      <UnsavedChangesModal
        open={status === "blocked"}
        proceed={proceed}
        reset={resetBlocker}
      />
    </>
  );
}

export default EditCafe;
