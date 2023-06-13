import { styled } from "../../styles";

export interface QuantityInputContainerProps {
  size: "medium" | "small";
}

export const QuantityInputContainer = styled("div", {
  flex: "1",
  background: "$base-button",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px",
  borderRadius: "6px",

  input: {
    textAlign: "center",
    width: "100%",
    background: "none",
    border: "none",
    color: "$base-title",

    "&:focus": {
      outline: "none",
    },
  },

  variants: {
    size: {
      medium: {
        padding: "0.5rem",
      },
      small: {
        padding: "0.3rem 0.5rem",
      },
    },
  },
});

export const IconWrapper = styled("button", {
  width: "0.875rem",
  height: "0.875rem",
  border: "none",
  background: "none",
  color: "$brand-purple",
  transition: "0.4s",

  "&:disabled": {
    opacity: 0.4,
  },

  "&:not(:disabled):hover": {
    color: "$brand-purple-dark",
  },
}).attrs({ type: "button" });
