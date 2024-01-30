import { Helmet } from 'react-helmet-async';
import CreatePage from 'src/sections/create/view/user-view';
// ----------------------------------------------------------------------

export default function TankPage() {
  return (
    <>
      <Helmet>
        <title> Tanks | Minimal UI </title>
      </Helmet>

      <CreatePage />
    </>
  );
}
