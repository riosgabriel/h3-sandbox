const config = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageReporters: ["json", "text", "lcov", "clover"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.spec.ts"],
  resolver: "node",
};

export default config;
