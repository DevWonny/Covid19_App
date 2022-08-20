import axios from "axios";

// 감염자 수 조회
export const Covid = async () => {
  const key = process.env.React_App_Covid_Key;

  try {
    const res = await axios.get(
      `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${key}`
    );

    if (res) {
      return res.data.response.body.items.item;
    } else {
      console.log("Not Res");
    }
  } catch (err) {
    console.log(err);
  }
};

// 사망자 수 조회
export const CovidDeath = () => {};

// 연령별, 성별 감염 현황 조회
export const CovidGender = () => {};

// 시/도 현황 조회
export const CovidLocation = () => {};