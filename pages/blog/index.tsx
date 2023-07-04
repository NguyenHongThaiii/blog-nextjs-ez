import { MainLayout } from "@/components/layout";
import { Post } from "@/models";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { Box, Container, Divider, Link as MuiLink } from "@mui/material";
import { GetStaticProps } from "next";
import Link from "next/link";
import { PostItem } from "@/components/blog";
import { useState } from "react";
import { getPostList } from "@/utils/post";


export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  const [state, setState] = useState("")
  const handleChange = (e: any) => {
    setState(() => {
      console.log("inside");
      return e.target.value
    })
    console.log("outside");
  }
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component="ul" sx={{ listStyleType: "none", p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} legacyBehavior passHref  >
                <MuiLink sx={{ ":hover": { color: "black" } }} underline="none" >
                  <PostItem post={post} />
                </MuiLink>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>

      </Container>

      <input onChange={handleChange} />
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {

  const postList = await getPostList()
  return {
    props: {
      posts: postList,
    },
  };
};
