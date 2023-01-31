import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

interface formValues {
  location: string;
  startDate: Date;
  endDate: Date;
  adult: number;
  child: number;
}

const Form: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date('02/02/2023')); // "02/02/2021
  const [endDate, setEndDate] = useState(new Date('02/02/2023'));
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [location, setLocation] = useState('İstanbul');

  const router = useRouter();
  const formValues: formValues = {
    location,
    startDate,
    endDate,
    adult,
    child,
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: `/search`,
      query: {
        location: formValues.location,
        startDate: dayjs(formValues.startDate).format('DD/MM/YYYY'),
        endDate: dayjs(formValues.endDate).format('DD/MM/YYYY'),
        adult: formValues.adult,
        child: formValues.child,
      },
    });
  };

  return (
    <form
      className="w-full px-4  bg-black p-4 bg-opacity-70 backdrop-filter backdrop-blur-sm z-10"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block xl:inline">En Uygun Fiyat Garantisi </span>{' '}
          <span className="block text-indigo-700 xl:inline">
            otel<span className="text-yellow-600">fiyat</span>
            <span className="text-white">.com</span>
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          facere in repudiandae deserunt accusantium doloribus tempora nihil
          aspernatur ipsa rem!
        </p>
      </div>

      <div className="flex flex-col flex-wrap gap-8 items-center justify-center   mt-5 lg:flex-row">
        <label
          htmlFor="location"
          className="text-white flex  flex-col items-center justify-center  w-full  lg:w-fit"
        >
          Gitmek İstediğiniz Yer
          <input
            type="text"
            name="location"
            id="location"
            className=" bg-white w-full max-w-sm -mb-1 py-3 px-5 rounded-md items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 "
            placeholder="Dilediğiniz Tatil Yeri"
            onChange={handleLocationChange}
            required
          />
        </label>
        <div className="flex items-center md:flex-row flex-col gap-5 justify-start w-full max-w-sm">
          <label
            htmlFor="location"
            className="text-white  items-center flex flex-col w-full"
          >
            Giriş Tarihi
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              required
              className="bg-white w-full rounded-md mt-2 py-3 px-5 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            />
          </label>

          <label
            htmlFor="location"
            className="text-white items-center  flex flex-col w-full"
          >
            Çıkış Tarihi
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              required
              minDate={startDate}
              className="bg-white w-full rounded-md mt-2 py-3 px-5 items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            />
          </label>
        </div>
        <div className="flex items-center  gap-5 justify-end mr-4">
          <label
            htmlFor="person"
            className=" text-white items-center  flex flex-col"
          >
            Yetişkin
            <select
              name="adult"
              id="person"
              className="bg-white w-full  rounded-md mt-2 py-3 px-5 items-center  text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              value={adult}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setAdult(parseInt(e.target.value))
              }
            >
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
            </select>
          </label>
          <label
            htmlFor="child"
            className="  text-white items-center flex flex-col"
          >
            Çocuk
            <select
              name="child"
              id="child"
              value={child}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setChild(parseInt(e.target.value))
              }
              className="bg-white  w-full rounded-md mt-2 py-3 px-5 items-center  text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <option value="0">0 </option>
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
            </select>
          </label>
        </div>
        <div className="flex w-full item-center justify-center">
          <button
            type="submit"
            className="bg-yellow-600 text-white w-full max-w-xs mb-7  py-3 px-5 rounded-md  items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            Ara
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
