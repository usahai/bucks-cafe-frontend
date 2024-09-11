import { CustomCellRendererProps } from "ag-grid-react";
import { RouterIconButton, StyledIconButton } from "../ui/Button";
import { Pencil, Trash2 } from "lucide-react";
import styles from "./index.module.css";
import { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

interface CustomEmployeeRendererProps extends CustomCellRendererProps<string> {
  emp_id: string;
}

function EmployeeActionsRenderer({ emp_id }: CustomEmployeeRendererProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.actionsRendererContainer}>
        <RouterIconButton
          to={"/employees/edit/$id"}
          params={{ id: emp_id }}
          mask={{ to: "/employees/edit" }}
        >
          <Pencil size="12" color="white" />
        </RouterIconButton>
        <StyledIconButton onClick={() => setOpen(true)}>
          <Trash2 size="12" color="white" />
        </StyledIconButton>
      </div>
      {/* DELETE MODAL */}
      <DeleteConfirmationModal
        id={emp_id}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default EmployeeActionsRenderer;
