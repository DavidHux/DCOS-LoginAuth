// Configuration overrides

var ConfigDev = {
  analyticsKey: "39uhSEOoRHMw6cMR6st9tYXDbAL3JSaP",
  rootUrl: "",
  historyServer: "",
  // Override cluster's uiConfiguration for development
  uiConfigurationFixture: {
    uiConfiguration: {
      plugins: {
        banner: {
          enabled: false
        },
        mesos: {
          "logging-strategy": "logrotate"
        },
        oauth: {
          enabled: true,
          // authHost: "https://dcos.auth0.com"
          // the host location of login authentication page
          authHost: "http://localhost:8080"
        },
        "overview-detail": {
          enabled: true
        },
        tracking: {
          enabled: true
        }
      }
    },
    clusterConfiguration: {
      firstUser: true,
      id: "ui-fixture-cluster-id"
    }
  },
  // Use fixtures to mock API requests
  useFixtures: false,
  // Use uiConfigurationFixture defined above
  useUIConfigFixtures: false
};

module.exports = ConfigDev;
