import * as React from "react";
import { Box } from "@mui/material";

export interface IHeaderMobileProps {}

export default function HeaderMobile(props: IHeaderMobileProps) {
  return <Box display={{ xs: "block", md: "none" }}>Header Mobile</Box>;
}
