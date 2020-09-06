import { NextPage } from "next";
import { ProgressBar } from "../src/components/ProgressBar";
import { getDayProgress } from "../src/utils/getDayProgress";
import { getYearProgress } from "../src/utils/getYearProgress";

const Index: NextPage = () => {
  const yearProgress = getYearProgress();
  const dayProgress = getDayProgress();

  return (
    <div>
      <ProgressBar title="YEAR" fill_value={yearProgress} />
      <ProgressBar title="DAY" fill_value={dayProgress} />
    </div>
  );
};

export default Index;
