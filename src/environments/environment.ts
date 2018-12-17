// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  debug: false,
  apiUrl: 'http://localhost:5003',
  identityServerUrl: 'https://identity-t3.kbxl.com',
  siteUrl: 'http://localhost:5002',
  baseUrl: '',
  googleKey: 'AIzaSyD54LveBKwl1A9rWwwri1Lc3T-n4o0ixMo'
};
