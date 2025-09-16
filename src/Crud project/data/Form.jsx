import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { postdata, UPdateData } from "../Api/Postapi";

function Form({ posts, setPosts, updateDataApi, setupdateDataApi }) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  //get the udpated Data add into field

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);
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
  // updatePostData
  const updatePostData = async () => {
    try {
      const res = await UPdateData(updateDataApi.id, addData);
      console.log(res);
      setPosts((prev) => {
        return prev.map((data) => {
          return posts.id === updateDataApi.id? res.posts : data;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  //submit data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    addPostData();
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
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
          <Button
            type="submit"
            value={isEmpty ? "Add" : "Edit"}
            style={{
              padding: "15px 24px",
              color: "white ",
              background: "green",
            }}
          >
            {isEmpty ? "Add" : "Edit"}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Form;
