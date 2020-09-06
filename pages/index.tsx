import { NextPage } from "next";
import { ProgressBar } from "../src/components/ProgressBar";
import { getYearProgress } from "../src/utils/getYearProgress";

const Index: NextPage = () => {
  const yearProgress = getYearProgress();
  return <ProgressBar title="YEAR" fill_value={yearProgress} />;
};

export default Index;
