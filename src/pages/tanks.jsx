import { Helmet } from 'react-helmet-async';

import TanksPage from 'src/sections/tanks/view/user-view';
// ----------------------------------------------------------------------

export default function TankPage() {
  return (
    <>
      <Helmet>
        <title> Tanks | Minimal UI </title>
      </Helmet>

      <TanksPage />
    </>
  );
}
