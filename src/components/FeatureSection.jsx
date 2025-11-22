import siteMetadata from '@/data/siteMetadata'


const FeatureSection = () => {
  return (
    <div className="pb-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-accent-600">
            Offerings
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
            {siteMetadata.featureSection.title}
          </p>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-primaryText-600 dark:text-primaryText-400">
            {siteMetadata.featureSection.description}
          </p>
        </div>

        {/* Features removed — nothing else displayed below */}
      </div>
    </div>
  )
}

export default FeatureSection
