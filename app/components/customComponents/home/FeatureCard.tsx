import Image from 'next/image'
import React from 'react'

const FeatureCard = () => {
  return (
    <div className='flex flex-col'>
        <Image
          src='/feature/destination-1.jpg'
          alt='feature1'
          width={300}
          height={300}
          className='object-cover'
        />
        <h3 className='font-bold mt-4 text-2xl'>Feature 1</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
        
    </div>
  )
}

export default FeatureCard