// src/App.jsx
import React, { useEffect, useRef, useState } from 'react'
import {
  Viewer,
  Entity,
  CameraFlyTo,
  ScreenSpaceEventHandler,
  ScreenSpaceEvent
} from 'resium'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// Ion token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MzhlYTU4YS1mNjQ4LTQxNWMtYWJkNC00YTRhZDYwNGYzYjMiLCJpZCI6MzA0OTkxLCJpYXQiOjE3NDc4Njc0MTB9.QjEa_UK6VdiTbpGrKCzE1zjtjwitADPTnP_A5zW-A9I'


// model coords
const LAT = 39.740572
const LON = 30.645106


export default function App() {
  const viewerRef = useRef(null)

  const handleClick = (movement) => {
    const viewer = viewerRef.current?.cesiumElement
    if (!viewer) return

    const ray = viewer.camera.getPickRay(movement.position)
    const cartesian = viewer.scene.globe.pick(ray, viewer.scene)
    if (!cartesian) return

    const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
    const lon = Cesium.Math.toDegrees(cartographic.longitude)
    const lat = Cesium.Math.toDegrees(cartographic.latitude)

    console.log(`${lon.toFixed(6)}, ${lat.toFixed(6)}, 0`)
  }

  return (
    <>
      <Viewer
        full
        ref={viewerRef}
        terrainProvider={Cesium.CesiumTerrainProvider.fromIonAssetId(1, {
          requestVertexNormals: true
        })}
        infoBox={false}
        selectionIndicator={false}
        baseLayerPicker={false}
        timeline={false}
        animation={false}
        vrButton={false}
      >

        {/* ➊ Tıklamayı yakalayıp lat/lon’u konsola yazdırıyoruz */}
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent
            type={Cesium.ScreenSpaceEventType.LEFT_CLICK}   // bu satır mutlak gerekli
            action={handleClick}
          />
        </ScreenSpaceEventHandler>


        <CameraFlyTo
          duration={3}  // uçuş 3 saniyede tamamlanır
          destination={Cesium.Cartesian3.fromDegrees(30.644446134133467 + 0.001, 39.73940053627171 + 0.003, 1000)}
          orientation={{
            heading: Cesium.Math.toRadians(180),      // kuzey doğrultusu
            pitch: Cesium.Math.toRadians(-30),      // tam dik aşağı
            roll: 0
          }}
        />

        <Entity
          id="silo1"
          name="Altın Bilek Silo - 1"
          position={Cesium.Cartesian3.fromDegrees(LON, LAT, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
        <Entity
          id="silo2"
          name="Altın Bilek Silo - 2"
          position={Cesium.Cartesian3.fromDegrees(30.645399, 39.740463, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
        <Entity
          id="silo3"
          name="Altın Bilek Silo - 3"
          position={Cesium.Cartesian3.fromDegrees(30.645620, 39.740419, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />

        <Entity
          id="silo4"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645835, 39.740370, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />

        <Entity
          id="silo5"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645313, 39.740301, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />

        <Entity
          id="silo6"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645525, 39.740224, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />

        <Entity
          id="silo7"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645734, 39.740156, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.5,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />

        <Entity
          id="silo-1"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645258, 39.739727, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.4,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />

        <Entity
          id="silo-2"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645331, 39.739867, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.4,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
        <Entity
          id="silo-3"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645115, 39.739928, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.4,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
        <Entity
          id="silo-4"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.645041, 39.739784, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.4,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
        <Entity
          id="silo-5"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.644862, 39.739840, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.4,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
        <Entity
          id="silo-6"
          name="Altın Bilek Silo - 4"
          position={Cesium.Cartesian3.fromDegrees(30.644938, 39.739984, 0)}
          model={{
            uri: '/models/silo1.glb',
            scale: 0.4,
            minimumPixelSize: 64,
            maximumScale: 20000,
            runAnimations: true,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          }}
        />
      </Viewer>
    </>
  )
}
