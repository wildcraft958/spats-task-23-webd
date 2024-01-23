import React from 'react'

function Bottomnav() {
  return (
    <div style={{bottom :'0', alignText: "center"}}>
    <ul class="nav nav-underline justify-content-center bg-dark text-white">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
  </li>
</ul>
    </div>
  )
}

export default Bottomnav
