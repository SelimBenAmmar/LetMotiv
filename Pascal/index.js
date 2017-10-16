module.exports = function(bp) {
  /* Welcome message with :
  (1) quick replies about feeling good or bad
  (2) quick replies about student's role
   */
  bp.hear(/GET_STARTED|Salut|Coucou|coucou|salut|slt|hi/i, (event, next) => {
    event.reply('#welcome');
  });
  bp.hear('QR_FEELING_GOOD', (event, next) => {
    event.reply('#R+_welcome', { activity_name: "l'Orient Express" });
  });
  bp.hear('QR_FEELING_BAD', (event, next) => {
    event.reply('#R-_welcome', { activity_name: "l'Orient Express" });
  });
  bp.hear('QR_ROLE_COORDINATOR', (event, next) => {
    event.reply('Q_NumberOfQuestionsToAsk', { number_of_questions_to_ask: 5 });
  });

  // -----------------------------------------------------------------------
  // How many questions we will ask to the student
  bp.hear('QR_NB_OF_QUESTIONS+' | 'QR_NB_OF_QUESTIONS++', (event, next) => {
    event.reply('Q_LikeTheActivity', { activity_name: "l'Orient Express" });
  });

  // -----------------------------------------------------------------------
  // Did you like the activity?
  bp.hear('QR_LKE_ACTIVITY', (event, next) => {
    event.reply('#R+_LikeTheActivity', { activity_name: "l'Orient Express" });
  });

  bp.hear('QR_DISLIKE_ACTIVITY', (event, next) => {
    event.reply('#R-_LikeTheActivity', {
      user_role: 'coordinateur',
      activity_name: "l'Orient Express",
    });
  });

  //-------------------------------------------------------------------------
  // Last minute difficulties response + group goal question
  bp.hear('QR_LAST_MINUTE_DIFFICULTIES', (event, next) => {
    event.reply('#R+_lastMinuteDifficulties');
  });
  bp.hear('QR_NO_LAST_MINUTE_DIFFICULTIES', (event, next) => {
    event.reply('#R-_lastMinuteDifficulties');
  });
  bp.hear('QR_KEEP_CALM_1' | 'QR_KEEP_CALM_2', (event, next) => {
    event.reply('#R+_12_lastMinuteDifficulties');
  });
  bp.hear('QR_KEEP_CALM_3' | 'QR_KEEP_CALM_4', (event, next) => {
    event.reply('#R+_34_lastMinuteDifficulties');
  });
  bp.hear('QR_GROUP_GOAL_NOT_ENOUGH', (event, next) => {
    event.reply('#R-_GroupGoal');
  });
  bp.hear('QR_GROUP_GOAL_OH_YES', (event, next) => {
    event.reply('#Q_Deadlines');
  });

  // Group goal response and respecting deadline question
  bp.hear(' QR_RESPECTING_DEADLINES_YES', (event, next) => {
    event.reply('#R+_Deadlines');
  });
  bp.hear(' QR_RESPECTING_DEADLINES_NO', (event, next) => {
    event.reply('#R-_Deadlines');
  });

  // Respecting deadlines response and question about feedback to the responsible of communication
  bp.hear('QR_FEEDBACK_RESPO_COMMUNICATION_1' | 'QR_FEEDBACK_RESPO_COMMUNICATION_2' | 'QR_FEEDBACK_RESPO_COMMUNICATION_3' | 'QR_FEEDBACK_RESPO_COMMUNICATION_4', (event, next) => {
    event.reply('#Graph_Goodbye');
  });


};

/*
// You can also pass a matcher object to better filter events
bp.hear(
 {
   type: /message|text/i,
   text: /exit|bye|goodbye|quit|done|leave|stop/i,
 },
 (event, next) => {
   event.reply('#goodbye', {
     // You can pass data to the UMM bloc!
     reason: 'unknown',
   });
 }
);
*/
