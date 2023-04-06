# Module Federation Dashboard Plugin

This plugin is a simple webpack plugin for module federation, that allows you to visualize federated modules, their relationships with other modules and their shared dependencies.

## How to use

```javascript
const federationConfig = {
	name: "host",
	filename: "remoteEntry.js",
	remotes: {
		remote: "remote@http://localhost:3001/remoteEntry.js",
		remotesecond: "remotesecond@http://localhost:3002/remoteEntry.js",
	},
	exposes: {},
	shared: {
		...deps,
		react: {
			singleton: true,
			requiredVersion: deps.react,
		},
		"react-dom": {
			singleton: true,
			requiredVersion: deps["react-dom"],
		},
	},
};

new ModuleFederationPlugin(federationConfig),
FederationDashboard({
	federationDashboardUrl: "http://localhost", //required - this is where your dashboard API is running (TODO: Add link to repo in README)
	...federationConfig,
	host: "host", //optional - if your application is a top level application such as the "shell" concept
	version: "1.0.0" //optional - if you version your modules, provide the value here (does not need to be semver compliant)
}),
```
