export default { 
testPathIgnorePatterns: ['/node_modules/', '/.next/'],
setupFilesAfterEnv:[,
  "<rootDir>/src/test/setupTest.ts"
],transform: {
  "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
},

testEnvironment: 'jsdom'
}