declare module "*.json" {
  const value: any;
  export const version: string;
  export default value;
}
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
