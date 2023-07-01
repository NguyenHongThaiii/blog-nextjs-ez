import { Hero, RecentPosts } from "@/components/home";
import { FeatureWorks } from "@/components/home/featured-works";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/material";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
