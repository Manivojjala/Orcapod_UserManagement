const { test, expect } = require('@playwright/test');
const { AddUserPage }  = require('../pages/AddUserPage');
const { LoginPage } = require('../pages/LoginPage');
const { UserDataFactory } = require('../Test data/TestData');


const factory = new UserDataFactory();

test.describe('Add User Flow', () => {

  test('should navigate, open form and add a new user', async ({ page }) => {

    const addUserPage = new AddUserPage(page);
    const loginPage = new LoginPage(page);
    const user = factory.generateUser();
    console.log('Test Data ', user);

    await addUserPage.goto('http://localhost:4200');
    await loginPage.login('admin', 'admin123');
    await addUserPage.clickAddUser();
    await addUserPage.enterUsername(user.username);
    await addUserPage.enterEmail(user.email);
    await addUserPage.selectJobRoleById(user.jobRoleId);
    await addUserPage.submitForm();
  
  });
});
