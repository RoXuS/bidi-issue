export const config = {
  specs: [
    ['./my-test.js'],
  ],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'firefox',
      // 'wdio:enforceWebDriverClassic': true,
      acceptInsecureCerts: true
    },
  ],
  logLevel: 'error',
  bail: 1,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  runner: [
    'browser',
    {
      preset: 'lit',
      coverage: {
        enabled: false,
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  ],
  framework: 'mocha',
  reporters: [
    [
      'spec',
      {
        realtimeReporting: false,
        onlyFailures: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000,
  },
};
