import React, { useEffect } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'

const coor = fromLonLat([-68.854581, -32.8924585])

const MapComponent = () => {
	useEffect(() => {
		const mapEl = document.querySelector('#ol-map')
		new Map({
			layers: [
				new TileLayer({
					source: new OSM()
				})
			],
			target: mapEl,
			view: new View({
				center: coor,
				zoom: 17
			})
		})
	})

	return <div id="ol-map" className="gmap" style={{ height: '300px' }} />
}

export default MapComponent
