import React, { Suspense } from 'react'
// import NavBar from "./components/navbar/index"
// import IndexPage from "../src/pages/index"
// import React from 'react'
// import NavBar from "./components/navbar/index"
// import IndexPage from "../src/pages/index"
// import Footer from '../src/components/footer/index'
// import ProgressBar from '../src/components/Progress-bar/index'

function App() {
  let Index = React.lazy(() => import('./pages/index'))
  let Nav = React.lazy(() => import('./components/navbar/index'))
  let Footer = React.lazy(() => import('./components/footer/index'))
  return (
    <div >
      <Suspense fallback={null}>
        <Nav />
        <Index />
        <Footer />
      </Suspense>
    </div >
  );
}

export default App;
