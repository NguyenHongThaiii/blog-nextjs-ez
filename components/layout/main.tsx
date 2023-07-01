import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { LayoutProps } from "@/models";
import { Box, Container, Stack } from "@mui/material";

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
