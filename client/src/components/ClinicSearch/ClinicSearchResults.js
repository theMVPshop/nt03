/**
 *  Container component to list the results of the search for a dental clinic
 *  This has two inner components: ClinicList and Map
 *  ClinicList: The actual list of returned dental offices
 *  Map: Display the location of the selected dental office on a map
 */

import React, { useEffect, useState } from 'react'
import "../../css/clinicSearchResults.css"
import Map from './Map'
//import ClinicList from './ClinicList'
import ClinicList from '../../Containers/ClinicList'
import { useHistory } from 'react-router'

const ClinicSearchResults = ({clinicSearch}) => {

    // The list of results from the fetch call to the API
    const [clinicList, setClinicList] = useState([])

    // Track the clinic selected by the user
    const [selectedOffice, setSelectedOffice] = useState({})

    // Switch to show if anything found from the fetch call for conditional render in component
    const [resultsFound, setResultsFound] = useState(true);

    // To help with returning to the search page if no results found
    const history = useHistory();

    // Perform fetch call to search for clinics based on parameter from the search page,
    // set the results into ClinicList state and a default office to display on the map
    useEffect(() => {
        console.log(clinicSearch)
        let url = ''

        if (/^[0-9,-]+$/.test(clinicSearch)) {
            url = `https://dental-werk.herokuapp.com/offices/zip/${clinicSearch}`
        } else {
            url = `https://dental-werk.herokuapp.com/offices/state/${clinicSearch}`
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

    // Pass store the selected office in state to pass to the Map Component
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
                    {/* If nothing found display message and button to return to search page */}
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
                    {/* If results found, display searching message till results are returned */}
                    {resultsFound && clinicList.length > 0 ?
                            clinicList.map((clinic, index) => {
                                return (
                                    <ClinicList
                                        clinic={clinic}
                                        handleClick={handleClick}
                                        key={index}
                                        index={index}
                                    />
                            )
                        }) 
                        : resultsFound && <h3>Searching.....</h3>                           
                    }
                </div>
            </div>
            {/* Don't display map untill ClinicList is loaded with data */}
            <div className='map-area'>
                {clinicList.length > 0 && <Map selectedOffice={selectedOffice} />}
            </div>
        </div>
    )
}

export default ClinicSearchResults