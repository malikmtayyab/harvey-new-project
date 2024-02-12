import Keycloak from 'keycloak-js';

export const initOptions = {
    url: 'https://sec.trackafrik.com/',
    realm: 'sec-tm',
    clientId: 'tank-monitoring-development',
    onLoad: 'login-required', // check-sso | login-required
    KeycloakResponseType: 'code',
}
const kc = new Keycloak(initOptions);
export default kc