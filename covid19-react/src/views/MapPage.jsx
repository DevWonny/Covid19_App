import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { CovidLocation } from "../api/Covid";

import Loading from "../components/Loading";

const MapPage = () => {
  const mapRef = useRef();

  // 지도
  const [map, setMap] = useState(null);
  // 각 시/도 데이터
  const [locationData, setLocationData] = useState([]);
  // loading
  const [isLoading, setIsLoading] = useState(false);

  // 각 지역 위경도 데이터
  const logLatData = [
    {
      location: "서울",
      longitude: 37.540705,
      latitude: 126.956764,
    },
    {
      location: "부산",
      longitude: 35.198362,
      latitude: 129.053922,
    },
    {
      location: "대구",
      longitude: 35.798838,
      latitude: 128.583052,
    },
    {
      location: "인천",
      longitude: 37.469221,
      latitude: 126.573234,
    },
    {
      location: "광주",
      longitude: 35.126033,
      latitude: 126.831302,
    },
    {
      location: "대전",
      longitude: 36.321655,
      latitude: 127.378953,
    },
    {
      location: "울산",
      longitude: 35.519301,
      latitude: 129.239078,
    },
    {
      location: "세종",
      longitude: 36.48,
      latitude: 127.29,
    },
    {
      location: "경기",
      longitude: 37.567167,
      latitude: 127.190292,
    },
    {
      location: "강원",
      longitude: 37.555837,
      latitude: 128.209315,
    },
    {
      location: "충북",
      longitude: 36.628503,
      latitude: 127.929344,
    },
    {
      location: "충남",
      longitude: 36.557229,
      latitude: 126.779757,
    },
    {
      location: "전북",
      longitude: 35.716705,
      latitude: 127.144185,
    },
    {
      location: "전남",
      longitude: 34.8194,
      latitude: 126.893113,
    },
    {
      location: "경북",
      longitude: 36.248647,
      latitude: 128.664734,
    },
    {
      location: "경남",
      longitude: 35.259787,
      latitude: 128.664734,
    },
    {
      location: "제주",
      longitude: 33.364805,
      latitude: 126.542671,
    },
  ];

  // api 호출
  const locationCountApi = async () => {
    setIsLoading(true);
    const res = await CovidLocation();

    if (res) {
      res
        .filter((filter) => filter.gubun !== "검역" && filter.gubun !== "합계")
        .map((el) => {
          setLocationData((prev) => [
            ...prev,
            {
              location: el.gubun,
              total: el.defCnt.toString(),
              compare: el.incDec.toString(),
              longitude: logLatData.filter((data) => {
                if (data.location === el.gubun) return data.longitude;
              })[0].longitude,
              latitude: logLatData.filter((data) => {
                if (data.location === el.gubun) return data.latitude;
              })[0].latitude,
            },
          ]);
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    locationCountApi();
  }, []);

  // map 생성
  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(35.57, 128.15),
      level: 13,
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);

    setMap(map);
  }, []);

  // custom overlay
  useEffect(() => {
    if (!!map) {
      const makeCustomOverlay = (list, state) =>
        `<div class="bubble_wrap"><div class="bubble_location">${
          list.location
        }</div><div class="bubble_today_count">${list.total.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        )}</div><div class="bubble_compare_${state}">${list.compare.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        )}</div></div>`;

      if (locationData.length > 0) {
        locationData.forEach((list) => {
          const state = list.compare > 0 ? "plus" : "minus";
          const overlay = new window.kakao.maps.CustomOverlay({
            map,
            position: new window.kakao.maps.LatLng(
              list.longitude,
              list.latitude
            ),
            content: makeCustomOverlay(list, state),
          });
        });
      }
    }
  }, [map, locationData]);

  return (
    <>
      <Div ref={mapRef}></Div>
      {isLoading && <Loading />}
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
