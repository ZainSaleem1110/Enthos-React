import React from 'react'

export default function ScheduleTable() {
    return (
                <div className='mb-5 mt-md-0 mt-4 ms-sm-5 ms-0 d-flex flex-wrap w-100'>
                    <div style={{width:"150px"}}>
                        <p className='pb-3' style={{borderBottom:"2px solid #BDBDBD"}}>Job Title</p>
                        <p  style={{color:"#143975"}} className="font-500">Technical Support</p>
                        <p style={{color:"#143975"}} className="font-500">Technical Support</p>
                    </div>
                    <div style={{width:"150px"}}>
                        <p className="pb-3" style={{borderBottom:"2px solid #BDBDBD"}}>Company Name</p>
                        <p style={{color:"#143975"}} className="font-500">Dell Canada</p>
                        <p style={{color:"#143975"}} className="font-500">Dell Canada</p>
                    </div>
                    <div style={{width:"150px"}}>
                        <p className="pb-3" style={{borderBottom:"2px solid #BDBDBD"}}>Call Date</p>
                        <p style={{color:"#143975"}} className="font-500">22.08.2022</p>
                        <p style={{color:"#143975"}} className="font-500">22.08.2022</p>
                    </div>
                    <div style={{width:"150px"}}>
                        <p className="pb-3" style={{borderBottom:"2px solid #BDBDBD"}}>Call Time</p>
                        <p style={{color:"#143975"}} className="font-500">2:00 PM Est</p>
                        <p style={{color:"#143975"}} className="font-500">2:00 PM Est</p>
                    </div>
                    <div style={{width:"150px"}}>
                        <p className="pb-3" style={{borderBottom:"2px solid #BDBDBD"}}>Meeting URL</p>
                        <p style={{color:"#143975"}} className="font-500">URL</p>
                        <p style={{color:"#143975"}} className="font-500">URL</p>
                    </div>
                    <div style={{width:"150px"}}>
                        <p className="pb-3" style={{borderBottom:"2px solid #BDBDBD"}}>Call Status</p>
                        <p>Complete</p>
                        <p>Complete</p>
                    </div>
                </div>
    )
}
