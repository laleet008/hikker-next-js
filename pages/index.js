import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Explore from "../pages/Explore";
import Destination from "../pages/Destination";
import About from "../pages/About";
import Services from "../pages/Services";
import Journey from "../pages/Journeys";
import Testimonials from "../pages/Testimonials";
import Blog from "../pages/Blog";

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
      <Blog />
    </Layout>
  );
}
