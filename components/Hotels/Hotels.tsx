import React from 'react';
import { Hotel as IHotel } from '@/types/hotel';
import { hotelData } from '@/data/data';
import Hotel from '../Hotel/Hotel';

const Hotels: React.FC = () => {
  return (
    <div
      className="flex flex-col container mx-auto items-center"
      id="hotel-list"
    >
      <h1 className="text-4xl font-semibold mt-10">
        İndirimli Fırsat Otelleri
      </h1>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 p-8 "
      >
        {hotelData.map((hotel: IHotel) => (
          <Hotel key={hotel.id} hotel={hotel} />
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
