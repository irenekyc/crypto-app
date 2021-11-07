type RequestParams = {
  key: string;
  value: string | number;
};

const generateRequestParams = (requestObjArr: RequestParams[]): string => {
  const request = requestObjArr.map(
    (requestObj: RequestParams) => `${requestObj.key}=${requestObj.value}`
  );
  return request.join("&");
};

export default generateRequestParams;
