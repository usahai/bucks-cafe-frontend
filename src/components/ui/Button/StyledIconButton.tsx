import { styled } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const StyledButton = styled(IconButton)<IconButtonProps>(() => ({
  backgroundColor: "color-mix(in srgb, #fff, #182230 97%)",
  boxShadow: "none",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  "&.hover": {
    color: "white",
    backgroundColor: "color-mix(in srgb, transparent, #2196f3 30%)",
  },
}));

export default StyledButton;
