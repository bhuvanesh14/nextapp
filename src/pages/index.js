import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import client from "../apollo/client";
import Layout from '../components/layouts';
import { GET_MENUS } from '../queries/get-menus';

const inter = Inter({ subsets: ['latin'] })

export default function Home( { data }) {
  //console.warn('menusDataHome', data);
  return (
    
      
      <>
        <Layout data={data} /> 
        <h1 className="text-xl font-bold leading-6 text-black">Data to enrich your online business</h1>
      </>
  )
}


export async function getStaticProps(context) {

  const { data, loading, networkStatus} = await client.query({
      query: GET_MENUS
  });

  console.warn('data', data);

  return {
    props: {
      data: {
        menus: {
          headerMenus: data?.headerMenus?.edges,
          footerMenus: data?.footerMenus?.edges,
        }
      }
    },
    revalidate: 1,
  }
}
