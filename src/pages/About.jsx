import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <img
        src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        style={{
          width: 400,
          height: 300,
          objectFit: "cover",
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        ea impedit eligendi quas ipsam ut sit eveniet ratione facilis corporis
        laborum dolor, sunt cumque placeat. Beatae alias fugiat architecto
        mollitia!
      </p>
    </MainLayout>
  );
}
