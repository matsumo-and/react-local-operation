import Typography, {
  TypographyOwnProps,
  TypographyTypeMap,
} from "@mui/material/Typography";
import Link from "@mui/material/Link";

/**
 * Copyright Component
 * @param props Typography props
 * @returns
 */
export default function Copyright(props: TypographyOwnProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
