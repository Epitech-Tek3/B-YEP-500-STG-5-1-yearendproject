const theme = () => ({
  // fontSizes,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  // breakpoints: ["40em", "52em", "64em"], <== those are default
  colors: { black: "#000", grey: "#414547", lightGrey: "#D8C5CB", beige: "#FEA798", red: "#F13A59", green: "#00B386" },
  // isDark ? darkTheme : lightTheme,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Roboto Light", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol"`,
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    smallCard: "0 1px 4px rgba(0,0,0,.08)",
    small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
    fat: "0 2px 16px rgba(0, 0, 0, 0.25)",
    // Fat shadow without top
    fatNoTop: "1px 15px 20px rgba(0,0,0,0.25)",
    button: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);",
    buttonHover: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);",
    small2: "0px 10px 30px rgba(0, 0, 0, 0.2);"
  },
  radii: {
    default: 4,
    circle: 99999
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    },
    ellipsis: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle"
    },
    link: {
      color: "primary"
    },
    navLink: {
      transition: "all .15s linear",
      display: "inline-block",
      fontWeight: "bold",
      lineHeight: "28px",
      "&:hover": {
        color: "#5e6070"
      }
    },
    mutedLink: {
      transition: "all .15s linear",
      color: "link",
      "&:hover": {
        color: "linkHover",
        textDecoration: "underline"
      }
    }
  },
  sizes: {
    avatar: 48
  },
  buttons: {
    primary: {
      fontWeight: "bold",
      outline: "none",
      boderRadius: "default",
      WebkitTapHighlightColor: "transparent",
      // whiteSpace: "nowrap",
      // height: "40px",
      lineHeight: "40px !important",
      padding: "0 14px",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "0.025em",
      textDecoration: "none",
      transition: "all .15s ease",
      WebkitBoxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
      boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
      "&:disabled,&[disabled]": {
        backgroundColor: "#eeeeee",
        color: "#999999",
        cursor: "not-allowed",
        transform: "none",
        boxShadow: "none"
      },
      color: "white",
      backgroundColor: "primary",
      "&:hover": {
        WebkitBoxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)",
        boxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)",
        opacity: "0.95",
        transform: "translateY(-1px)",
        backgroundColor: "primaryLighter"
      }
    },
    gradient: {
      variant: "buttons.primary",
      color: "white",
      backgroundImage: "gradient",
      "&:hover": {
        opacity: 0.9
      }
    },
    secondary: {
      variant: "buttons.primary",
      color: "primary",
      backgroundColor: "white",
      "&:hover": {
        opacity: 0.9
      }
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px",
      "&:hover": {
        backgroundColor: "primaryLight",
        color: "white"
      }
    },
    reverse: {
      variant: "buttons.outline",
      color: "primary",
      backgroundColor: "white"
    },
    noStyle: {
      backgroundColor: "transparent",
      p: 0
    }
  },
  forms: {
    input: {
      outline: "none",
      color: "darkGrey",
      backgroundColor: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      transition: "all 0.2s ease-in-out 0s",
      paddingTop: "11px",
      paddingBottom: "11px",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem"
    },
    smallInput: {
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem"
    },
    label: {
      fontWeight: "bold",
      color: "darkGrey",
      fontSize: [1, 2]
    },
    smallLabel: {
      fontWeight: "normal"
    },
    select: {
      outline: "none",
      color: "grey",
      backgroundColor: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      transition: "all 0.2s ease-in-out 0s",
      paddingTop: "11px",
      paddingBottom: "11px",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem"
    }
  }
});

// export type Thembase = typeof theme;
// export default styled as CreateStyled<Theme>;
export { theme };
