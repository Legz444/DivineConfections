import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Thank you for Reaching Out!</h1>
    <p>Allegra will be responding shortly. In the meantime, check out the gallery to get some ideas for your next order!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
