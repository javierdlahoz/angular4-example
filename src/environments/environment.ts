// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: 'http://localhost:2000/api',
  api: 'http://localhost:2000/api',
  headers: {'Content-Type': 'application/json'},
  tenantBearer: '70971ee40949ef59951d67b65077b9159c07af210e184ce2fc72b295b976bdd6',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};
