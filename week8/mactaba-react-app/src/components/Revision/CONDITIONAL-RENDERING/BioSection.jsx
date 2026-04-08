import { useState } from 'react';

export default function BioSection() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div>
      <button onClick={() => setShowBio(!showBio)}>{showBio ? 'hide Bio' : 'show Bio'}</button>

      {showBio && (<p>Full stack developer and educator at Mctaba Labs.</p>)}
    </div>
  );
}