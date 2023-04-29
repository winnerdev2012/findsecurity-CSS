import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

interface TypographyOpeionsProps extends TypographyOptions {
  display1: React.CSSProperties
  display2: React.CSSProperties
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  display1: React.CSSProperties;
}
const defaultTheme = createTheme();
const { breakpoints } = defaultTheme;

export const theme = createTheme({
  typography: {
    display1: {
      fontFamily: `'Space Grotesk', sans-serif`,
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "82px",
      [breakpoints.down("lg")]: {
        fontSize: "40px",
        lineHeight: "54px",
      },
      [breakpoints.down("sm")]: {
        fontSize: "32px",
        lineHeight: "44px",
      }
    },
    display2: {
      fontFamily: `'Inter', sans-serif`,
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "68px",
      [breakpoints.down("lg")]: {
        fontSize: "40px",
        lineHeight: "54px",
      },
      [breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "28px",
      }
    },
  } as ExtendedTypographyOptions,
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(28, 28, 40, 0.9)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#1C1C28'
        },
      },
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontFamily: `'Space Grotesk', sans-serif`,
            fontSize: '40px',
            lineHeight: '54px',
            fontWeight: 700,
            [breakpoints.down("lg")]: {
              fontSize: "24px",
              lineHeight: "32px",
            },
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            fontFamily: `'Space Grotesk', sans-serif`,
            fontSize: '32px',
            lineHeight: '44px',
            fontWeight: 700,
            [breakpoints.down("lg")]: {
              fontSize: "20px",
              lineHeight: "28px",
            },
          },
        },
        {
          props: { variant: 'h3' },
          style: {
            fontFamily: `'Space Grotesk', sans-serif`,
            fontSize: '28px',
            lineHeight: '38px',
            fontWeight: 700,
            [breakpoints.down("lg")]: {
              fontSize: "14px",
              lineHeight: "24px",
            },
          },
        },
        {
          props: { variant: 'h4' },
          style: {
            fontFamily: `'Space Grotesk', sans-serif`,
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 700,
            [breakpoints.down("lg")]: {
              fontSize: "20px",
              lineHeight: "28px",
            },
          },
        },
        {
          props: { variant: 'h5' },
          style: {
            fontFamily: `'Space Grotesk', sans-serif`,
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: 700,
            [breakpoints.down("lg")]: {
              fontSize: "16px",
              lineHeight: "22px",
            },
          },
        },
        {
          props: { variant: 'h6' },
          style: {
            fontFamily: `'Space Grotesk', sans-serif`,
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 700
          },
        },
        {
          props: { variant: 'body1' },
          style: {
            fontFamily: `'Inter', sans-serif`,
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
          },
        },
        {
          props: { variant: 'body2' },
          style: {
            fontFamily: `'Inter', sans-serif`,
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: 400,
            [breakpoints.down("lg")]: {
              fontSize: "12px",
              lineHeight: "15px",
            },
          },
        },
        {
          props: { variant: 'caption' },
          style: {
            fontFamily: `'Inter', sans-serif`,
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: 600,
          },
        },
        {
          props: { variant: 'subtitle1' },
          style: {
            fontFamily: `'Inter', sans-serif`,
            fontSize: '12px',
            lineHeight: '15px',
            fontWeight: 400,
            [breakpoints.down("lg")]: {
              fontSize: "10px",
              lineHeight: "12px",
            },
          },
        },
        {
          props: { variant: 'subtitle2' },
          style: {
            fontFamily: `'Inter', sans-serif`,
            fontSize: '10px',
            lineHeight: '12px',
            fontWeight: 400,
          },
        }
      ]
    },
  },
});
