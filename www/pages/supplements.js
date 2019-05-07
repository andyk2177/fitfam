import fetch from "isomorphic-unfetch";
import SupplementList from "../components/SupplementList";
import Link from "next/link";
import Layout from "../components/Layout";

const supplements = ({ supplements }) => {
  return (
    <Layout>
      <SupplementList supplements={supplements} />
    </Layout>
  );
};

supplements.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/supplements`);
  const json = await res.json();

  return { supplements: json };
};

export default supplements;
