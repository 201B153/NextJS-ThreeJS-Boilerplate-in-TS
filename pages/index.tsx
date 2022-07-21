import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';


const Model_3D = dynamic(() => import('../components'), {
  ssr: false,
  loading: () => <div>loading✋✋✋</div>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next-Three-Boilerplate</title>
      </Head>
      <Model_3D />
    </div>
  );
};

export default Home;