import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'
import logoImg from '@/assets/images/logo.png'

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="text-xl font-semibold lg:text-2xl">{children}</h3>
}

const SectionBody: FC<PropsWithChildren> = ({ children }) => {
  return <p className="lg:text-lg">{children}</p>
}

const Section: FC<
  PropsWithChildren<{
    className?: string
  }>
> = ({ children, className }) => {
  return (
    <section className={`flex flex-col gap-4 ${className}`}>{children}</section>
  )
}

export default function Home() {
  return (
    <div className={'mx-auto flex max-w-4xl flex-col gap-24 px-6 py-24'}>
      <Section className={'pt-12 lg:pb-10'}>
        <Image
          src={logoImg}
          alt={'thinkhuman.co'}
          width={48}
          height={48}
          className={'mb-12'}
        />
        <h1 className={'mb-4 text-3xl font-bold lg:text-4xl'}>
          Supporting startups{' '}
          <span className={'text-[#286D49]'}>serving humanity</span>
        </h1>
        <h2 className={'text-lg lg:text-2xl'}>
          We&apos;re a group of product design and technology specialists
          working with mission-focused startups to solve problems that make an
          impact.
        </h2>
      </Section>
      {/*<BsArrowDown className={'text-2xl lg:hidden'} />*/}
      <Section>
        <SectionTitle>Our mission-focused approach</SectionTitle>
        <SectionBody>
          Traditional fundraising often presents a dilemma for mission-driven
          startups, caught between the need for capital and maintaining their
          core values.
        </SectionBody>
        <SectionBody>
          We&apos;re here to offer an alternative: We partner with you along the
          way, providing the expertise you need to bootstrap and scale — all for
          the rough cost of an early hire.
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>What makes us unique</SectionTitle>
        <SectionBody>
          Unlike traditional consulting firms or investors, we measure our
          success by the real-world impact of the startups we assist. Our unique
          value lies in our hands-on approach, offering not just advice but also
          rolling up our sleeves and getting involved at the operational level.
        </SectionBody>
        <SectionBody>
          We become a part of your team, sharing your challenges and celebrating
          your victories as our own.
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>We&apos;re not for everyone</SectionTitle>
        <SectionBody>
          We seek out startups with a clear, compelling mission and the
          potential to make a significant impact. A strong, committed founder
          team, a product or service that solves a real problem, and a business
          model that shows potential for scalability are what we find exciting.
          We value transparency, resilience, and a willingness to learn and grow
          together.
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          If you&apos;re looking for a partner to help you build a better
          future, we&apos;d love to hear from you.
        </SectionBody>
        <SectionTitle>hello@thinkhuman.co</SectionTitle>
      </Section>
    </div>
  )
}
