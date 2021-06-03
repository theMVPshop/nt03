/**
 * Map component to display map of dental office location
 * 
 * @param selectedOffice {} - component expects a prop to be passed in called seletcedOffice
 *                            should be an object sent from the dental office api search
 */

// react imports
import { useEffect, useRef, useState } from 'react'

// leaflet import
import L from 'leaflet'

const Map = ({selectedOffice}) => {

    // state variables
    // track geo coordinates from dental office address 
    const [coords, setCoords] = useState(null)

    // track the map initialized by leaflet
    const [mapState, setMapState] = useState(null)

    // track the layer object for placement and control of markers on map
    const [mapLayer, setMapLayer] = useState(null)

    // to track the div element the map is attached to
    const mapRef = useRef()

    // sizing of the displayed map
    const mapContainer = {
        height: "100%",
        width: "100%"
    }

    // call to Here rest api to gecode the address of the dental office
    const geocode = () => {

        // create address string
        let address = `${selectedOffice.street} ${selectedOffice.city} ${selectedOffice.state} ${selectedOffice.zip}`

        // Here api and key
        let geocodeURL = "https://geocode.search.hereapi.com/v1/geocode?q="
        let apiKey = "&apiKey=CYTbL150ptJw9giFb300UjK849kJQC5ENE-mjwbKRe0"

        fetch(geocodeURL+address+apiKey,)
            .then(res => res.json())
            .then(data => {

                // retrieve the lat and long to set in coords state
                setCoords([data.items[0].position.lat, data.items[0].position.lng])
            })
    }

    // creation and re-render of the map
    const createMap = () => {

        // create initial map display if no maps exists
        if (coords && !mapState) {
            const map = L.map(mapRef.current).setView(coords, 15)
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

            const layerGroup = L.layerGroup().addTo(map)

            const marker = L.marker(coords).bindPopup(selectedOffice.name)
            marker.addTo(layerGroup)
            marker.openPopup()

            setMapState(map)
            setMapLayer(layerGroup)
            return
        }
        
        // Re-render the map if one already exists
        if (mapState) {
            mapLayer.clearLayers()
            mapState.setView(coords, 15)
            const marker = L.marker(coords).bindPopup(selectedOffice.name)
            marker.addTo(mapLayer)
            marker.openPopup()
        }
    }

    // control if a geocode needs to be done, do not perform if no data passed to component
    useEffect(() => {
        if (Object.keys(selectedOffice).length === 0) {
            return
        }

        // run the geocode of the selected clinic
        geocode()

    }, [selectedOffice])

    // create and re-render map on coordinates data in state
    useEffect(() => {
        createMap()
    }, [coords])

    return (
        <>
            {coords ? <div style={mapContainer} ref={mapRef}></div> : <h3>Map Loading...</h3>}
        </>
    )
}

export default Map