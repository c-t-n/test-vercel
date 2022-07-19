import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  console.log("Hello");
  return {
    props: {
      apiToken: process.env.STRAPI_API_TOKEN || null,
    },
  };
}

export default function Home({ apiToken }) {
  return <div>{apiToken}</div>;
}
