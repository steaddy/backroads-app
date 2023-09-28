import React from 'react'
import {pageLinks} from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
      <ul className={parentClass} id="nav-links">
          {pageLinks.map(item => {
              return (
                  <PageLink  key={item.id} {...item} itemClass={itemClass} />
              )
          })}
      </ul>
  )
}

export default PageLinks
