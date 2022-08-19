import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MapPage = () => {
  const mapRef = useRef();

  const [map, setMap] = useState(null);

  const dummyList = [
    {
      location: "서울",
      todayCount: "2,000",
      compare: "100",
      longitude: 37.5642135,
      latitude: 127.0016985,
    },
    {
      location: "부산",
      todayCount: "1,000",
      compare: "50",
      longitude: 35.1379222,
      latitude: 129.05562775,
    },
  ];

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
      const makeCustomOverlay = (list) =>
        `<div class="bubble_wrap"><div class="bubble_location">${list.location}</div><div class="bubble_today_count">${list.todayCount}</div><div class="bubble_compare">${list.compare}</div></div>`;

      dummyList.forEach((list) => {
        console.log(list);
        const overlay = new window.kakao.maps.CustomOverlay({
          map,
          position: new window.kakao.maps.LatLng(list.longitude, list.latitude),
          content: makeCustomOverlay(list),
        });
      });
    }
  }, [map]);

  return (
    <>
      <Div ref={mapRef}></Div>
    </>
  );
};

export default MapPage;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
