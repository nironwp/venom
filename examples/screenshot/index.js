import { Console } from 'console';
import { create } from 'venom-bot';

create(
  'sessionName', //session
  null, //catchQR
  null, //statusFind
  null, //options
  null, //BrowserSessionToken
  (browser, waPage) => {
    // Show broser process ID
    Console.log('Browser PID:', browser.process().pid);
    // Take screenshot before logged-in
    waPage.screenshot({ path: 'before-screenshot.png' });
  }
)
  .then((client) => start(client))
  .catch((erro) => {
    Console.log(erro);
  });

function start(client) {
  // Taks screenshot after logged-in
  client.waPage.screenshot({ path: 'after-screenshot.png' });
}
