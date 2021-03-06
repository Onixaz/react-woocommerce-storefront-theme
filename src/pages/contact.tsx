import { BasicContainer, SectionTitle } from '../styles/utils'

import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'

interface ContactPageProps {}

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <PageTitle
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Contact me!</SectionTitle>
      </BasicContainer>
    </>
  )
}

export default ContactPage
