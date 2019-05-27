import { Selector } from 'testcafe';


// selectors
const title = Selector('h1');
const par = Selector('p');

fixture('Test')
  .page('http://localhost:5000');

test('Test', async (t) => {
  // check title, add job button, table rows, and job exists
  await t
    .expect(title.innerText).eql('Hello Express')
    await t
.debug()
    .expect(par.innerText).eql('Hello Express')

});