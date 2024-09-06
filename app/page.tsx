import Image from "next/image";
import styled from "styled-components";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Header } from "../components/features/Header";
import { Content } from "../components/features/Content";

interface Todo {
  id: string;
  title: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:3001/todos");
  const todos: Todo[] = await res.json();
  console.log(todos);

  return (
    <Content></Content>
  );
}
