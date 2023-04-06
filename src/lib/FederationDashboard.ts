import { createUnplugin } from "unplugin";
import ansiColors from "ansi-colors";
import axios from "axios";
import path from "path";

export type SharedModule = {
	singleton: boolean;
	requiredVersion: string;
	version: string;
	strictVersion: string;
};

export type ModuleFederationConfig = {
	host?: string;
	name: string;
	version?: string;
	remotes: Record<string, string>;
	shared: Record<string, string | SharedModule>;
};

export type FederationDashboardConfig = {
	federationDashboardUrl: string;
	disabled: boolean;
} & ModuleFederationConfig;

export const FederationDashboard = createUnplugin(
	(options: FederationDashboardConfig) => {
		return {
			name: "native-federation-typescript/remote",
			async writeBundle() {
				if (options.disabled) {
					console.log(
						ansiColors.yellow("Federation dashboad disabled.")
					);

					return;
				}

				try {
					console.log(
						ansiColors.white("Updating federation dashboard...")
					);

					await axios.post(
						new URL(
							path.join(
								options.federationDashboardUrl,
								"/api/apps"
							)
						).toString(),
						{
							...options,
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
							timeout: 30000,
						}
					);

					console.log(
						ansiColors.white("Updated federation dashboard...")
					);
				} catch (error) {
					console.error(
						ansiColors.red(
							`Unable to update federation dashboard, ${error}`
						)
					);
				}
			},
		};
	}
);

export default FederationDashboard;
