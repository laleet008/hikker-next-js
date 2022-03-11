import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Destination from "../components/Destination";
import About from "../components/About";
import Services from "../components/Services";
import Journey from "../components/Journey";
import Testimonials from "../components/Testimonials";
import Trip from "../components/Trip";
import Blog from "../components/Blog";
// import Video from "../components/Video";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Explore />
      <Destination />
      <About />
      <Services />
      <Journey />
      <Testimonials />
      {/* <Video /> */}
      <Trip />
      <Blog />
    </Layout>
  );
}
