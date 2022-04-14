import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Article from '@components/Article';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Van Amersfoortsch Beiersch tot Phoenix Brouwerij</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <div className="container">
      <main>
        <Article />
      </main>
    </div>
    <Footer />
    </div>
  )
}
