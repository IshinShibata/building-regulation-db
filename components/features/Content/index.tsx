import React from "react";
import BodyCard from "../BodyCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Link from "next/link";

export const Content = () => {
  const areas = [
    { id: 1, name: "足立区" },
    { id: 2, name: "荒川区" },
    { id: 3, name: "板橋区" },
    { id: 4, name: "江戸川区" },
    { id: 5, name: "大田区" },
    { id: 6, name: "葛飾区" },
    { id: 7, name: "北区" },
    { id: 8, name: "江東区" },
    { id: 9, name: "品川区" },
    { id: 10, name: "渋谷区" },
    { id: 11, name: "新宿区" },
    { id: 12, name: "杉並区" },
    { id: 13, name: "墨田区" },
    { id: 14, name: "世田谷区" },
    { id: 15, name: "台東区" },
    { id: 16, name: "中央区" },
    { id: 17, name: "千代田区" },
    { id: 18, name: "豊島区" },
    { id: 19, name: "中野区" },
    { id: 20, name: "練馬区" },
    { id: 21, name: "文京区" },
    { id: 22, name: "港区" },
    { id: 23, name: "目黒区" },
  ];

  return (
    <Grid
      container
      justifyContent="center" // 水平方向の中央揃え
      alignItems="center" // 垂直方向の中央揃え
      style={{ minHeight: "100vh" }} // 画面全体をカバーする高さ
    >
      <Paper
        style={{
          minHeight: "60vh",
          maxWidth: "100vh",
          padding: "5px", // 内側のスペーシング
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          {areas.map((area) => (
            <Grid item xs={6} sm={4} key={area.id}>
              <Link href={`/contents/${area.id}`}>
                <Typography variant="body1" align="center">
                  {area.name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Content;
