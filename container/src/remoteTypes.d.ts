///<reference types="react" />

declare module "microfrontend1/app" {
	import { ComponentType } from "react";

	interface MicrofrontendOneProps {
		onChange: (e: any) => void;
		// Other props...
	}

	const MicrofrontendOne: ComponentType<MicrofrontendOneProps>;

	export default MicrofrontendOne;
}

// declare module "MICROFRONTEND_TWO/MicrofrontendTwo" {
// 	const MicrofrontendTwo: React.ComponentType;

// 	export default MicrofrontendTwo;
// }