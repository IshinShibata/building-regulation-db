import styled from "styled-components";
import Paper from "@mui/material/Paper";
export const Img = styled.img`
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

export const PaperContent = (props: Props) => {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "#fff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#1A2027",
        }),
      })}
    ></Paper>
  );
};
