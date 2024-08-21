import { NextSeo } from 'next-seo'

import { Page } from '../_App/interfaces'
import { useEffect } from 'react'
import { Spinner } from './Spinner'

const spinnerContainerId = 'spinner-container'

export const MainPage: Page = () => {
  useEffect(() => {
    try {
      new Spinner(`#${spinnerContainerId}`)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <NextSeo title="Spinner" description="" />

      <div id={spinnerContainerId} />
    </>
  )
}

/**
 * Example.
 * Commit this if not needed.
 *
 * Get data before render page
 */
MainPage.getInitialProps = () => {
  return {
    statusCode: 200,
  }
}

export default MainPage
