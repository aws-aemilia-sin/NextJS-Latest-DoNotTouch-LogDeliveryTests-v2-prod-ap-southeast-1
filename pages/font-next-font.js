import Layout from "../components/layout";
import { MuseoModerno } from "next/font/google";

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <Layout>
      <article>
        <h1>Font — @next/font</h1>
        <p>This uses default font.</p>
        <p className={museo.className}>This uses MuseoModerno font.</p>
      </article>
    </Layout>
  );
}