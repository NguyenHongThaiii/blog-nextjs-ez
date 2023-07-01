import { Box, Stack, Link as MuiLink, Container } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { ROUTE_HEADER } from "../route";
import { useRouter } from "next/router";
import clsx from "clsx";
export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  const router = useRouter();
  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_HEADER.map((route) => (
            <Link key={route.label} href={route.path} passHref legacyBehavior>
              <MuiLink
                className={clsx({ active: route.path === router.pathname })}
                sx={{
                  ml: 2,
                  fontWeight: 500,
                }}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>{" "}
      </Container>
    </Box>
  );
}
