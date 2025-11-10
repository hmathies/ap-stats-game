export const topics = [
  {
  topicId: "descriptive_graphs",
  title: "Stem-and-Leaf Graphs, Line Graphs, and Bar Graphs",
  description: "Understanding and interpreting stem-and-leaf graphs (stemplots), line graphs, and bar graphs to visualize data",
  story: {
    title: "Season Reflection",
    narrative: "As team captain of U-32's field hockey team, I'm sitting in AP Stats reviewing our 2025 season. We finished ranked 9th in Vermont with a 13-4-0 record—not bad, but I can't help wondering what separated us from the top teams.\n\nI've been collecting data all season: our opponents' rankings, SAT score trends from college-bound seniors (since I'm applying next year), and random stuff like when Thanksgiving will fall on my birthday again (November 27th—it happened this year!).\n\nMy teacher says the key to understanding data is choosing the right graph. Stem-and-leaf plots show the shape of small datasets. Line graphs reveal trends over time. Bar graphs compare categories. Each tells a different story.\n\nToday's practice: interpreting graphs. Just like reading the field during a game, I need to see the patterns hidden in the numbers.",
    imageUrl: "/images/field-hockey-team.jpg",
    imageAlt: "Field hockey team huddle on field"
  },
  questions: [
    {
      id: "q1",
      type: "mcq",
      prompt: "The team ratings for the top 10 Vermont field hockey teams are: 26.98, 18.67, 16.11, 12.14, 11.03, 10.03, 8.46, 7.57, 6.31, 5.16. If you create a stem-and-leaf plot where the stem represents the tens digit and the leaf represents the ones digit, which stem would have the MOST leaves?",
      supportingImage: {
        type: "html",
        content: `<div style="font-family: 'Courier New', monospace; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 500px; margin: 20px auto;">
  <h3 style="font-family: Arial, sans-serif; text-align: center; color: #333; margin-bottom: 20px;">Stem-and-Leaf Plot: Field Hockey Ratings</h3>
  <table style="margin: 0 auto; border-collapse: collapse; font-size: 16px;">
    <thead>
      <tr>
        <th style="padding: 10px 20px; border-bottom: 2px solid #333; text-align: right; font-weight: bold;">Stem</th>
        <th style="padding: 10px 20px; border-bottom: 2px solid #333; text-align: left; font-weight: bold;">Leaf</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px 20px; text-align: right; border-right: 2px solid #333; font-weight: bold; color: #2c5aa0;">0</td>
        <td style="padding: 8px 20px; color: #4a7c4e; letter-spacing: 8px;">5 6 7 8</td>
      </tr>
      <tr>
        <td style="padding: 8px 20px; text-align: right; border-right: 2px solid #333; font-weight: bold; color: #2c5aa0;">1</td>
        <td style="padding: 8px 20px; color: #4a7c4e; letter-spacing: 8px;">0 1 2 6 8</td>
      </tr>
      <tr>
        <td style="padding: 8px 20px; text-align: right; border-right: 2px solid #333; font-weight: bold; color: #2c5aa0;">2</td>
        <td style="padding: 8px 20px; color: #4a7c4e; letter-spacing: 8px;">6</td>
      </tr>
    </tbody>
  </table>
  <div style="font-family: Arial, sans-serif; margin-top: 20px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; font-size: 12px; color: #555; text-align: center;">
    <strong>Original Data:</strong> 5.16, 6.31, 7.57, 8.46, 10.03, 11.03, 12.14, 16.11, 18.67, 26.98
  </div>
</div>`
      },
      choices: [
        { id: "a", text: "Stem 0" },
        { id: "b", text: "Stem 1" },
        { id: "c", text: "Stem 2" },
        { id: "d", text: "All stems have equal leaves" }
      ],
      correctChoiceId: "b",
      explanation: "Looking at the data, stem 1 (representing 10-19) contains five values: 18.67, 16.11, 12.14, 11.03, and 10.03. Stem 2 has only one value (26.98), and stem 0 has four values (8.46, 7.57, 6.31, 5.16). Therefore, stem 1 has the most leaves.",
      remedialLesson: {
        title: "Reading Stem-and-Leaf Plots",
        content: [
          "<strong>Stem</strong>: The leading digit(s) of a number (e.g., for 26.98, stem = 2)",
          "<strong>Leaf</strong>: The final significant digit (e.g., for 26.98, leaf = 6)",
          "<strong>Purpose</strong>: Shows the distribution and shape of data while keeping actual values visible",
          "<strong>Reading the plot</strong>: Count the leaves on each stem to see where data clusters",
          "<strong>Example</strong>: In ratings 10.03, 11.03, 12.14, all have stem 1, so stem 1 gets three leaves"
        ],
        followUpQuestion: {
          id: "q1_retry",
          prompt: "Given exam scores: 67, 72, 75, 81, 83, 88, 91, 94. Which stem has the most leaves?",
          choices: [
            { id: "a", text: "Stem 6" },
            { id: "b", text: "Stem 7" },
            { id: "c", text: "Stem 8" }
          ],
          correctChoiceId: "c",
          explanation: "Stem 8 has three leaves (81, 83, 88), while stem 6 has one (67), stem 7 has two (72, 75), and stem 9 has two (91, 94)."
        }
      },
      hint: "Group the ratings by their tens digit: 0-9, 10-19, 20-29. Which group has the most numbers?"
    },
    {
      id: "q2",
      type: "mcq",
      prompt: "Based on SAT data by gender from 2017-2022, which statement is TRUE about the trend shown in a line graph of total scores?",
      supportingImage: {
        type: "html",
        content: `<div style="font-family: Arial, sans-serif; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 700px; margin: 20px auto;">
  <h3 style="text-align: center; color: #333; margin-bottom: 20px;">Average Total SAT Scores by Gender (2017-2022)</h3>
  <div style="position: relative; height: 300px; margin: 30px 20px; border-left: 2px solid #333; border-bottom: 2px solid #333;">
    <svg viewBox="0 0 700 300" style="width: 100%; height: 100%;">
      <line x1="0" y1="0" x2="700" y2="0" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="75" x2="700" y2="75" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="150" x2="700" y2="150" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="225" x2="700" y2="225" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="300" x2="700" y2="300" stroke="#e0e0e0" stroke-width="1"/>
      <polyline fill="none" stroke="#2c5aa0" stroke-width="3" points="70,75 245,187.5 420,120 595,165"/>
      <polyline fill="none" stroke="#d64545" stroke-width="3" points="70,225 245,240 420,210 595,277.5"/>
      <circle fill="#2c5aa0" cx="70" cy="75" r="5"/>
      <circle fill="#2c5aa0" cx="245" cy="187.5" r="5"/>
      <circle fill="#2c5aa0" cx="420" cy="120" r="5"/>
      <circle fill="#2c5aa0" cx="595" cy="165" r="5"/>
      <circle fill="#d64545" cx="70" cy="225" r="5"/>
      <circle fill="#d64545" cx="245" cy="240" r="5"/>
      <circle fill="#d64545" cx="420" cy="210" r="5"/>
      <circle fill="#d64545" cx="595" cy="277.5" r="5"/>
    </svg>
    <div style="position: absolute; left: -35px; top: 0; font-size: 11px; color: #666;">1070</div>
    <div style="position: absolute; left: -35px; top: 75px; font-size: 11px; color: #666;">1060</div>
    <div style="position: absolute; left: -35px; top: 150px; font-size: 11px; color: #666;">1050</div>
    <div style="position: absolute; left: -35px; top: 225px; font-size: 11px; color: #666;">1040</div>
    <div style="position: absolute; left: 10%; bottom: -20px; font-size: 11px; color: #666; font-weight: bold;">2017</div>
    <div style="position: absolute; left: 35%; bottom: -20px; font-size: 11px; color: #666; font-weight: bold;">2020</div>
    <div style="position: absolute; left: 60%; bottom: -20px; font-size: 11px; color: #666; font-weight: bold;">2021</div>
    <div style="position: absolute; left: 85%; bottom: -20px; font-size: 11px; color: #666; font-weight: bold;">2022</div>
  </div>
  <div style="display: flex; justify-content: center; gap: 30px; margin: 20px 0; font-size: 14px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 30px; height: 3px; background-color: #2c5aa0;"></div>
      <span>Male</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 30px; height: 3px; background-color: #d64545;"></div>
      <span>Female</span>
    </div>
  </div>
  <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px;">
    <thead>
      <tr>
        <th style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f0f0f0;">Year</th>
        <th style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f0f0f0;">Male</th>
        <th style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f0f0f0;">Female</th>
        <th style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f0f0f0;">Gap</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">2017</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #2c5aa0; font-weight: bold;">1070</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #d64545; font-weight: bold;">1050</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">20</td>
      </tr>
      <tr>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">2020</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #2c5aa0; font-weight: bold;">1055</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #d64545; font-weight: bold;">1048</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">7</td>
      </tr>
      <tr>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">2021</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #2c5aa0; font-weight: bold;">1067</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #d64545; font-weight: bold;">1054</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">13</td>
      </tr>
      <tr>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">2022</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #2c5aa0; font-weight: bold;">1056</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; color: #d64545; font-weight: bold;">1043</td>
        <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">13</td>
      </tr>
    </tbody>
  </table>
</div>`
      },
      choices: [
        { id: "a", text: "Both male and female scores increased consistently from 2017 to 2022" },
        { id: "b", text: "Male scores remained higher than female scores in all years shown" },
        { id: "c", text: "The gender gap (difference) decreased from 2017 to 2022" },
        { id: "d", text: "Female scores showed more stability (less variation) than male scores" }
      ],
      correctChoiceId: "b",
      explanation: "Looking at the data: 2017 (Male 1070 > Female 1050, gap=20), 2020 (1055>1048, gap=7), 2021 (1067>1054, gap=13), 2022 (1056>1043, gap=13). Males scored higher in all years shown, making choice B correct. The gaps varied (20→7→13→13), so the gap didn't consistently decrease. Neither gender showed consistent increases, and variation was similar for both.",
      remedialLesson: {
        title: "Interpreting Line Graphs for Trends",
        content: [
          "<strong>Line graphs</strong>: Connect data points to show changes over time",
          "<strong>Trend analysis</strong>: Look for patterns—increasing, decreasing, or stable",
          "<strong>Comparing lines</strong>: Which line is higher? Are they converging or diverging?",
          "<strong>Common mistake</strong>: Don't assume a single year's change represents the overall trend",
          "<strong>Example</strong>: If Line A is above Line B for all years, then A is consistently higher than B"
        ],
        followUpQuestion: {
          id: "q2_retry",
          prompt: "If Team A's wins are: 12, 14, 13, 15 and Team B's wins are: 10, 11, 9, 12, which is true?",
          choices: [
            { id: "a", text: "Team A had more wins every season" },
            { id: "b", text: "Both teams showed consistent improvement" }
          ],
          correctChoiceId: "a",
          explanation: "Team A had more wins in all four seasons (12>10, 14>11, 13>9, 15>12). Neither showed consistent improvement since both had fluctuating values."
        }
      },
      hint: "Compare the male and female values for each year. Is one consistently higher than the other?"
    },
    {
      id: "q3",
      type: "mcq",
      prompt: "Over the next 75 years (2025-2100), Thanksgiving will fall on different dates. The frequency distribution is:\n\nNov 22: 11 years | Nov 23: 10 years | Nov 24: 10 years\nNov 25: 12 years | Nov 26: 11 years | Nov 27: 12 years | Nov 28: 10 years\n\nIf you create a bar graph showing these frequencies, which statement is most accurate?",
      supportingImage: {
        type: "html",
        content: `<div style="font-family: Arial, sans-serif; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 600px; margin: 20px auto;">
  <h3 style="text-align: center; color: #333; margin-bottom: 20px;">Thanksgiving Date Frequency (2025-2100)</h3>
  <div style="position: relative; height: 300px; margin: 30px 20px; border-left: 2px solid #333; border-bottom: 2px solid #333;">
    <svg viewBox="0 0 700 300" style="width: 100%; height: 100%;">
      <line x1="0" y1="0" x2="700" y2="0" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="75" x2="700" y2="75" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="150" x2="700" y2="150" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="225" x2="700" y2="225" stroke="#e0e0e0" stroke-width="1"/>
      <line x1="0" y1="300" x2="700" y2="300" stroke="#e0e0e0" stroke-width="1"/>
      <rect x="30" y="37.5" width="70" height="262.5" fill="#4a7c4e" opacity="0.8"/>
      <rect x="120" y="75" width="70" height="225" fill="#4a7c4e" opacity="0.8"/>
      <rect x="210" y="75" width="70" height="225" fill="#4a7c4e" opacity="0.8"/>
      <rect x="300" y="0" width="70" height="300" fill="#2c5aa0" opacity="0.8"/>
      <rect x="390" y="37.5" width="70" height="262.5" fill="#4a7c4e" opacity="0.8"/>
      <rect x="480" y="0" width="70" height="300" fill="#2c5aa0" opacity="0.8"/>
      <rect x="570" y="75" width="70" height="225" fill="#4a7c4e" opacity="0.8"/>
    </svg>
    <div style="position: absolute; left: -25px; top: 0; font-size: 11px; color: #666;">12</div>
    <div style="position: absolute; left: -25px; top: 75px; font-size: 11px; color: #666;">10</div>
    <div style="position: absolute; left: -25px; top: 150px; font-size: 11px; color: #666;">8</div>
    <div style="position: absolute; left: -25px; top: 225px; font-size: 11px; color: #666;">6</div>
    <div style="position: absolute; left: -25px; top: 300px; font-size: 11px; color: #666;">0</div>
    <div style="position: absolute; left: 9%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 22</div>
    <div style="position: absolute; left: 20%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 23</div>
    <div style="position: absolute; left: 31%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 24</div>
    <div style="position: absolute; left: 42%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 25</div>
    <div style="position: absolute; left: 53%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 26</div>
    <div style="position: absolute; left: 64%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 27</div>
    <div style="position: absolute; left: 75%; bottom: -25px; font-size: 10px; color: #666; text-align: center; width: 70px;">Nov 28</div>
  </div>
  <table style="width: 100%; border-collapse: collapse; margin-top: 40px; font-size: 13px;">
    <thead>
      <tr>
        <th style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f0f0f0;">Date</th>
        <th style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f0f0f0;">Frequency</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">November 22</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">11 years</td>
      </tr>
      <tr>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">November 23</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">10 years</td>
      </tr>
      <tr>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">November 24</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">10 years</td>
      </tr>
      <tr style="background-color: #e8f4f8;">
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd; font-weight: bold;">November 25</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd; font-weight: bold;">12 years</td>
      </tr>
      <tr>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">November 26</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">11 years</td>
      </tr>
      <tr style="background-color: #e8f4f8;">
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd; font-weight: bold;">November 27</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd; font-weight: bold;">12 years</td>
      </tr>
      <tr>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">November 28</td>
        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">10 years</td>
      </tr>
    </tbody>
  </table>
</div>`
      },
      choices: [
        { id: "a", text: "November 25 and 27 would have the tallest bars with equal heights" },
        { id: "b", text: "The bars would show Thanksgiving occurs more frequently in late November (25-28) than early November (22-24)" },
        { id: "c", text: "All bars would be approximately the same height, showing uniform distribution" },
        { id: "d", text: "November 23, 24, and 28 would form the three shortest bars" }
      ],
      correctChoiceId: "a",
      explanation: "November 25 and November 27 both occur 12 times, which is the highest frequency, so they would have the tallest bars with equal heights. The distribution is relatively uniform (10-12 years each), not concentrated in late November. November 23, 24, and 28 all have 10 occurrences—tied for shortest but equal to each other.",
      remedialLesson: {
        title: "Reading Bar Graphs",
        content: [
          "<strong>Bar graphs</strong>: Compare quantities across different categories using bar heights",
          "<strong>Height = value</strong>: Taller bars represent larger values",
          "<strong>Comparison</strong>: Look for the tallest/shortest bars and similar heights",
          "<strong>Distribution</strong>: Are values clustered or spread evenly?",
          "<strong>Example</strong>: If Category A has 15 and Category B has 8, A's bar is taller"
        ],
        followUpQuestion: {
          id: "q3_retry",
          prompt: "If goals scored by players are: Alex (12), Sam (12), Jordan (9), Casey (15), which statement is true?",
          choices: [
            { id: "a", text: "Casey's bar would be tallest, Alex and Sam's bars would be equal" },
            { id: "b", text: "All bars would be the same height" }
          ],
          correctChoiceId: "a",
          explanation: "Casey scored the most (15), so that bar is tallest. Alex and Sam both scored 12, so their bars would be equal in height."
        }
      },
      hint: "Find the two dates with the highest frequency (most years). Do they have the same frequency?"
    }
  ]
},
  {
    topicId: "intro_sampling",
    title: "Introduction: Sampling",
    description: "Learn about populations, samples, and sampling methods",
    story: {
      title: "Beach Day Pick-up",
      narrative:
        "The sun is blazing and I'm itching to hit the waves, but first I need to pick players for tomorrow's field hockey scrimmage. Coach said to grab 10 players from the tryout list—totally random. I close my eyes, shuffle the names in my mind, and point at the list. Fair and square, right?\n\nLater, my teammate Emma asks why I didn't just pick the best players. I explain that we're trying to see how the whole tryout group performs on average, not just stack the deck. Random sampling keeps it honest.\n\nAs we paddle out on our boards, I think about how sampling works everywhere—from picking horses to train, to testing water quality at the beach. It's all about getting a fair snapshot of the bigger picture.",
      imageUrl: "/images/beach-scene.jpg",
      imageAlt: "Teen surfer at the beach with a field hockey stick",
    },
    questions: [
      {
        id: "q1",
        type: "mcq",
        prompt:
          "When I pick 10 players from the tryout list at random, that's an example of:",
        choices: [
          { id: "a", text: "A biased sample" },
          { id: "b", text: "A random sample" },
          { id: "c", text: "A population" },
          { id: "d", text: "A parameter" },
        ],
        correctChoiceId: "b",
        explanation:
          "A random sample means each member of the population had an equal chance of being selected. By picking players randomly, you're ensuring fairness and avoiding bias.",
        remedialLesson: {
          title: "What makes a sample random?",
          content: [
            "<strong>Population</strong>: The entire group you want to study (all tryout players)",
            "<strong>Sample</strong>: A subset of the population you actually observe (the 10 selected players)",
            "<strong>Random Sample</strong>: Every member has an equal chance of being selected—like drawing names from a hat",
            "<strong>Why it matters</strong>: Random sampling helps avoid bias and makes your conclusions more reliable",
          ],
          followUpQuestion: {
            id: "q1_retry",
            prompt:
              "If I only picked players whose last names start with A-M, would that be a random sample?",
            choices: [
              { id: "a", text: "Yes, because some randomness is involved" },
              { id: "b", text: "No, because not everyone has an equal chance" },
            ],
            correctChoiceId: "b",
            explanation:
              "Players with last names N-Z have zero chance of being selected, so this is NOT random—it's a systematic (and biased) sample.",
          },
        },
        hint: "Think about fairness—does everyone have an equal shot?",
      },
      {
        id: "q2",
        type: "mcq",
        prompt: "The entire group of players who tried out is called the:",
        choices: [
          { id: "a", text: "Sample" },
          { id: "b", text: "Population" },
          { id: "c", text: "Statistic" },
          { id: "d", text: "Variable" },
        ],
        correctChoiceId: "b",
        explanation:
          "The population is the complete group you're interested in studying. In this case, it's ALL the players who tried out for the team.",
        remedialLesson: {
          title: "Population vs. Sample",
          content: [
            "<strong>Population</strong>: The complete set of individuals/items you want to understand",
            "<strong>Sample</strong>: A subset selected from the population for actual study",
            "<strong>Example</strong>: If 50 players tried out (population), and you select 10 (sample), you're using the sample to learn about the population",
            "<strong>Key insight</strong>: We study samples because studying entire populations is often impractical or impossible",
          ],
          followUpQuestion: {
            id: "q2_retry",
            prompt:
              "If you survey 5 out of 30 horses at the stable about their favorite treat, the 30 horses are the:",
            choices: [
              { id: "a", text: "Sample" },
              { id: "b", text: "Population" },
            ],
            correctChoiceId: "b",
            explanation:
              "The 30 horses are the complete group (population), while the 5 surveyed horses are your sample.",
          },
        },
        hint: "Which term describes the WHOLE group?",
      },
      {
        id: "q3",
        type: "mcq",
        prompt:
          "I want to know the average height of all players. If I calculate the average for my 10 selected players, that number is a:",
        choices: [
          { id: "a", text: "Parameter" },
          { id: "b", text: "Statistic" },
          { id: "c", text: "Population" },
          { id: "d", text: "Census" },
        ],
        correctChoiceId: "b",
        explanation:
          "A statistic is a numerical measure calculated from a SAMPLE. Since you calculated the average from your 10 selected players (a sample), it's a statistic.",
        remedialLesson: {
          title: "Parameters vs. Statistics",
          content: [
            "<strong>Parameter</strong>: A number that describes the entire POPULATION (usually unknown)",
            "<strong>Statistic</strong>: A number calculated from a SAMPLE (what we can actually measure)",
            "<strong>Memory trick</strong>: PopulaTION → ParametER (both have weird letters), Sample → StatiSTic (both start with 'S')",
            "<strong>Example</strong>: The TRUE average height of all tryout players is a parameter. Your calculated average from 10 players is a statistic that ESTIMATES the parameter",
          ],
          followUpQuestion: {
            id: "q3_retry",
            prompt:
              "The actual average jumping height of ALL horses at your stable (if you could measure them all) would be a:",
            choices: [
              { id: "a", text: "Statistic" },
              { id: "b", text: "Parameter" },
            ],
            correctChoiceId: "b",
            explanation:
              "Since this describes the entire population of horses (not just a sample), it's a parameter.",
          },
        },
        hint: "Are you working with the whole group or just a sample?",
      },
    ],
  },
  {
    topicId: "probability_basics",
    title: "Probability Basics",
    description: "Understanding probability, events, and outcomes",
    story: {
      title: "Jump Day Decisions",
      narrative:
        "Jumping day! My horse, Apollo, is feeling frisky this morning. I've got three jumps set up: the vertical, the oxer, and the scary-looking combination. Based on our training sessions, Apollo clears the vertical 90% of the time, the oxer 75%, and the combination about 60%.\n\nAs I walk the course, I start thinking about my chances. What's the probability we nail all three? What if we mess up just one? My coach always says, 'Plan for success, but understand your odds.'\n\nThis is exactly like the probability problems in AP Stats—except with higher stakes and a thousand-pound animal who has his own opinions about jump day.",
      imageUrl: "/images/horse-jumping.jpg",
      imageAlt: "Horse and rider clearing a jump",
    },
    questions: [
      {
        id: "q4",
        type: "mcq",
        prompt:
          "If Apollo clears the vertical 90% of the time, what's the probability he knocks it down?",
        choices: [
          { id: "a", text: "0.10" },
          { id: "b", text: "0.90" },
          { id: "c", text: "0.50" },
          { id: "d", text: "1.00" },
        ],
        correctChoiceId: "a",
        explanation:
          "The probability of the complement event (knocking down) is 1 - 0.90 = 0.10 or 10%. Together, success and failure probabilities must add to 1.",
        remedialLesson: {
          title: "Complementary Events",
          content: [
            "<strong>Complement</strong>: The opposite outcome of an event",
            "<strong>Rule</strong>: P(event) + P(complement) = 1",
            "<strong>Example</strong>: If P(clear) = 0.90, then P(knock down) = 1 - 0.90 = 0.10",
            "<strong>Why it works</strong>: One of these two outcomes MUST happen, so their probabilities cover all possibilities (100%)",
          ],
          followUpQuestion: {
            id: "q4_retry",
            prompt:
              "If there's a 25% chance of rain tomorrow, what's the probability it won't rain?",
            choices: [
              { id: "a", text: "0.25" },
              { id: "b", text: "0.75" },
            ],
            correctChoiceId: "b",
            explanation: "P(no rain) = 1 - 0.25 = 0.75 or 75%",
          },
        },
        hint: "What must the two outcomes add up to?",
      },
      {
        id: "q5",
        type: "mcq",
        prompt:
          "Assuming each jump is independent, what's the probability Apollo clears ALL three jumps? (vertical: 0.90, oxer: 0.75, combination: 0.60)",
        choices: [
          { id: "a", text: "0.225" },
          { id: "b", text: "0.405" },
          { id: "c", text: "0.75" },
          { id: "d", text: "2.25" },
        ],
        correctChoiceId: "b",
        explanation:
          "For independent events, multiply their probabilities: 0.90 × 0.75 × 0.60 = 0.405 or 40.5%",
        remedialLesson: {
          title: "Independent Events & Multiplication Rule",
          content: [
            "<strong>Independent events</strong>: One outcome doesn't affect the other",
            "<strong>Multiplication rule</strong>: P(A AND B) = P(A) × P(B) when events are independent",
            "<strong>Example</strong>: Three independent jumps → multiply: 0.90 × 0.75 × 0.60 = 0.405",
            "<strong>Common mistake</strong>: Don't add probabilities for 'AND'—that's for 'OR' with mutually exclusive events",
          ],
          followUpQuestion: {
            id: "q5_retry",
            prompt:
              "If you flip a coin twice, what's P(heads on first flip AND heads on second flip)?",
            choices: [
              { id: "a", text: "0.25" },
              { id: "b", text: "0.50" },
              { id: "c", text: "1.00" },
            ],
            correctChoiceId: "a",
            explanation: "P(H and H) = 0.5 × 0.5 = 0.25",
          },
        },
        hint: "For 'AND' with independent events, multiply the probabilities",
      },
    ],
  },
  {
    topicId: "data_collection",
    title: "Data Collection Methods",
    description: "Observational studies, experiments, and survey design",
    story: {
      title: "Field Hockey Strategy Session",
      narrative:
        "Coach pulled me aside after practice. 'We need to figure out if the new training drill actually improves shot accuracy,' she said. I suggested we track everyone's shots for a week, but she shook her head.\n\n'That's observational—we need a real experiment. Split the team randomly: half do the new drill, half stick with the old one. Then we compare.' It clicked. Just watching isn't enough if we want to prove cause and effect.\n\nLater at the beach, I thought about all the times I've confused correlation with causation. Like how I always see more surfers when there's good weather—but good weather doesn't cause more surfers to exist. They just come out when conditions are right. Understanding the difference between observation and experimentation is huge.",
      imageUrl: "/images/field-hockey.jpg",
      imageAlt: "Field hockey team practicing",
    },
    questions: [
      {
        id: "q6",
        type: "mcq",
        prompt:
          "Coach's plan to randomly assign players to different drills and compare results is an example of:",
        choices: [
          { id: "a", text: "An observational study" },
          { id: "b", text: "An experiment" },
          { id: "c", text: "A survey" },
          { id: "d", text: "A census" },
        ],
        correctChoiceId: "b",
        explanation:
          "This is an experiment because the coach is actively imposing treatments (different drills) on randomly assigned groups. Random assignment and treatment control are hallmarks of experiments.",
        remedialLesson: {
          title: "Experiments vs. Observational Studies",
          content: [
            "<strong>Experiment</strong>: Researchers actively impose treatments on subjects and observe outcomes. Can establish cause-and-effect.",
            "<strong>Observational study</strong>: Researchers observe without intervention. Can find associations but NOT causation.",
            "<strong>Key difference</strong>: In experiments, YOU control who gets what treatment (through random assignment)",
            "<strong>Example</strong>: Assigning players to different drills (experiment) vs. watching which players naturally choose different drills (observational)",
          ],
          followUpQuestion: {
            id: "q6_retry",
            prompt:
              "Surveying students about their study habits and comparing their grades is:",
            choices: [
              { id: "a", text: "An experiment" },
              { id: "b", text: "An observational study" },
            ],
            correctChoiceId: "b",
            explanation:
              "You're not assigning study habits—you're just observing existing behaviors. This is observational.",
          },
        },
        hint: "Is someone actively controlling who gets which treatment?",
      },
    ],
  },
];

export default topics;
