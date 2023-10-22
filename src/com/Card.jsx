/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './card.css'

const card = () => {
  return (
    <div>
        <div class="card">
  <figure>
    <img src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg" alt="t-shirt" />
  </figure>
  <section class="details">
    <div class="min-details">
      <h1>brand name<span>Men's t-shirt</span></h1>
      <h1 class="price">$45.99</h1>
    </div>

    {/* <div class="options">
      <div class="options-size">0
        <h1>sizes</h1>
        <ul>
          <li>xs</li>
          <li>s</li>
          <li>m</li>
          <li>l</li>
          <li>xl</li>
        </ul>
      </div>

      <div class="options-colors">
        <h1>colors</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div> */}
    <a href="#" class="btn">BUY</a>
  </section>
</div>
    </div>
  )
}

export default card