import React from "react";
import {
  Competition,
  CompetitionAnalysis,
  ProjectContainer,
} from "../Project/ProjectSummary";

export default function Research() {
  return (
    <ProjectContainer>
      <div className="flex flex-col">
        <h3 className="pt-4 mb-[0.35em] text-4xl sm:text-5xl">Research</h3>
        <h4 className="text-3xl sm:text-4xl mb-[0.35em]">
          User Interviews and Surveys
        </h4>
        <p className="mb-4">
          The SaveUp team was interested in understanding the financial issues
          that affected young Barbadians. User interviews and surveys were
          conducted among the target group, and questions were formulated around
          participants financial goals, challenges, habits and attitudes towards
          saving and budgeting. The team used the insights gathered from the
          research to refine app features to meet the needs and preferences of
          the target users.
        </p>

        <p className="mb-2 font-semibold">Research insights:</p>
        <ul className="list-disc pb-[1rem] list-inside">
          <li>Over 80% did not have a financial plan.</li>
          <li>90% have not saved money in a period longer than a year.</li>
          <li>
            Over 70% of participants were interested in using a mobile app to
            track their expenses and progress towards financial goals.
          </li>
          <li>
            Young Barbadians expressed interest in learning more about financial
            planning and investing. However, they often feel intimidated or
            overwhelmed by the topic.
          </li>
        </ul>
      </div>

      <h4 className="text-3xl sm:text-4xl mb-[0.35em]">Competitive Analysis</h4>
      <div className="pb-8 flex flex-col lg:flex-row gap-6">
        <Competition title="EveryDollar">
          Budgeting app that offers free version and paid version. The free
          version carries for basic features. The paid version offers additional
          advanced features.
        </Competition>

        <Competition title="Mint">
          Budgeting app that helps users track their expenses, set financial
          goals, and save money. Offers a free trial and a paid version that
          costs $84 per year.
        </Competition>

        <Competition title="YNAB">
          Budgeting app that allows users to create a budget, track their
          spending, and manage their investments. Free to use, and offers
          personalized financial advice based on user spending habits.
        </Competition>
      </div>

      <h5 className="pb-8 mb-2 leading-[1.334] text-center text-2xl font-normal italic">
        We wanted to ensure that we kept SaveUp competitive when compared to the
        larger market space by studying other budgeting apps. Through this
        competitive analysis, we noticed some key takeaways:
      </h5>

      <div className="pb-12 flex flex-col lg:flex-row gap-6">
        <CompetitionAnalysis title="1">
          The foundation of each service was offering users a way to track
          spending and set financial goals.
        </CompetitionAnalysis>

        <CompetitionAnalysis title="2">
          While all three services offer a free version, some of the more
          advanced features require users to pay a monthly or yearly
          subscription fee. Mint, in particular, displays advertisements for
          financial products, which can be annoying for some users.
        </CompetitionAnalysis>

        <CompetitionAnalysis title="3">
          Some users find that the budgeting categories provided by these apps
          are too general and don&apos;t allow for enough customization to
          reflect their unique financial situation.
        </CompetitionAnalysis>
      </div>
    </ProjectContainer>
  );
};
