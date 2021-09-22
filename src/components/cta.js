import PropTypes from "prop-types"
import React from "react"
import Break from "./break"
import SectionTitle from "./section-title"

const CTA = ({ title, description, label, url }) => (
  <div className={`px-6 py-10 md:py-10 bg-blue-dark`}>
    <div className={"max-w-5xl mx-auto text-center"}>
      <div className={"mx-auto"}>
        <SectionTitle textColor={"text-white"}>{title}</SectionTitle>
        <Break className={"border-blue-light mx-auto"} />
      </div>
      <div
        className={
          "text-xl md:text-2xl mb-6 text-white max-w-2xl mx-auto -mt-3"
        }
      >
        {description}
      </div>
      <div className={"mx-auto"} style={{ maxWidth: 250 }}>
        <a
          href={url}
          className="block px-8 py-3 leading-none border-2 border-red bg-red text-white text-center text-xl font-bold mt-4 md:mt-0"
        >
          {label}
        </a>
      </div>
    </div>
  </div>
)

CTA.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
}

CTA.defaultProps = {
  title: null,
}

export default CTA
