/* eslint-disable import/no-anonymous-default-export */
export default {
  paths: ["features/*.feature"],
  requireModule: ["ts-node/register", "tsconfig-paths/register"],
  import: ["features/**/*.ts"],
  loader: [ "ts-node/esm" ],
  format: ["summary", "progress-bar"],           
  // formatOptions: { snippetInterface: "async-await" }
    
};