import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { postdata } from "../Api/Postapi";

function Form({ posts, setPosts }) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const handleInputchange = (e) => {
    const { name, value } = e.target;

    setAddData((prev) => {
      console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addPostData = async () => {
    const res = await postdata(addData);
    if (res.status === 201) {
      setPosts([...posts, res.data]);
      setAddData({ title: "", body: "" });
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  return (
    <div>
        <form action="" onSubmit={handleFormSubmit}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={4}
      >
        <TextField
          label="ADD TITLE"
          name="title"
          value={addData.title}
          sx={{ width: 400 }}
          onChange={handleInputchange}
        />
        <TextField
          label="ADD POST"
          name="body"
          value={addData.body}
          sx={{ width: 400 }}
          onChange={handleInputchange}
        />
        <Button type="submit"
          style={{ padding: "15px 24px", color: "white ", background: "green" }}
          onClick={handleFormSubmit}
        >
          ADD
        </Button>
      </Box>
      </form>
      
    </div>
  );
}

export default Form;
