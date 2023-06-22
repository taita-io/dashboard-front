import styles from "./Dashboard1.module.css";
import Dropdown from '../components/General/Dropdown';
import ComparisonTable from '../components/MainContent/ComparisonTable'
import Header from '../components/Header/Header';
import LeftSidebar from '../components/Sidebar/Sidebar';
import FloatingButton from "../components/General/FloatingButton";

const data = [
  {
    question: { summaryText: 'Conflict Resolution', fullText: 'Describe a situation at work where you successfully resolved a conflict' },
    response1: { summaryText: 'As a team leader, I defused a tense situation between two colleagues by arranging a meeting where they could voice their concerns, which led to a mutual agreement and reestablished harmony in the team.', fullText: "I once faced a situation where two colleagues had a disagreement that was disrupting the team's morale and productivity. As the team leader, I felt it was my responsibility to address the issue. So, I arranged a meeting with both individuals, where they had a safe space to voice their concerns and feelings. I made sure to facilitate the discussion in a way that each person felt heard and understood. As a result of this open and respectful dialogue, both parties were able to see the situation from the other person's perspective, leading to a mutual agreement. This reestablished harmony within the team and we were able to move forward with improved communication and understanding." },
    response2: { summaryText: 'By implementing a fair and impartial conflict resolution process, I was able to resolve a major disagreement in my department, which boosted team morale and productivity.', fullText: "In a previous role, I was faced with a major disagreement within my department. The issue had escalated to the point where it was affecting everyone's productivity and morale. I knew that we needed a systematic approach to resolve the issue, so I implemented a conflict resolution process that was fair and impartial. I invited both parties to present their points of view, facilitated a discussion around potential solutions, and ensured that the final decision was mutually agreed upon. This process not only resolved the disagreement at hand but also boosted team morale and productivity. It also set a precedent for how we handle conflicts in the future, promoting a more cooperative and respectful work environment." },
  },
  {
    question: { summaryText: 'Conflict Resolution', fullText: 'Describe a situation at work where you successfully resolved a conflict' },
    response1: { summaryText: 'As a team leader, I defused a tense situation between two colleagues by arranging a meeting where they could voice their concerns, which led to a mutual agreement and reestablished harmony in the team.', fullText: "I once faced a situation where two colleagues had a disagreement that was disrupting the team's morale and productivity. As the team leader, I felt it was my responsibility to address the issue. So, I arranged a meeting with both individuals, where they had a safe space to voice their concerns and feelings. I made sure to facilitate the discussion in a way that each person felt heard and understood. As a result of this open and respectful dialogue, both parties were able to see the situation from the other person's perspective, leading to a mutual agreement. This reestablished harmony within the team and we were able to move forward with improved communication and understanding." },
    response2: { summaryText: 'By implementing a fair and impartial conflict resolution process, I was able to resolve a major disagreement in my department, which boosted team morale and productivity.', fullText: "In a previous role, I was faced with a major disagreement within my department. The issue had escalated to the point where it was affecting everyone's productivity and morale. I knew that we needed a systematic approach to resolve the issue, so I implemented a conflict resolution process that was fair and impartial. I invited both parties to present their points of view, facilitated a discussion around potential solutions, and ensured that the final decision was mutually agreed upon. This process not only resolved the disagreement at hand but also boosted team morale and productivity. It also set a precedent for how we handle conflicts in the future, promoting a more cooperative and respectful work environment." },
  },
  // add more data as needed
];

const sampleData = {
  question: {
    summaryText: 'This is a summary of the question',
    fullText: 'This is the full text of the question'
  },
  response1: {
    summaryText: 'This is a summary of the first response',
    fullText: 'This is the full text of the first response'
  },
  response2: {
    summaryText: 'This is a summary of the second response',
    fullText: 'This is the full text of the second response'
  }
};

const Dashboard1 = () => {
  const boxData = [
    { title: 'Conflict Resolution', status: 'active' },
    { title: 'Education', status: 'active' },
    { title: 'Sales Experience', status: 'active' },
    { title: 'Leadership', status: 'active' },
    { title: 'Values', status: 'active' },
    { title: 'Work Experience', status: 'active' },
    { title: 'Qualifications', status: 'active' }, 
    { title: 'Conflict Resolution', status: 'active' },
    { title: 'Education', status: 'active' },
    { title: 'Sales Experience', status: 'active' },
    { title: 'Leadership', status: 'active' },
    { title: 'Values', status: 'active' },
    { title: 'Work Experience', status: 'active' },
    { title: 'Qualifications', status: 'active' },
  ];
  return (
    <div className={styles.page}>
      <LeftSidebar />
      <Header boxData={boxData} />
      <div className={styles.mainContent}>
          <ComparisonTable data={data}/>
      </div>
      <FloatingButton />
    </div>
  );
};

export default Dashboard1;
