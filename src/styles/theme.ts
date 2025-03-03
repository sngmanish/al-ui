import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography = {
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
  h1: {
    fontSize: 32,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    lineHeight: "48px",
  },
  h2: {
    fontSize: 24,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    lineHeight: "36px",
  },
  h3: {
    fontSize: 20,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    lineHeight: "24px",
  },
  h5: {
    fontSize: 12,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    lineHeight: "20px",
  },
  h6: {
    fontSize: 11,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    lineHeight: "16px",
  },
  subtitle1: {
    fontSize: 20,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "32px",
  },
  subtitle2: {
    fontSize: 16,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "24px",
  },
  body1: {
    fontSize: 14,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "20px",
  },
  body2: {
    fontSize: 12,
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 400,
    lineHeight: "16px",
  },
  button: {
    textTransform: "none",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7756e3",
    },
  },
  typography: {
    ...(typography as TypographyOptions),
  },
});
