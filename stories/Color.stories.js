import React from "react"

export default {
  title: "Color",
}

const colorCard = "w-full h-10 pt-2 m-1"

export const ColorPalette = () => (
  <div style={{ width: "200px" }}>
    <div className="flex flex-col p-2 text-center">
      <div className={`bg-white text-black ${colorCard}`}>white</div>
      <div className={`bg-red text-white ${colorCard}`}>red</div>
      <div className={`bg-blue-light text-black ${colorCard}`}>blue-light</div>
      <div className={`bg-blue-dark text-white ${colorCard}`}>blue-dark</div>
      <div className={`bg-grey text-black ${colorCard}`}>grey</div>
      <div className={`bg-grey-light text-black ${colorCard}`}>grey-light</div>
      <div className={`bg-grey-medium text-white ${colorCard}`}>
        grey-medium
      </div>
    </div>
  </div>
)
