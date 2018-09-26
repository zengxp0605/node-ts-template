module.exports = {
  "testEnvironment": "node",
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "roots": [
    "src",
    "build"
  ],
  "testMatch": [
    "**/__test__/*.(ts|js|tsx|jsx)",
    "**/*\\.(spec|test)\\.(ts|js|tsx|jsx)"
  ],
  "collectCoverageFrom": [
    "src/**/*.(ts|tsx)",
    "!build/",
    "!**/node_modules",
    "!/coverage"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  "coverageReporters": [
    "json",
    "lcov",
    "text",
    "html"
  ]
}
