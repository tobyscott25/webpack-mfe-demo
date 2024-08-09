///<reference types="react" />

declare module "toDoApp/app" {
  import { ComponentType } from "react";
  interface Props {}
  const MicrofrontendOne: ComponentType<Props>;
  export default MicrofrontendOne;
}

declare module "subRoutingExample/app" {
  import { ComponentType } from "react";
  interface Props {}
  const MicrofrontendTwo: ComponentType<Props>;
  export default MicrofrontendTwo;
}

declare module "microfrontend3/app" {
  import { ComponentType } from "react";
  interface Props {
    onChange: (e: any) => void;
    // Other props...
  }
  const MicrofrontendThree: ComponentType<Props>;
  export default MicrofrontendThree;
}
