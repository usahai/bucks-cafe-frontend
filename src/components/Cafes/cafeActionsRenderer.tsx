import { CustomCellRendererProps } from "ag-grid-react";
import { RouterIconButton, StyledIconButton } from "../ui/Button";
import { Pencil, Trash2 } from "lucide-react";
import styles from "./index.module.css";
import { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function CafeActionsRenderer({ value }: CustomCellRendererProps<string>) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.actionsRendererContainer}>
        <RouterIconButton
          to={"/cafes/edit/$id"}
          params={{ id: value }}
          mask={{ to: "/cafes/edit" }}
        >
          <Pencil size="12" color="white" />
        </RouterIconButton>
        <StyledIconButton onClick={() => setOpen(true)}>
          <Trash2 size="12" color="white" />
        </StyledIconButton>
      </div>
      {/* DELETE MODAL */}
      <DeleteConfirmationModal
        open={open}
        handleClose={handleClose}
        id={value}
      />
    </>
  );
}

export default CafeActionsRenderer;
