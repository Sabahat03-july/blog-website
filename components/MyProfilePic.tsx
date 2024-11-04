import Image from 'next/image';
import React from 'react';

const MyProfilePic = () => {
  return (
    <section className='w-full mx-auto'>
      <Image 
        className='border-4 border-black dark:border-stale-500 drop-shadow-xl shadow-black rounded
         mx-auto mt-8'
        src="/profile.jpg" 
        alt='profile' 
        height={200} 
        width={200}
        priority={true}
      />
    </section>
  );
}

export default MyProfilePic;