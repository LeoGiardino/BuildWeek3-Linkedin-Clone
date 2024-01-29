import React from 'react'
import '../../styles/HomeStyle/CorpoPostsComp.css'

export default function CorpoPostsComp() {
  return (
    <div className='compBackground pageWhtTxt' style={{ width: '100%', borderRadius: '10px' }}>
      <div className='d-flex p-3'>
        <div className='me-3'>
          <img className='rounded-circle' src="https://media.licdn.com/dms/image/C4D0BAQGZyFrbDqG6mA/company-logo_100_100/0/1630472646377/bitsoftwaresolution_logo?e=1714608000&v=beta&t=VvajNjrpFPhkEEF1hFCHk8Vzt5bVyYQkAeDq_WlGAcQ" alt="" />
        </div>
        <div className='d-flex flex-column'>
          <p>Nome utente</p>
          <span>titolo</span>
          <span>data pubblicazione</span>
        </div>
      </div>
      <div className='descrizione px-3'>
        <p>Descrizione</p>
      </div>
      <div className='bigImage'>
        <img style={{ width: '100%' }} src="https://media.licdn.com/dms/image/C4D0BAQGZyFrbDqG6mA/company-logo_100_100/0/1630472646377/bitsoftwaresolution_logo?e=1714608000&v=beta&t=VvajNjrpFPhkEEF1hFCHk8Vzt5bVyYQkAeDq_WlGAcQ" alt="" />
      </div>
      <div style={{ borderTop: '1px solid gray' }} className='d-flex justify-content-between p-3 mt-2'>
        <div className='d-flex align-items-center'><i className="bi bi-hand-thumbs-up iconPost"></i><span className='fw-bold ms-2'>Consiglia</span></div>
        <div className='d-flex align-items-center'><i className="bi bi-chat-text iconPost"></i><span className='fw-bold ms-2'>Commenta</span></div>
        <div className='d-flex align-items-center'><i className="bi bi-arrow-repeat iconPost"></i><span className='fw-bold ms-2'>Diffondi il post</span></div>
        <div className='d-flex align-items-center'><i className="bi bi-send-fill iconPost"></i><span className='fw-bold ms-2'>Invia</span></div>
      </div>
    </div>
  )
}
