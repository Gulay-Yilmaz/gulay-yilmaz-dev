import ParallaxMoon from "@/components/PrallaxMoon";
import Head from "next/head";
import { home, head } from "@/mocks/home";
import TextContent from "@/components/TextContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full py-48 max-w-7xl mx-auto">
        <ParallaxMoon />
        <div className="flex flex-col gap-16 relative z-10 text-white">
          <TextContent content={home.textContentFirst} tag="h1" />
          <TextContent
            content={home.textContentSecond}
            tag="default"
            customClass="self-end"
          />
          <TextContent content={home.textContentThird} tag="default" />
        </div>
      </main>
    </div>
  );
}
