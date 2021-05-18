import React, { useEffect, useState } from 'react'
import Map from './Map'

const ClinicSearchResults = ({clinicSearch}) => {
    const [clinicList, setClinicList] = useState([])
    const [selectedOffice, setSelectedOffice] = useState({})

    useEffect(() => {
        console.log(clinicSearch)
        fetch(`/offices/state/${clinicSearch}`)
            .then(res => res.json())
            .then(data => {
                setClinicList(data)
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
                       {clinicList.map((clinic, index) => {
                           return (
                            <button
                                onClick={handleClick}
                                key={index}
                                id={index}
                                type='button'
                                className='list-group-item list-group-item-action'
                            >
                                {clinic.name}
                            </button>
                           )
                       })}
                    </div>
                </div>
                <div className='col'>
                    <Map selectedOffice={selectedOffice} />
                </div>
            </div>
        </div>
    )
}

export default ClinicSearchResults