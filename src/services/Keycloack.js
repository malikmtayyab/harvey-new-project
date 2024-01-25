import Keycloak from 'keycloak-js';

export const initOptions = {
    url: 'http://localhost:8080/',
    realm: 'myrealm',
    clientId: 'tank-management',
    onLoad: 'login-required', // check-sso | login-required
    KeycloakResponseType: 'code',
}
const kc = new Keycloak(initOptions);
export default kc

