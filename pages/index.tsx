import { NextPage } from "next";
import { ProgressBar } from "../src/components/ProgressBar";

const Index: NextPage = () => {
  return <ProgressBar title="YEAR" fill_value={50} />;
};

export default Index;
