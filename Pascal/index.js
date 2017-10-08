/*
  CONGRATULATIONS on creating your first Botpress bot!

  This is the programmatic entry point of your bot.
  Your bot's logic resides here.

  Here's the next steps for you:
  1. Read this file to understand how this simple bot works
  2. Read the `content.yml` file to understand how messages are sent
  3. Install a connector module (Facebook Messenger and/or Slack)
  4. Customize your bot!

  Happy bot building!

  The Botpress Team
  ----
  Getting Started (Youtube Video): https://www.youtube.com/watch?v=HTpUmDz9kRY
  Documentation: https://docs.botpress.io/
  Our Slack Community: https://slack.botpress.io
*/

module.exports = function(bp) {

bp.middlewares.load()

bp.hear(/stop|arrêt/i, (event, next) => {
 const convo = bp.convo.find(event)
 convo && convo.stop('conversation arrêtée')
})

// -------------- Welcome message with 2 quick replies responses: Salut, Tu vas bien ?  ----------------
bp.hear(/GET_STARTED|salut|cc|coucou|bonjour|bonsoir|hey|hi|hello|hola/i, (event, next) => {

  const txt = txt => bp.messenger.createText(event.user.id, txt)

  bp.convo.start(event, convo => {
      convo.threads['default'].addMessage('#welcome', [
        {
          pattern: 'WELCOME.B1',
          callback: () => {
            convo.say(txt('Sympa ;)'))
            convo.switchTo('bye')
          }
        },
        {
          pattern: 'WELCOME.B2',
          callback: () => {
            convo.say(txt('Ohhh...'))
            convo.switchTo('bye')
          }
        }
      ])

      convo.createThread('bye')
      convo.threads['bye'].addMessage('#goodbye')


    })
  })
}

/*
  event.reply('#welcome') // See the file `content.yml` to see the block

})
bp.hear('WELCOME.B1', (event, next) => {
  event.reply('#welome_reply', { welcome_res: 'Sympa ;)' })
})
bp.hear('WELCOME.B2', (event, next) => {
  event.reply('#welcome_reply', { welcome_res: 'Ohhh... J espère qu il n y a eu rien de grave' })
})



  // You can also pass a matcher object to better filter events
  bp.hear({
    type: /message|text/i,
    text: /exit|bye|goodbye|quit|done|leave|stop|bislema/i
  }, (event, next) => {
    event.reply('#goodbye', {
      // You can pass data to the UMM bloc!
      reason: 'unknown'
    })
  })
}
*/
