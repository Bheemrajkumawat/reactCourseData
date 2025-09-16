import React, { useEffect, useState } from "react";
import { deletePost, getpost } from "../Api/Postapi";
import { CardApidata } from "./CardApidata";
import { Box, Grid, TextField } from "@mui/material";
function Apidata() {
  const [posts, setPosts] = useState([]);
  const mydata = async () => {
    try {
      console.log("API call started...");
      const res = await getpost();
      console.log(res);
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mydata();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const respon = await deletePost(id);
      if (respon.status === 200) {
        const newUpsatedPosts = posts.filter((curPost) => {
          return curPost.id !== id;
        });
        setPosts(newUpsatedPosts);
      } else {
        console.log("not delete the post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Posts Data</h2>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          mb={4}
        >
          <TextField label="ADD TITLE" name="text" sx={{ width: 400 }} />
          <TextField label="ADD POST" name="text" sx={{ width: 400 }} />
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {posts.map((value) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CardApidata
                  key={value.id}
                  value={value}
                  handleDeletePost={handleDeletePost}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Apidata;
