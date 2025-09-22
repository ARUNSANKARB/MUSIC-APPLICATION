import React from 'react';
import BattlefieldMusicLogo from '../../assets/music_logo_5.png'

const logo = () => {
  return (
    <div>
      <aside className='basis-[15%]'>
        <figure className='w-full h-full flex justify-center items-center'>
          <img src={BattlefieldMusicLogo} alt="gh" className='w-[120px] h-[60px]' />
        </figure>
      </aside>
    </div>
  );
};

export default logo;
