import Head from "next/head";
import LaptopCanvas from "@/components/Laptop";
import { projects } from "@/mocks/projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MacBook Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "100vh", backgroundColor: "#0a0a0a" }}>
        <LaptopCanvas cards={projects} />
      </main>
    </div>
  );
}
