import React from 'react';
import './css/modal.css';

function Modal({ modalVisibility, setModalVisibility, interview }) {
    //VARIABLES
    const showHideClassName = modalVisibility ? "modal display-block" : "modal display-none";


    //FUNCTIONS
    const closeModal = () => {
        (modalVisibility) ? setModalVisibility(false) : setModalVisibility(true);
    }


    //RENDER
    if (interview.length > 0) {
        return (
            <div className={`${showHideClassName} modal`}>
                <section className="modal-main modalSection">
                    <header className="modalHeader">
                        <div className="modalLogo"><p>{interview[0].candidateName}</p></div>
                        <div className="modalClose"><img onClick={closeModal} src="https://www.cb5.in/images/CB5-Close.png" alt="close" /></div>
                    </header>
                    <div className="interviewDt">
                        <div className="interviewDetail1">
                            <p className="interviewDtTitle">Company</p>
                            <p className="interviewDtText">{interview[0].companyName}</p>
                            <p className="interviewDtTitle">Interview Date</p>
                            <p className="interviewDtText">{interview[0].getInterviewDate()}</p>
                            <p className="interviewDtTitle">Phase</p>
                            <p className="interviewDtText">{interview[0].phase}</p>
                            <p className="interviewDtTitle">Status</p>
                            <p className="interviewDtText">{interview[0].status}</p>

                        </div>
                        <div className="interviewDetail2">
                            <p className="interviewDtText">Notes</p>
                            <p className="interviewNotes">{interview[0].note}</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    else {
        return <div></div>
    }
}

export default Modal;