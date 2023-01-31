import { Hotels } from '@/components';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <Head>
        <title>Home</title>
      </Head>
      <Hotels />
    </div>
  );
};

export default Home;
