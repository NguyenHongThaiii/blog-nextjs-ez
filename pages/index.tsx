import { Seo } from "@/components/common";
import { Hero, RecentPosts } from "@/components/home";
import { FeatureWorks } from "@/components/home/featured-works";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/material";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: "NextJS Tutorials | Easy Frontend",
          description:
            "Step by step tutorials to build a full CRUD website using NextJS for beginners",
          url: process.env.HOST_URL || "https://blog-nextjs-ez-ppem.vercel.app/",
          thumbnailUrl:
            "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png",
        }}
      />
      <Hero />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
