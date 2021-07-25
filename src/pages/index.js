import Head from 'next/head'
import Contact from '../components/Contact'
import DownloadSection from '../components/DownloadSection'
import Faqs from '../components/Faqs'
import Features from '../components/Features'
import HereSection from '../components/HereSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookmark Landing Page by Dalbong</title>
        <meta name="title" content="Bookmark Landingpage by Dalbong"/>
        <meta name="description" content="Bookmark Landing page is a submission of Emmanuel Telewik to a coding challenge by frontendmentor.io He is a Software developer based in Philippines."/>
        <meta name="keywords" content="dalbong,emmanuel,telewik,developer"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
      </Head>
      <HereSection />
      <Features />
      <DownloadSection />
      <Faqs />
      <Contact />
    </>
  )
}
