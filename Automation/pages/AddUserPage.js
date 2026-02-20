// pages/AddUserPage.js

class AddUserPage {
 
  constructor(page) {
    this.page = page;

    // Locators
    this.addUserButton    = page.getByRole('button', { name: /add user/i });
    this.usernameInput    = page.getByLabel(/username/i);
    this.emailInput       = page.getByLabel(/email/i);
    this.jobRoleDropdown = page.locator('#jobRole');
    this.saveBtn        = page.getByRole('button', { name: /save/i });
  }


  
  async goto(url = 'http://localhost:4200/') {
    await this.page.goto(url);
  }

 
  async clickAddUser() {
    await this.addUserButton.click();
  }

  
  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  
  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

 
  async selectJobRoleById(roleValue) {
    await this.jobRoleDropdown.selectOption({ value: roleValue });
  }
  async submitForm() {
    await this.saveBtn.click();
  }
   
  async fillAddUserForm({ username, email, jobRoleId }) {
    await this.clickAddUser();
    await this.enterUsername(username);
    await this.enterEmail(email);
    await this.selectJobRoleById(jobRoleId);
    await this.submitForm();
    
  }
}

module.exports = { AddUserPage };
