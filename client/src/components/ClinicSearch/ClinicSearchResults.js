import React, { useEffect, useState } from 'react'
import "../../css/clinicSearchResults.css"
import Map from './Map'
import ClinicList from './ClinicList'
import { useHistory } from 'react-router'

const ClinicSearchResults = ({clinicSearch}) => {
    const [clinicList, setClinicList] = useState([])
    const [selectedOffice, setSelectedOffice] = useState({})
    const [resultsFound, setResultsFound] = useState(true);

    const history = useHistory();

    useEffect(() => {
        console.log(clinicSearch)
        let url = ''

        if (/^[0-9,-]+$/.test(clinicSearch)) {
            url = `http://localhost:5000/offices/zip/${clinicSearch}`
        } else {
            url = `http://localhost:5000/offices/state/${clinicSearch}`
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setClinicList(data)
                    setSelectedOffice(data[0])
                } else {
                    setResultsFound(false)
                }
            })
    }, [])

    const handleClick = (e) => {
        console.log(e)
        let id = e.target.id
        let office = clinicList[id]
        setSelectedOffice(office)
    }

    return (
        <div className='main-container'>
            <div className="list-area">
                <div className="list-group">
                    {!resultsFound &&
                        <>
                            <h3>Sorry, no dental clinics found....</h3>
                            <button
                                className="btn form-btn"
                                type="button"
                                onClick={() => history.push('./clinic-search')}
                            >
                                New Search
                            </button>
                        </>
                    }
                    {resultsFound && clinicList.length > 0 ?
                            clinicList.map((clinic, index) => {
                                return (
                                    <ClinicList
                                        clinic={clinic}
                                        handleClick={handleClick}
                                        index={index}
                                    />
                            )
                        }) 
                        : resultsFound && <h3>Searching.....</h3>                           
                    }
                </div>
            </div>
            <div className='map-area'>
                {clinicList.length > 0 && <Map selectedOffice={selectedOffice} />}
            </div>
        </div>
    )
}

export default ClinicSearchResults