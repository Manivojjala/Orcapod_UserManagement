const { faker } = require('@faker-js/faker');

class UserDataFactory {

  static JOB_ROLE_IDS = ['tech', 'id', 'gd', 'qa'];

  generateUser(jobRoleId = null) {
    return {
      username:  this.#randomUsername(),
      email:     this.#randomEmail(),
      jobRoleId: jobRoleId ?? this.#randomJobRoleId(),
    };
  }

  
   
  generateUserWithRole(roleId) {
    return this.generateUser(roleId);
  }

  
  #randomUsername() {
    return faker.internet
      .username()
      .replace(/[^a-zA-Z0-9_]/g, '_')
      .toLowerCase();
  }

  /** Returns a random email address */
  #randomEmail() {
    return faker.internet.email().toLowerCase();
  }

  /** Picks a random job role id from the allowed list */
  #randomJobRoleId() {
    return faker.helpers.arrayElement(UserDataFactory.JOB_ROLE_IDS);
  }
}

module.exports = { UserDataFactory };