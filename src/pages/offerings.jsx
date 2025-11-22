import Head from 'next/head'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

const Offerings = () => {
  return (
    <>
      <Head>
        <title>Services - {siteMetadata.author}</title>
        <meta name="description" content="Engineering services offered" />
      </Head>

      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
          Engineering Services
        </h1>

        <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400 max-w-2xl">
          These are the key civil engineering services I provide, covering design,
          planning, and on-site project coordination.
        </p>

        <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {siteMetadata.offerings.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md dark:bg-primaryText-800"
            >
              <h2 className="text-2xl font-semibold text-primaryText-800 dark:text-primaryText-100">
                {item.title}
              </h2>
              <p className="mt-3 text-primaryText-600 dark:text-primaryText-300">
                {item.description}
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 text-accent-600 dark:text-accent-400 font-medium"
              >
                Contact Me →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Offerings
