import * as React from "react";
import { Box } from "@mui/material";
import { MainLayout } from "@/components/layout";

export interface IBlogProps {}

export default function BlogPage(props: IBlogProps) {
  return <Box>Blog Page</Box>;
}
BlogPage.Layout = MainLayout;
