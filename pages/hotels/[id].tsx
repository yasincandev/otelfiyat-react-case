import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { NextPage } from 'next';
import { hotelData } from '@/data/data';
import ReservationModal from '@/components/ReservationModal/ReservationModal';
import { Room } from '@/types/hotel';

const Hotel: NextPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [open, setOpen] = useState(false);

  const hotel = hotelData.find((hotel) => hotel.id.toString() === id);

  const images = [...Array(8)].map((_, index) => (
    <SwiperSlide key={index}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://via.placeholder.com/1000"
        alt="hotel"
        className="max-w-full h-full object-cover"
      />
    </SwiperSlide>
  ));

  return (
    <div className="w-full flex-col items-center gap-5 grid grid-cols-1 text-black mt-14">
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <h1 className="text-4xl font-bold text-center">{hotel?.name}</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {images}
        </Swiper>
      </div>
      <div className="flex flex-col gap-5 items-center w-full p-8">
        <h2 className="text-2xl font-bold text-center">ODALAR</h2>

        {hotel?.rooms.map((room: Room) => (
          <div
            className="flex items-center justify-center w-full lg:w-7/12  p-6 bg-white  rounded-lg shadow-md  hover:shadow-xl transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-105"
            key={room.id}
            onClick={() => setOpen(true)}
          >
            <div className="md:w-1/3 w-1/2">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                className="mySwiper"
              >
                {room.extraImages.map((image: any) => (
                  <SwiperSlide key={image}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt="hotel"
                      className="max-w-full h-full object-cover hover:transform hover:scale-110  transition duration-300 ease-in-out"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className=" px-6">
              <h3 className="text-sm md:text-xl font-bold mb-2">
                Oda Tipi: {room.name}
              </h3>
              <p className="text-gray-600 mb-2">Gecelik: ₺{room.price}</p>
            </div>
          </div>
        ))}
        <ReservationModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Hotel;
