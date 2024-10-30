import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';

const ReviewCard = () => {
  return (
    <div className="flex flex-col border rounded-lg p-2">
      <div className='flex flex-col gap-1'>
        <div className="flex items-center gap-3">
          <img
            src="/testimony/person_4.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">John Doe</p>
            <div className="flex flex-row gap-3 items-center">
              <p className="text-sm text-gray-500">11 review</p>
              <span className="flex justify-center items-center">
                <span>
                  <MdOutlineLocationOn />
                </span>
                <p>Sri Lanka</p>
              </span>
            </div>
          </div>
        </div>
        <hr className='my-1'></hr>
        <div>
            <p className="text-sm text-gray-500">
                As a freelancer, building a good reputation is very important for
                your career. A reliable rating system helps with that. Reviews from
                your buyers provide helpful feedback about your work and service
                quality. These reviews give future clients an idea of what to expect
                when they work with you. When you leave reviews for your buyers, it
                also helps keep the marketplace fair and trustworthy. This two-way
                review process makes everyone more accountable. By using reviews
                wisely and staying professional, you can boost your profile and get
                more job opportunities
            </p>
        </div>
        <div>
            <span className="text-sm text-gray-500 flex flex-row ">
                <p className='font-semibold text-sm px-1'>Date of experience:</p>
                <p className='text-sm'>October 01, 2024</p>

            </span>
        </div>
        
      </div>
    </div>
  );
};

export default ReviewCard;
