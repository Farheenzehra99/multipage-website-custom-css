import React from 'react';
import Image from 'next/image';

function PlayStore() {
  return (
    <div className="playstore-container">
      <div className="container">
        <div className="grid-container">
          <div className="playstore-text">
            <h1 className="playstore-heading">
              Coffee cafe is available for Android and iOS
            </h1>

            <div className="store-icons">
              <Image alt="" src="/images/app_store.png" width={150} height={120} />
              <Image alt="" src="/images/play_store.png" width={150} height={120} />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default PlayStore;
