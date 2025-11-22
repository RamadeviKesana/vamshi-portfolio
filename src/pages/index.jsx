// src/pages/index.jsx
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'
import DivideLine from '@/components/DivideLine'
import siteMetadata from '@/data/siteMetadata'

const nameToType = 'Vamshi'

const Home = () => {
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTypedName(nameToType.slice(0, i))
      if (i >= nameToType.length) clearInterval(interval)
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>

      <Container className="mt-24 sm:mt-32">

        {/* ⭐ HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-primaryText-500 dark:text-primaryText-400"
          >
            Welcome to my portfolio
          </motion.p>

          {/* Big heading with gradient & glow */}
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl"
            >
              Hi, I&apos;m
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-sky-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]"
            >
              {typedName}
            </motion.span>
          </div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-3 text-xl font-semibold text-sky-600 dark:text-sky-400"
          >
            Civil Engineer · Construction &amp; Structural Specialist
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-base text-primaryText-600 dark:text-primaryText-400"
          >
            I&apos;m a civil engineer with hands-on experience leading residential
            and commercial projects from drawings to onsite execution. I focus
            on designing safe, efficient structures and turning engineering
            concepts into reliable, real-world results—on time and on budget.
          </motion.p>

          {/* Second intro */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400"
          >
            Based in Dayton, Ohio, I work across structural design, site
            coordination, and project planning using AutoCAD, Revit, STAAD Pro,
            and MS Project to align teams, control risk, and keep construction
            moving smoothly.
          </motion.p>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-6 mt-8"
          >
            <SocialLink
              href={siteMetadata.socials.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </motion.div>
        </motion.div>
      </Container>

      <DivideLine />
      <FeatureSection />
      <CallToAction />
    </>
  )
}

export default Home
