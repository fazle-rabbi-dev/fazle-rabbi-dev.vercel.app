import {
  useState, useEffect
} from 'react';

const PageNotFound = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center dark:text-offwhite">
      <h1 className="text-4xl">Oops!</h1>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <span>404</span>
        <span>|</span>
        <p className="font-exo">
          This page could not be found.
        </p>
      </div>
    </section>
  )
}

export default PageNotFound
