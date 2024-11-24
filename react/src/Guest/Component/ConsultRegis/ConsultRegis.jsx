import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import RegisInfoConsultModal from '../../Modal/RegisInfoConsultModal';

const ConsultRegis = () => {
  const [modalRegisConsultantVisible, setModalRegisConsultantVisible] = useState(false);
  
  const showModalRegisConsultant = () => setModalRegisConsultantVisible(true);
  const handleCloseModalRegisConsultant = () => setModalRegisConsultantVisible(false);

  return (
    <div className="container">
      <div className="text-center pb-5">
        <button className="btn btn-primary rounded-pill py-2 px-4" onClick={showModalRegisConsultant}>
          Tư Vấn Ngay <i className="fas fa-arrow-right ms-2" />
        </button>
      </div>  

      {/*Modal*/}
      <RegisInfoConsultModal
        visible={modalRegisConsultantVisible}
        onClose={handleCloseModalRegisConsultant}
      />
    </div>
  )
}

export default ConsultRegis