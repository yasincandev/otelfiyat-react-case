import React, { Fragment } from 'react';
import { hotelData } from '@/data/data';
import { Navigation, Pagination } from 'swiper';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const navigation = [
  { name: 'Ana Sayfa', href: '/', current: true },
  { name: 'Oteller', href: '/#hotel-list', current: false },
  { name: 'İletişim', href: '/contact', current: false },
];

const Navbar: React.FC = () => {
  return (
    <div className="relative  ">
      <Popover>
        <div className="w-full px-4 text-white  bg-black p-4 bg-opacity-80 backdrop-filter backdrop-blur-xl z-10 ">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center "
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <span className="sr-only">Workflow</span>
                  <Image width={100} height={100} src="/logo.webp" alt="" />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10 w-full justify-end">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium  hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden text-white "
          >
            <div className="  shadow-md bg-black  bg-opacity-70 backdrop-filter backdrop-blur-2xl overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image width={100} height={100} src="/logo.webp" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="relative max-h-[270px] overflow-hidden md:max-h-[600px]  ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className=" w-full  md:max-h-[700px] "
        >
          {hotelData.map((hotel) => (
            <SwiperSlide key={hotel.id} className=" w-full">
              <Image
                src={hotel.image}
                width={1920}
                height={700}
                className=" w-full object-cover"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Navbar;
