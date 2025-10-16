export const topics = [
  {
    topicId: "intro_sampling",
    title: "Introduction: Sampling",
    description: "Learn about populations, samples, and sampling methods",
    story: {
      title: "Beach Day Pick-up",
      narrative: "The sun is blazing and I'm itching to hit the waves, but first I need to pick players for tomorrow's field hockey scrimmage. Coach said to grab 10 players from the tryout list—totally random. I close my eyes, shuffle the names in my mind, and point at the list. Fair and square, right?\n\nLater, my teammate Emma asks why I didn't just pick the best players. I explain that we're trying to see how the whole tryout group performs on average, not just stack the deck. Random sampling keeps it honest.\n\nAs we paddle out on our boards, I think about how sampling works everywhere—from picking horses to train, to testing water quality at the beach. It's all about getting a fair snapshot of the bigger picture.",
      imageUrl: "/images/beach-scene.jpg",
      imageAlt: "Teen surfer at the beach with a field hockey stick"
    },
    questions: [
      {
        id: "q1",
        type: "mcq",
        prompt: "When I pick 10 players from the tryout list at random, that's an example of:",
        choices: [
          { id: "a", text: "A biased sample" },
          { id: "b", text: "A random sample" },
          { id: "c", text: "A population" },
          { id: "d", text: "A parameter" }
        ],
        correctChoiceId: "b",
        explanation: "A random sample means each member of the population had an equal chance of being selected. By picking players randomly, you're ensuring fairness and avoiding bias.",
        remedialLesson: {
          title: "What makes a sample random?",
          content: [
            "<strong>Population</strong>: The entire group you want to study (all tryout players)",
            "<strong>Sample</strong>: A subset of the population you actually observe (the 10 selected players)",
            "<strong>Random Sample</strong>: Every member has an equal chance of being selected—like drawing names from a hat",
            "<strong>Why it matters</strong>: Random sampling helps avoid bias and makes your conclusions more reliable"
          ],
          followUpQuestion: {
            id: "q1_retry",
            prompt: "If I only picked players whose last names start with A-M, would that be a random sample?",
            choices: [
              { id: "a", text: "Yes, because some randomness is involved" },
              { id: "b", text: "No, because not everyone has an equal chance" }
            ],
            correctChoiceId: "b",
            explanation: "Players with last names N-Z have zero chance of being selected, so this is NOT random—it's a systematic (and biased) sample."
          }
        },
        hint: "Think about fairness—does everyone have an equal shot?"
      },
      {
        id: "q2",
        type: "mcq",
        prompt: "The entire group of players who tried out is called the:",
        choices: [
          { id: "a", text: "Sample" },
          { id: "b", text: "Population" },
          { id: "c", text: "Statistic" },
          { id: "d", text: "Variable" }
        ],
        correctChoiceId: "b",
        explanation: "The population is the complete group you're interested in studying. In this case, it's ALL the players who tried out for the team.",
        remedialLesson: {
          title: "Population vs. Sample",
          content: [
            "<strong>Population</strong>: The complete set of individuals/items you want to understand",
            "<strong>Sample</strong>: A subset selected from the population for actual study",
            "<strong>Example</strong>: If 50 players tried out (population), and you select 10 (sample), you're using the sample to learn about the population",
            "<strong>Key insight</strong>: We study samples because studying entire populations is often impractical or impossible"
          ],
          followUpQuestion: {
            id: "q2_retry",
            prompt: "If you survey 5 out of 30 horses at the stable about their favorite treat, the 30 horses are the:",
            choices: [
              { id: "a", text: "Sample" },
              { id: "b", text: "Population" }
            ],
            correctChoiceId: "b",
            explanation: "The 30 horses are the complete group (population), while the 5 surveyed horses are your sample."
          }
        },
        hint: "Which term describes the WHOLE group?"
      },
      {
        id: "q3",
        type: "mcq",
        prompt: "I want to know the average height of all players. If I calculate the average for my 10 selected players, that number is a:",
        choices: [
          { id: "a", text: "Parameter" },
          { id: "b", text: "Statistic" },
          { id: "c", text: "Population" },
          { id: "d", text: "Census" }
        ],
        correctChoiceId: "b",
        explanation: "A statistic is a numerical measure calculated from a SAMPLE. Since you calculated the average from your 10 selected players (a sample), it's a statistic.",
        remedialLesson: {
          title: "Parameters vs. Statistics",
          content: [
            "<strong>Parameter</strong>: A number that describes the entire POPULATION (usually unknown)",
            "<strong>Statistic</strong>: A number calculated from a SAMPLE (what we can actually measure)",
            "<strong>Memory trick</strong>: PopulaTION → ParametER (both have weird letters), Sample → StatiSTic (both start with 'S')",
            "<strong>Example</strong>: The TRUE average height of all tryout players is a parameter. Your calculated average from 10 players is a statistic that ESTIMATES the parameter"
          ],
          followUpQuestion: {
            id: "q3_retry",
            prompt: "The actual average jumping height of ALL horses at your stable (if you could measure them all) would be a:",
            choices: [
              { id: "a", text: "Statistic" },
              { id: "b", text: "Parameter" }
            ],
            correctChoiceId: "b",
            explanation: "Since this describes the entire population of horses (not just a sample), it's a parameter."
          }
        },
        hint: "Are you working with the whole group or just a sample?"
      }
    ]
  },
  {
    topicId: "probability_basics",
    title: "Probability Basics",
    description: "Understanding probability, events, and outcomes",
    story: {
      title: "Jump Day Decisions",
      narrative: "Jumping day! My horse, Apollo, is feeling frisky this morning. I've got three jumps set up: the vertical, the oxer, and the scary-looking combination. Based on our training sessions, Apollo clears the vertical 90% of the time, the oxer 75%, and the combination about 60%.\n\nAs I walk the course, I start thinking about my chances. What's the probability we nail all three? What if we mess up just one? My coach always says, 'Plan for success, but understand your odds.'\n\nThis is exactly like the probability problems in AP Stats—except with higher stakes and a thousand-pound animal who has his own opinions about jump day.",
      imageUrl: "/images/horse-jumping.jpg",
      imageAlt: "Horse and rider clearing a jump"
    },
    questions: [
      {
        id: "q4",
        type: "mcq",
        prompt: "If Apollo clears the vertical 90% of the time, what's the probability he knocks it down?",
        choices: [
          { id: "a", text: "0.10" },
          { id: "b", text: "0.90" },
          { id: "c", text: "0.50" },
          { id: "d", text: "1.00" }
        ],
        correctChoiceId: "a",
        explanation: "The probability of the complement event (knocking down) is 1 - 0.90 = 0.10 or 10%. Together, success and failure probabilities must add to 1.",
        remedialLesson: {
          title: "Complementary Events",
          content: [
            "<strong>Complement</strong>: The opposite outcome of an event",
            "<strong>Rule</strong>: P(event) + P(complement) = 1",
            "<strong>Example</strong>: If P(clear) = 0.90, then P(knock down) = 1 - 0.90 = 0.10",
            "<strong>Why it works</strong>: One of these two outcomes MUST happen, so their probabilities cover all possibilities (100%)"
          ],
          followUpQuestion: {
            id: "q4_retry",
            prompt: "If there's a 25% chance of rain tomorrow, what's the probability it won't rain?",
            choices: [
              { id: "a", text: "0.25" },
              { id: "b", text: "0.75" }
            ],
            correctChoiceId: "b",
            explanation: "P(no rain) = 1 - 0.25 = 0.75 or 75%"
          }
        },
        hint: "What must the two outcomes add up to?"
      },
      {
        id: "q5",
        type: "mcq",
        prompt: "Assuming each jump is independent, what's the probability Apollo clears ALL three jumps? (vertical: 0.90, oxer: 0.75, combination: 0.60)",
        choices: [
          { id: "a", text: "0.225" },
          { id: "b", text: "0.405" },
          { id: "c", text: "0.75" },
          { id: "d", text: "2.25" }
        ],
        correctChoiceId: "b",
        explanation: "For independent events, multiply their probabilities: 0.90 × 0.75 × 0.60 = 0.405 or 40.5%",
        remedialLesson: {
          title: "Independent Events & Multiplication Rule",
          content: [
            "<strong>Independent events</strong>: One outcome doesn't affect the other",
            "<strong>Multiplication rule</strong>: P(A AND B) = P(A) × P(B) when events are independent",
            "<strong>Example</strong>: Three independent jumps → multiply: 0.90 × 0.75 × 0.60 = 0.405",
            "<strong>Common mistake</strong>: Don't add probabilities for 'AND'—that's for 'OR' with mutually exclusive events"
          ],
          followUpQuestion: {
            id: "q5_retry",
            prompt: "If you flip a coin twice, what's P(heads on first flip AND heads on second flip)?",
            choices: [
              { id: "a", text: "0.25" },
              { id: "b", text: "0.50" },
              { id: "c", text: "1.00" }
            ],
            correctChoiceId: "a",
            explanation: "P(H and H) = 0.5 × 0.5 = 0.25"
          }
        },
        hint: "For 'AND' with independent events, multiply the probabilities"
      }
    ]
  },
  {
    topicId: "data_collection",
    title: "Data Collection Methods",
    description: "Observational studies, experiments, and survey design",
    story: {
      title: "Field Hockey Strategy Session",
      narrative: "Coach pulled me aside after practice. 'We need to figure out if the new training drill actually improves shot accuracy,' she said. I suggested we track everyone's shots for a week, but she shook her head.\n\n'That's observational—we need a real experiment. Split the team randomly: half do the new drill, half stick with the old one. Then we compare.' It clicked. Just watching isn't enough if we want to prove cause and effect.\n\nLater at the beach, I thought about all the times I've confused correlation with causation. Like how I always see more surfers when there's good weather—but good weather doesn't cause more surfers to exist. They just come out when conditions are right. Understanding the difference between observation and experimentation is huge.",
      imageUrl: "/images/field-hockey.jpg",
      imageAlt: "Field hockey team practicing"
    },
    questions: [
      {
        id: "q6",
        type: "mcq",
        prompt: "Coach's plan to randomly assign players to different drills and compare results is an example of:",
        choices: [
          { id: "a", text: "An observational study" },
          { id: "b", text: "An experiment" },
          { id: "c", text: "A survey" },
          { id: "d", text: "A census" }
        ],
        correctChoiceId: "b",
        explanation: "This is an experiment because the coach is actively imposing treatments (different drills) on randomly assigned groups. Random assignment and treatment control are hallmarks of experiments.",
        remedialLesson: {
          title: "Experiments vs. Observational Studies",
          content: [
            "<strong>Experiment</strong>: Researchers actively impose treatments on subjects and observe outcomes. Can establish cause-and-effect.",
            "<strong>Observational study</strong>: Researchers observe without intervention. Can find associations but NOT causation.",
            "<strong>Key difference</strong>: In experiments, YOU control who gets what treatment (through random assignment)",
            "<strong>Example</strong>: Assigning players to different drills (experiment) vs. watching which players naturally choose different drills (observational)"
          ],
          followUpQuestion: {
            id: "q6_retry",
            prompt: "Surveying students about their study habits and comparing their grades is:",
            choices: [
              { id: "a", text: "An experiment" },
              { id: "b", text: "An observational study" }
            ],
            correctChoiceId: "b",
            explanation: "You're not assigning study habits—you're just observing existing behaviors. This is observational."
          }
        },
        hint: "Is someone actively controlling who gets which treatment?"
      }
    ]
  }
];

export default topics;