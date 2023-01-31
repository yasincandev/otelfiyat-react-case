import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { hotelData } from '@/data/data';
import dayjs from 'dayjs';
import Head from 'next/head';
import { Hotel } from '@/components';

const SearchResults: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const location = query.location as string;
  const changeDateFormat = (date: string) => {
    return dayjs(date).format('DD/MM/YYYY');
  };

  const filteredHotels = hotelData.filter((hotel) => {
    return hotel.location.toLowerCase() === location.toLowerCase();
  });

  const { adult, child } = query;

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Head>
        <title>Search Results</title>
      </Head>
      <h1 className="text-4xl font-bold capitalize">
        {location} için arama sonuçları
      </h1>

      {filteredHotels.length === 0 && (
        <p className="mt-10 text-2xl">Maalesef Otel Bulunamadı</p>
      )}
      {filteredHotels.length > 0 && (
        <>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold mt-10">
              {filteredHotels.length} Otel Bulundu
            </p>
            <p className="text-2xl font-semibold mt-10">
              {changeDateFormat(query.startDate as string)}{' '}
              {changeDateFormat(query.endDate as string)} tarihleri arasında
            </p>
            <p className="text-2xl font-semibold mt-10">
              {filteredHotels.length} gece - {adult} Yetişkin -{' '}
              {child !== '0' ? child : '0'} Çocuk
            </p>
          </div>

          <ul
            role="list"
            className="flex justify-evenly w-full flex-wrap mt-12 p-8 "
          >
            {filteredHotels?.map((hotel) => {
              return <Hotel key={hotel.id} hotel={hotel} />;
            })}
          </ul>
        </>
      )}
    </main>
  );
};

export default SearchResults;
