import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NeighbourHomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>NeighbourHomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/NeighbourHomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default NeighbourHomePage
