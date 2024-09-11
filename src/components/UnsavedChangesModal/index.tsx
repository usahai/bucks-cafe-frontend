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

function UnsavedChangesModal({
  open,
  proceed,
  reset,
}: {
  open: boolean;
  proceed: () => void;
  reset: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={() => {}}
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
          <DialogTitle id="alert-dialog-title">Unsaved changes</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to leave this page? You will lose all
              unsaved changes.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={reset}>No</Button>
            <Button onClick={proceed} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Box>
      </Fade>
    </Dialog>
  );
}

export default UnsavedChangesModal;
