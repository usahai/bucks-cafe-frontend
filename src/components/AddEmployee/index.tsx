import { Card, Grid2 as Grid } from "@mui/material";
import styles from "./index.module.css";
import { AddEmployeeForm, AddEmployeeSchema } from "../../types/form";
import { useForm } from "react-hook-form";
import { StyledButton as Button } from "../ui/Button";
import ControlledInput from "../ui/Form/ControlledInput";
import RadioGroup from "../ui/Form/RadioGroup";
import Select from "../ui/Form/Select";
import PhoneNumber from "../ui/Form/PhoneNumber";
import useGetCafes from "../../hooks/useGetCafes";
import { getListOfCafes, getListOfGenders } from "./_helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAddEmployee from "../../hooks/useAddEmployee";
import { useBlocker, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import UnsavedChangesModal from "../UnsavedChangesModal";
import { useEffect } from "react";
import useUpdateEmployee from "../../hooks/useUpdateEmployee";

interface AddEmployeeProps {
  employeeData?: AddEmployeeForm;
}

function AddEmployee({ employeeData }: AddEmployeeProps) {
  const { data: cafes } = useGetCafes();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isDirty, isSubmitted },
  } = useForm<z.infer<typeof AddEmployeeSchema>>({
    resolver: zodResolver(AddEmployeeSchema),
    defaultValues: {
      cafe_id: "",
      ...employeeData,
    },
  });

  useEffect(() => {
    console.log("[AE] employeeData:", employeeData);
    if (employeeData) {
      reset();
    }
  }, [employeeData, reset]);

  const {
    proceed,
    reset: resetBlocker,
    status,
  } = useBlocker({
    condition: isDirty && !isSubmitted,
  });

  const { mutateAsync: addEmployee } = useAddEmployee({
    onSuccess: () => {
      window.alert("Successfully added employee!");
      queryClient.invalidateQueries({ queryKey: ["cafes"] });
      navigate({ to: "/employees" });
    },
  });

  const { mutateAsync: updateEmployee } = useUpdateEmployee(
    employeeData?.emp_id ?? "",
    {
      onSuccess: () => {
        window.alert("Successfully added employee!");
        queryClient.invalidateQueries({ queryKey: ["employees"] });
        navigate({ to: "/employees" });
      },
    }
  );

  function onSubmit(data: AddEmployeeForm) {
    const cafe_id = watch("cafe_id");
    if (employeeData) updateEmployee({ ...data, cafe_id: cafe_id });
    else addEmployee({ ...data, cafe_id: cafe_id });
  }

  return (
    <>
      <h2>{employeeData ? "Edit" : "Add New"} Employee</h2>
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
                name="email_address"
                register={register}
                label="Email"
                type="email"
                required
                error={errors.email_address}
              />
            </Grid>
            <Grid size={6}>
              <PhoneNumber
                name="phone_number"
                register={register}
                label="Phone Number"
                required
                error={errors.phone_number}
              />
            </Grid>
            <Grid size={6}>
              <RadioGroup
                name="gender"
                register={register}
                fieldLabel="Gender"
                required
                options={getListOfGenders()}
                error={errors.gender}
              />
            </Grid>
            <Grid size={6}>
              <Select
                name="cafe_id"
                register={register}
                fieldLabel="Cafe"
                options={getListOfCafes(cafes ?? [])}
                error={errors.cafe_id}
              />
            </Grid>
          </Grid>
          <div className={styles.submitBtnContainer}>
            <Button type="submit" className={styles.submitBtn}>
              Submit
            </Button>
          </div>
        </form>
      </Card>
      <UnsavedChangesModal
        open={status === "blocked"}
        proceed={proceed}
        reset={resetBlocker}
      />
    </>
  );
}

export default AddEmployee;
