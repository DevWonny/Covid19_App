import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MapPage = () => {
  const mapRef = useRef();

  const [map, setMap] = useState(null);

  // map 생성
  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(36.321655, 127.378953),
      draggable: false,
      level: 13,
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);

    setMap(map);
  }, []);

  // custom overlay
  useEffect(() => {
    if (!!map) {
      const makeCustomOverlay = () =>
        `<div class="bubble_wrap"><div class="bubble_location">서울</div><div class="bubble_today_count">2,000명</div><div class="bubble_compare">100</div></div>`;
    }
  }, [map]);

  return <Div ref={mapRef}></Div>;
};

export default MapPage;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
