import styles from "./Dashboard1.module.css";
import Dropdown from '../components/Dropdown';

const Dashboard1 = () => {
  return (
    <div className={styles.dashboard1}>
      <div className={styles.dashboard}>
        <div className={styles.candidateChoiceParent}>
          <div className={styles.candidateChoice}>
            <Dropdown options={['Viktor Tsvil', 'Yuehan Zeng']} iconUrl=""/>
            <Dropdown options={['Georgi Sokolov']} iconUrl=""/>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.contentTable}>
            <div className={styles.entryAndDivider}>
              <div className={styles.tableEntrySummary}>
                <div className={styles.frameParent}>
                  <div className={styles.aiIcon1Parent}>
                    <img
                      className={styles.aiIcon1}
                      alt=""
                      src="/ai-icon-1@2x.png"
                    />
                    <img
                      className={styles.iconStars}
                      alt=""
                      src="/-icon-stars.svg"
                    />
                    <b className={styles.conflictResolution}>
                      Conflict Resolution
                    </b>
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <b className={styles.asATeam}>
                  As a team leader, I defused a tense situation between two
                  colleagues by arranging a meeting where they could voice their
                  concerns, which led to a mutual agreement and reestablished
                  harmony in the team.
                </b>
                <b className={styles.asATeam}>
                  By implementing a fair and impartial conflict resolution
                  process, I was able to resolve a major disagreement in my
                  department, which boosted team morale and productivity.
                </b>
              </div>
              <div className={styles.entryAndDividerChild} />
            </div>
            <div className={styles.entryAndDivider}>
              <div className={styles.tableEntrySummary}>
                <div className={styles.frameParent}>
                  <div className={styles.aiIcon1Parent}>
                    <img
                      className={styles.aiIcon1}
                      alt=""
                      src="/ai-icon-1@2x.png"
                    />
                    <img
                      className={styles.iconStars}
                      alt=""
                      src="/-icon-stars.svg"
                    />
                    <b className={styles.conflictResolution}>
                      Conflict Resolution
                    </b>
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <b className={styles.asATeam}>
                  As a team leader, I defused a tense situation between two
                  colleagues by arranging a meeting where they could voice their
                  concerns, which led to a mutual agreement and reestablished
                  harmony in the team.
                </b>
                <b className={styles.asATeam}>
                  By implementing a fair and impartial conflict resolution
                  process, I was able to resolve a major disagreement in my
                  department, which boosted team morale and productivity.
                </b>
              </div>
              <div className={styles.entryAndDividerChild} />
            </div>
            <div className={styles.entryAndDivider}>
              <div className={styles.tableEntrySummary}>
                <div className={styles.frameParent}>
                  <div className={styles.aiIcon1Parent}>
                    <img
                      className={styles.aiIcon1}
                      alt=""
                      src="/ai-icon-1@2x.png"
                    />
                    <img
                      className={styles.iconStars}
                      alt=""
                      src="/-icon-stars1.svg"
                    />
                    <b className={styles.conflictResolution}>
                      Conflict Resolution
                    </b>
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <b className={styles.asATeam}>
                  As a team leader, I defused a tense situation between two
                  colleagues by arranging a meeting where they could voice their
                  concerns, which led to a mutual agreement and reestablished
                  harmony in the team.
                </b>
                <b className={styles.asATeam}>
                  By implementing a fair and impartial conflict resolution
                  process, I was able to resolve a major disagreement in my
                  department, which boosted team morale and productivity.
                </b>
              </div>
              <div className={styles.entryAndDividerChild} />
            </div>
            <div className={styles.entryAndDivider3}>
              <div className={styles.tableEntrySummary3}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent}>
                    <div className={styles.conflictResolutionWrapper}>
                      <b className={styles.conflictResolution}>
                        Conflict Resolution
                      </b>
                    </div>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector4.svg"
                    />
                  </div>
                  <div className={styles.describeASituationAtWorkWWrapper}>
                    <div className={styles.asATeam}>
                      Describe a situation at work when you successfully
                      resolved a conflict.
                    </div>
                  </div>
                </div>
                <div className={styles.asATeam}>
                  I once faced a situation where two colleagues had a
                  disagreement that was disrupting the team's morale and
                  productivity. As the team leader, I felt it was my
                  responsibility to address the issue. So, I arranged a meeting
                  with both individuals, where they had a safe space to voice
                  their concerns and feelings. I made sure to facilitate the
                  discussion in a way that each person felt heard and
                  understood. As a result of this open and respectful dialogue,
                  both parties were able to see the situation from the other
                  person's perspective, leading to a mutual agreement. This
                  reestablished harmony within the team and we were able to move
                  forward with improved communication and understanding.
                </div>
                <div className={styles.asATeam}>
                  In a previous role, I was faced with a major disagreement
                  within my department. The issue had escalated to the point
                  where it was affecting everyone's productivity and morale. I
                  knew that we needed a systematic approach to resolve the
                  issue, so I implemented a conflict resolution process that was
                  fair and impartial. I invited both parties to present their
                  points of view, facilitated a discussion around potential
                  solutions, and ensured that the final decision was mutually
                  agreed upon. This process not only resolved the disagreement
                  at hand but also boosted team morale and productivity. It also
                  set a precedent for how we handle conflicts in the future,
                  promoting a more cooperative and respectful work environment.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stickyTop}>
          <div className={styles.compareCandidatesUsing}>
            compare candidates using ai
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.instanceParent}>
              <button className={styles.conflictResolutionContainer}>
                <div className={styles.conflictResolution4}>
                  Conflict Resolution
                </div>
              </button>
              <div className={styles.conflictResolutionFrame}>
                <div className={styles.conflictResolution}>Education</div>
              </div>
              <div className={styles.conflictResolutionWrapper1}>
                <div className={styles.conflictResolution}>
                  Sales Experience
                </div>
              </div>
              <div className={styles.conflictResolutionWrapper1}>
                <div className={styles.conflictResolution}>Leadership</div>
              </div>
              <div className={styles.conflictResolutionFrame}>
                <div className={styles.conflictResolution}>Values</div>
              </div>
              <div className={styles.conflictResolutionWrapper1}>
                <div className={styles.conflictResolution}>Work Experience</div>
              </div>
              <div className={styles.conflictResolutionWrapper1}>
                <div className={styles.conflictResolution}>Qualifications</div>
              </div>
            </div>
            <div className={styles.instanceGroup}>
              <div className={styles.conflictResolutionWrapper6}>
                <div className={styles.conflictResolution}>Role Play</div>
              </div>
              <div className={styles.conflictResolutionWrapper6}>
                <div className={styles.conflictResolution}>Location</div>
              </div>
              <div className={styles.conflictResolutionWrapper8}>
                <div className={styles.conflictResolution}>
                  Work Preferences
                </div>
              </div>
              <div className={styles.conflictResolutionWrapper6}>
                <div className={styles.conflictResolution}>
                  Social Media Skills
                </div>
              </div>
              <div className={styles.conflictResolutionWrapper6}>
                <div className={styles.conflictResolution}>Teamwork</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sideMenuDrawer}>
          <div className={styles.menuTop}>
            <a className={styles.taitaBlobFullPurple1} />
            <Dropdown options={['ed-sales-02']} iconUrl="/vector.svg"/>
            <div className={styles.menuItems}>
              <div className={styles.dataParent}>
                <div className={styles.conflictResolution}>data</div>
                <button className={styles.candidates} id="canidates_button">
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.iconPeople}
                      alt=""
                      src="/iconpeople.svg"
                    />
                    <div className={styles.candidates1}>Candidates</div>
                  </div>
                </button>
              </div>
              <div className={styles.dataParent}>
                <div className={styles.conflictResolution}>analysis</div>
                <div className={styles.analysisItems}>
                  <button className={styles.comparisons} id="comparions_button">
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.iconArrows}
                        alt=""
                        src="/iconarrows.svg"
                      />
                      <div className={styles.candidates1}>Comparisons</div>
                    </div>
                  </button>
                  <div className={styles.conflictResolutionWrapper}>
                    <button
                      className={styles.iconChatBubbleParent}
                      id="ai_chat_button"
                    >
                      <img
                        className={styles.iconPeople}
                        alt=""
                        src="/-icon-chat-bubble.svg"
                      />
                      <div className={styles.candidates1}>AI Chat</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menuBottomLogin}>
            <div className={styles.avatarParent}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.nameEmail}>
                <div className={styles.conflictResolution}>
                  Ivanna Kreshchenetska
                </div>
                <div className={styles.ivannakreschenetskagmailcom}>
                  ivanna.kreschenetska@gmail.com
                </div>
              </div>
            </div>
            <button className={styles.dotMenu} id="settings_button">
              <div className={styles.dotMenuChild} />
              <div className={styles.dotMenuChild} />
              <div className={styles.dotMenuChild} />
            </button>
          </div>
        </div>
        <button className={styles.iconAddCircle} id="float_cta">
          <img className={styles.vectorIcon10} alt="" />
          <img className={styles.vectorIcon11} alt="" src="/vector6.svg" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard1;