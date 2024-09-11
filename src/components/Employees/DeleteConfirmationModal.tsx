import {
  Backdrop,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
} from "@mui/material";
import { StyledButton as Button } from "../ui/Button";
import useDeleteEmployee from "../../hooks/useDeleteEmployee";
import { useQueryClient } from "@tanstack/react-query";

function DeleteConfirmationModal({
  id,
  open,
  handleClose,
}: {
  id: string;
  open: boolean;
  handleClose: () => void;
}) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteCafe } = useDeleteEmployee({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const onClose = () => {
    deleteCafe({ id });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="cafe-employee-modal"
      aria-describedby="list-of-employees-in-cafe"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box>
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this cafe?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={onClose} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Box>
      </Fade>
    </Dialog>
  );
}

export default DeleteConfirmationModal;
