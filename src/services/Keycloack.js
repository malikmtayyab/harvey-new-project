// import Keycloak from 'keycloak-js';

// export const initOptions = {
//     url: 'https://sec.trackafrik.com/',
//     realm: 'sec-tm',
//     clientId: 'tank-management',
//     onLoad: 'login-required', // check-sso | login-required
//     KeycloakResponseType: 'code',
// }
// const kc = new Keycloak(initOptions);
// export default kc


import Keycloak from 'keycloak-js';

export const initOptions = {
    url: 'https://sec.itascha.com/',
    realm: 'sec-tm',
    clientId: 'tank-management',
    onLoad: 'login-required', // check-sso | login-required
    KeycloakResponseType: 'code',
}
const kc = new Keycloak(initOptions);
export default kc