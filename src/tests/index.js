import { Selector, ClientFunction } from 'testcafe';

const title = Selector('h4');
const addTodoButton = Selector('a.btn.btn-primary');
const getLocation = ClientFunction(() => document.location.href)


fixture('Test')
  .page('http://localhost:5000');

test('Test_Landing_Page', async (t) => {
  await t
    .expect(title.innerText).eql('My Todo List')
    .expect(addTodoButton.innerText).eql('Add ToDo')
});

test('New_Todo', async (t) => {
    await t
    .click(addTodoButton) 
    // test that new route is /new
    .expect(getLocation()).match(/.*\/new*/)
    // fill form on the new page
    await t
    .typeText('input[name="title"]', 'Eat Food')
    .typeText('input[name="time"]', '3pm')
    .click(Selector('button[type="submit"]'))
    // expect the action to direct back to the home route
    .expect(getLocation()).match(/.*\/*/)
});

// the method below makes use of the DOM selectors
test.skip('New_Todo_Second_Method', async (t) => {
    await t
    .click(Selector('body > div > div.row.area > div.col-md-8 > div > a'))
    // test that new route is /new
    .expect(getLocation()).match(/.*\/new*/)
    // fill form on the new page
    await t
    .typeText(Selector('body > div > div > div.col-md-8 > div > form > div:nth-child(1) > input'), 
    'Eat Food', { replace: true })
    .typeText(Selector('body > div > div > div.col-md-8 > div > form > div:nth-child(2) > input'), 
    '3pm', { replace: true })
    .click(Selector('body > div > div > div.col-md-8 > div > form > button'))
    // expect the action to direct back to the home route
    .expect(getLocation()).match(/.*\/*/)
});

