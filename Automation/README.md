# Playwright POM – Add User

## Project Structure

```
playwright-pom/
├── pages/
│   └── AddUserPage.js
    └──LoginPage.js   <- Page Object Model
├── tests/
│   └── addUser.spec.js
├── Test data/  
│   └──TestData.js   ← Test spec
├── playwright.config.js     ← Playwright configuration
└── README.md
```

## Setup

```bash
npm init -y
npm install --save-dev @playwright/test
npx playwright install
```

## Run Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run headed (visible browser)
npx playwright test --headed

# Run only the add-user spec
npx playwright test tests/addUser.spec.js
```

## Customisation Tips

| What to change | Where |
|---|---|
| App URL | `playwright.config.js` → `baseURL` or `addUserPage.goto('...')` |
| Job Role option value | `tests/addUser.spec.js` → `jobRoleId: '3'` (match `<option value="…">`) |
| Locators (if labels differ) | `pages/AddUserPage.js` constructor |
| Submit button after form | Uncomment the submit line in the spec |
| Assertions | Add `expect` checks after each action in the spec |
