import * as React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";
import avatar from "@/images/avatar.png";

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={8}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am John, <br />
              Creative Technologist
            </Typography>

            <Typography mb={{ xs: 3.5, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>

            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: "240px",
              boxShadow: "-5px 13px",
              color: "secondary.light",
              borderRadius: "50%",
            }}
          >
            <Image src={avatar} alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
