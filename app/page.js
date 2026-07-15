import { MARKUP } from './markup';
import Interactions from './Interactions';

// The landing page markup is server-rendered as-is (faithful clone), and the
// imperative animations/accordions run client-side in <Interactions />.
export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
      <Interactions markup={MARKUP} />
    </>
  );
}
