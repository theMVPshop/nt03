import React, { useEffect, useState } from 'react'
import Map from './Map'

const ClinicSearchResults = ({clinicSearch}) => {
    const [clinicList, setClinicList] = useState([])
    const [selectedOffice, setSelectedOffice] = useState({})

    useEffect(() => {
        console.log(clinicSearch)
        let url = ''

        if (/^[0-9,-]+$/.test(clinicSearch)) {
            url = `/offices/zip/${clinicSearch}`
        } else {
            url = `/offices/state/${clinicSearch}`
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setClinicList(data)
                setSelectedOffice(data[0])
            })
    }, [])

    const handleClick = (e) => {
        let id = e.target.id
        let office = clinicList[id]
        setSelectedOffice(office)
    }

    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col'>
                    <div className='list-group'>
                        {clinicList.length > 0 ?
                             clinicList.map((clinic, index) => {
                                return (
                                 <button
                                     onClick={handleClick}
                                     key={index}
                                     id={index}
                                     type='button'
                                     className='list-group-item list-group-item-action'
                                 >
                                     {clinic.name + " " + clinic.zip}
                                 </button>
                                )
                            }) 
                            : <h3>No Dental Clinics found with your search</h3>                           
                        }
                    </div>
                </div>
                <div className='col'>
                    {clinicList.length > 0 && <Map selectedOffice={selectedOffice} />}
                </div>
            </div>
        </div>
    )
}

export default ClinicSearchResults