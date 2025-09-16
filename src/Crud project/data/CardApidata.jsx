import * as React from "react";
import { CardContent, Box } from "@mui/material";
import {
  CustomCard,
  TitleText,
  BodyText,
  CancelButton,
  SubmitButton,
} from "../CardApidata.styles"; 

export const CardApidata = ({ value,handleDeletePost }) => {
  const { title = "No Title", body = "No Content Available",id } = value || {};
 
  return (
    <CustomCard>
      <CardContent>
        <TitleText gutterBottom variant="h6">
          {title}
        </TitleText>
        <BodyText variant="body2">{body}</BodyText>
      </CardContent>

      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <CancelButton >EDIT</CancelButton>
        <SubmitButton onClick={()=>handleDeletePost(id)}>DELETE</SubmitButton>
      </Box>
    </CustomCard>
  );
};
