import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function DownloadPDF() {
  return (
   <div className="d-flex align-items-center mt-5 justify-content-center">
      <a className="btn btn-success" href="CV.pdf" download="CV.pdf">Download</a>
   </div>
  )
}

export default DownloadPDF