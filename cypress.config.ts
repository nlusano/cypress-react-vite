import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on) {
      return on("task", {
        log(message: unknown) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "http://localhost:3000/",
    supportFile: "cypress/support/commands.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
