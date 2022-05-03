import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';


const LitterWitch = dynamic(() => import('../components/LitterWitch'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nextjs-3js-template</title>
      </Head>
      <LitterWitch />
    </div>
  );
};

export default Home;