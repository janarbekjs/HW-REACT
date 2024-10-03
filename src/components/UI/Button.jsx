import styled from "styled-components";

export const Button = ({
  type,
  onClick,
  children,
  variant,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      type={type}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const getStyles = ({ variant }) => {
  switch (variant) {
    case "contained": {
      return {
        backgroundColor: "#1F6ED4",
        fontSize: "18px",
        fontweight: "500",
        width: "198px",
        borderRadius: "10px",
        border: "none",
        height: "53px",
        "&:hover": {
          backgroundColor: "#4C94F0",
        },
        "&:active": {
          backgroundColor: "#0052BC",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }
    case "outlined": {
      return {
        width: "198px",
        height: "48px",
        backgroundColor: "#fff",
        fontSize: "14px",
        fontweight: "500",
        borderRadius: "10px",
        border: "1px solid #4C94F0",
        "&:hover": {
          border: " 3px solid #4C94F0",
        },
        "&:active": {
          backgroundColor: "#0052BC",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }
    case "warning": {
      return {
        width: "186px",
        height: "42px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#F37705",
        fontSize: "12px",
        fontweight: "800",
        "&:hover": {
          backgroundColor: "#FF912B",
        },
        "&:active": {
          backgroundColor: "#CF6300",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }
    case "danger": {
      return {
        width: "186px",
        height: "47px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#DF2D2D",
        fontSize: "16px",
        fontweight: "600",
        "&:hover": {
          backgroundColor: "#E54343",
        },
        "&:active": {
          backgroundColor: "#C20B0B",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }
  }
};

const StyledButton = styled.button`
  ${getStyles}
  cursor: pointer;
`;
