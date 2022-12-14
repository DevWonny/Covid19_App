import axios from "axios";

const key = process.env.React_App_Covid_Key;

// 감염자 수 조회
export const Covid = async ({ date, weekDate }) => {
  if (!date) {
    return;
  }
  try {
    const res = await axios.get(
      `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${key}&startCreateDt=${
        weekDate ? weekDate : date
      }&endCreateDt=${date}`
    );

    if (res) {
      return res.data.response.body.items.item;
    } else {
      console.log("Not Response");
    }
  } catch (err) {
    console.log(err);
  }
};

// 사망자 수 조회
export const CovidDeath = async () => {
  try {
    const res = await axios.get(
      `http://apis.data.go.kr/1790387/covid19CurrentStatusDeaths/covid19CurrentStatusDeathsJson?serviceKey=${key}`
    );

    if (res) {
      return res.data.response.result;
    } else {
      console.log("Not Response");
    }
  } catch (err) {
    console.log(err);
  }
};

// 연령별, 성별 감염 현황 조회
export const CovidGender = async () => {
  try {
    const res = await axios.get(
      `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson?serviceKey=${key}`
    );

    if (res) {
      return res.data.response.body.items.item;
    } else {
      console.log("Not Response");
    }
  } catch (err) {
    console.log(err);
  }
};

// 시/도 현황 조회
export const CovidLocation = async () => {
  try {
    const res = await axios.get(
      `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${key}`
    );

    if (res) {
      return res.data.response.body.items.item;
    } else {
      console.log("Not Response");
    }
  } catch (err) {
    console.log(err);
  }
};
