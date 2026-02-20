class LoginPage {
  
  constructor(page) {           
    this.page = page;

    // Locators     
    this.usernameInput = page.getByLabel(/username/i);              
    this.passwordInput = page.getByLabel(/password/i);
    this.loginButton   = page.getByRole('button', { name: /login/i });
  } 
  async username(username) {
    await this.usernameInput.fill(username);
  } 
    async password(password) {      
    await this.passwordInput.fill(password);
    }
    async clickLogin() {
    await this.loginButton.click();
    }
    async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
 module.exports = { LoginPage };