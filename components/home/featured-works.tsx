import { Work } from "@/models";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { WorkList } from "../works";

export function FeatureWorks() {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createdAt: "1648363391671",
      updatedAt: "1648363391671",
      tagList: ["Dashboard"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/th-i-nguy-n/image/upload/v1688226215/nextjs/Rectangle_30_afvwxt.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createdAt: "1648363391671",
      updatedAt: "1648363391671",
      tagList: ["Illustration"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/th-i-nguy-n/image/upload/v1688226218/nextjs/Rectangle_32_udi5z1.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createdAt: "1648363391671",
      updatedAt: "1648363391671",
      tagList: ["Typography"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/th-i-nguy-n/image/upload/v1688226215/nextjs/Rectangle_34_d5egog.jpg",
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured Works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
