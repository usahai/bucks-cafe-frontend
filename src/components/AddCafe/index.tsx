import { Card, Grid2 as Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import ControlledInput from "../ui/Form/ControlledInput";
import TextArea from "../ui/Form/TextArea";
import { StyledButton as Button } from "../ui/Button";
import { AddCafeForm, AddCafeSchema } from "../../types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAddCafe from "../../hooks/useAddCafe";
import { useQueryClient } from "@tanstack/react-query";
import { useBlocker, useNavigate } from "@tanstack/react-router";
import UnsavedChangesModal from "../UnsavedChangesModal";

function AddCafe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isDirty, isSubmitted },
  } = useForm<z.infer<typeof AddCafeSchema>>({
    resolver: zodResolver(AddCafeSchema),
  });

  const {
    proceed,
    reset: resetBlocker,
    status,
  } = useBlocker({
    condition: isDirty && !isSubmitted,
  });

  const { mutateAsync: addCafe } = useAddCafe({
    onSuccess: () => {
      window.alert("Successfully added cafe!");
      queryClient.invalidateQueries({ queryKey: ["cafes"] });
      navigate({ to: "/cafes" });
    },
  });

  function onSubmit(data: AddCafeForm) {
    addCafe(data);
  }

  return (
    <>
      <h2>Add New Cafe</h2>
      <Card className={styles.card}>
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
        <UnsavedChangesModal
          open={status === "blocked"}
          proceed={proceed}
          reset={resetBlocker}
        />
      </Card>
    </>
  );
}

export default AddCafe;
