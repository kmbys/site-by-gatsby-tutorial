// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="自己紹介">
      <p>こんにちは。私は Gatsby でこのサイトを作りました。</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
