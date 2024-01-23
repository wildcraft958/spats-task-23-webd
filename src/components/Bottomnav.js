import React from 'react'

function Bottomnav() {
  return (
    <div style={{bottom :'0', alignText: "center"}}>
    <ul class="nav nav-underline justify-content-center bg-dark" style={{bottom:'0'}}>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Internship</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Job</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Contract</a>
  </li>
</ul>
    </div>
  )
}

export default Bottomnav
