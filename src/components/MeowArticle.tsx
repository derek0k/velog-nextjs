"use client";

import { useEffect, useState } from "react";

export default function MeowArticle() {
  const [text, setText] = useState("data loading...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then(({ data }) => setText(data[0]));
  }, []);

  return <article>{text}</article>;
}
