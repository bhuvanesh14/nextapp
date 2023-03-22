import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Layout from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home( {data}) {
  console.warn('menus', data);
  return (
    
      
      <div>
        <Layout data={data} content /> 
        <h1 className="text-xl font-bold leading-6 text-black">Data to enrich your online business</h1>
      </div>
  )
}


// export async function getStaticProps(context) {
//   const { data, loading, networkStatus }  = await client.query({
//     query: GET_MENUS
//   });

//   return {
//     props: {
//       menus: {
//         headerMenus: data?.headerMenus?.edges,
//         footerMenus: data?.footerMenus?.edges

//       }
//     }
//   }

// }