const commonTheme = {
  white: "#fff",
  black: "#000",
  red: "#E44848",
  redHover: "#D84343",
  orange: "#FFC531",
  inputBackground: "#F7F7F7",
  backdrop: "rgba(17, 18, 19, 0.40)",
  placeholderColor: "rgba(16, 24, 40, 0.6)",
  transparentBg: "#ababb479",
  heroGradiend: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
};

export const lightTheme = Object.freeze({
  background: "#FFF",
  contrast: "#FFF",
  grey: "#F2F4F7",
  text: "#101828",
  lightText: "#475467",
  borderColor: "rgba(16, 24, 40, 0.2)",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  ...commonTheme,
});

export const darkTheme = Object.freeze({
  background: "#101828",
  contrast: "#1a1a1b",
  grey: "#656363",
  text: "#F2F4F7",
  lightText: "#F7F7F7",
  borderColor: "rgba(244, 244, 244, 0.5)",
  boxShadow:
    "rgba(195, 193, 193, 0.12) 0px 1px 3px, rgba(239, 236, 236, 0.24) 0px 1px 2px",
  ...commonTheme,
});