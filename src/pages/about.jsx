import Image from 'next/image'
import Head from 'next/head'
import clsx from 'clsx'
import siteMetadata from '@/data/siteMetadata'
import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'

export default function About() {
  return (
    <>
      <Head>
        <title>About – {siteMetadata.author}</title>
        <meta 
          name="description" 
          content="About Vamshi Kothuru &ndash; Civil Engineer specializing in construction, structural planning, and project execution." 
        />
      </Head>

      <Container className="mt-24 sm:mt-36">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-24">

          {/* --- LEFT SIDE CONTENT --- */}
          <div className="space-y-8 animate__animated animate__fadeInUp">
            <h1 className="text-4xl font-bold tracking-tight text-primaryText-900 dark:text-primaryText-100">
              About Me
            </h1>

            <p className="text-lg leading-relaxed text-primaryText-700 dark:text-primaryText-400">
              I&apos;m <span className="font-semibold text-primaryText-900 dark:text-white">Vamshi Kothuru</span>, 
              a civil engineer with a strong foundation in construction engineering, 
              structural design, and project planning. I am driven by the challenge of 
              converting engineering principles into safe, realistic, and high-quality 
              solutions for residential and commercial projects.
            </p>

            <p className="text-lg leading-relaxed text-primaryText-700 dark:text-primaryText-400">
              With hands-on experience in field coordination, structural analysis, 
              and planning workflows, I enjoy bridging design concepts with onsite execution &mdash; 
              ensuring that every project meets performance, safety, and sustainability standards.
            </p>

            <div className="p-6 rounded-2xl bg-primaryText-50 dark:bg-primaryText-900/20 shadow-sm border border-primaryText-200/50 dark:border-primaryText-700/40">
              <h3 className="text-xl font-semibold text-primaryText-900 dark:text-primaryText-100 mb-2">
                Areas I&apos;m Passionate About
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-primaryText-700 dark:text-primaryText-400">
                <li>Structural &amp; foundation design</li>
                <li>Construction planning &amp; execution</li>
                <li>Building materials and testing</li>
                <li>BIM workflows &amp; project coordination</li>
                <li>Efficient, sustainable design practices</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-primaryText-700 dark:text-primaryText-400">
              Outside of engineering, I enjoy exploring modern architectural styles, 
              learning advanced tools like AutoCAD, Revit, and STAAD Pro, and discovering 
              new places that inspire fresh ideas.
            </p>
          </div>

          {/* --- RIGHT SIDE IMAGE --- */}
          <div className="flex justify-center lg:justify-end animate__animated animate__fadeIn">
            <div className="w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={avatarImage}
                alt="Vamshi Kothuru"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
