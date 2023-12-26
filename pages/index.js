import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Hartini's Blog!" />
        <p className="description">
          Welcome to the world of Python programming! Start your learning journey by exploring the basics and enhancing your skills. You can begin by editing the <code>pages/index.js</code> file.
        </p>
      </main>

      <Footer />
    </div>
  )
}
