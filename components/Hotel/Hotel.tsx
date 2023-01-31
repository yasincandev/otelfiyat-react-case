import { Hotel } from '@/types/hotel';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  hotel: Hotel;
};

const Hotel: React.FC<Props> = ({ hotel }) => {
  const router = useRouter();
  const pushToHotel = (id: number) => {
    router.push(`/hotels/${id}`);
  };
  return (
    <li
      key={hotel.id}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 relative hover:opacity-75"
    >
      <div className="absolute right-2 top-2 bg-white text-black text-xs font-medium rounded-full w-12 h-12 flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        {hotel.tripAdvisorRating}
      </div>

      <Image
        width={500}
        height={500}
        src={hotel.image}
        className="w-full h-44 flex-shrink-0 mx-auto "
        alt=""
      />
      <div className="flex-1 flex flex-col px-2">
        <h3 className="mt-6 text-gray-900 text-sm font-medium text-left capitalize ">
          {hotel.name} - {hotel.location}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm text-left truncate">
            {hotel.description}
          </dd>
          <dd className="text-gray-500 text-sm text-left truncate">
            {hotel.type}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3"></dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <span className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <span className="ml-3">{hotel.price}</span>
            </span>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <span className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <div
                className="ml-3 cursor-pointer"
                onClick={() => pushToHotel(hotel.id)}
              >
                Detaylar
              </div>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Hotel;
