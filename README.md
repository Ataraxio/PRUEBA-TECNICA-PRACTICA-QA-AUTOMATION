# Playwright Test Automation

## Overview

Este proyecto contiene pruebas automatizadas de extremo a extremo (End-to-End) desarrolladas utilizando Playwright y TypeScript.

Las pruebas permiten validar las funcionalidades de la aplicación mediante la automatización del navegador, incluyendo el registro de usuarios, inicio de sesión, pago de facturas y escenarios de pruebas negativas.

### Application Under Test

Todas las pruebas automatizadas se ejecutan sobre la aplicación de demostración ParaBank.

**Application URL:** https://parabank.parasoft.com/parabank/index.htm

ParaBank es la aplicación utilizada para ejecutar y validar los escenarios de pruebas funcionales automatizadas.

## Prerequisites

Antes de ejecutar las pruebas, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js and npm** – [Download Node.js](https://nodejs.org/)
- **Visual Studio Code** – [Download VS Code](https://code.visualstudio.com/)
- **Playwright Test for VS Code extension** – [Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Project Structure

```text
project/
│
├── tests/
│   ├── playwright/
│   └── .auth/
│       └── user.json
│   └── 01_register.spec.ts
│   └── 02_login.spec.ts
|   └── 03_bill-payment.spec.ts
|   └── 04_bill-payment-negative.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```



## Installation

Open the project in Visual Studio Code.

Open the integrated terminal (`Terminal > New Terminal`) and navigate to the project root directory.

Install the Playwright Test dependency:

```bash
npm install -D @playwright/test
```



## Running the Tests

### Option 1: Run tests with the browser visible

From the VS Code integrated terminal, navigate to the project 'tests' directory and execute:

```bash
npx playwright test --headed
```

This command executes the automated tests with the browser interface visible.

### Option 2: Run tests in headless mode

```bash
npx playwright test
```

This executes the tests without displaying the browser interface.

### Option 3: Run a specific test
From the root directory you can run a command like this

```bash
npx playwright test tests/02_login.spec.ts --headed
```

This executes only the specified test file.

## Browser Configuration

The project is configured to execute tests using Chromium.

The browser configuration is defined in `playwright.config.ts`.

To install the required browser binaries, execute:

```bash
npx playwright install chromium
```

## Test Reports

After test execution, Playwright generates an HTML report.

To open the report, execute:

```bash
npx playwright show-report
```

The report provides information about:
- Passed tests.
- Failed tests.
- Execution duration.
- Error details.
- Screenshots and traces (when configured).

## Troubleshooting

If browser binaries are missing, execute:

```bash
npx playwright install
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test Configuration](https://playwright.dev/docs/test-configuration)
- [Playwright VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

---

**Technology Stack:** Playwright | TypeScript | Node.js | dotenv
