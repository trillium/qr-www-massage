import { QRCodeObjectType } from "@/types";

const baseUrl = "https://www.trilliummassage.la/";
const reqUrl = "https://api.qrcode-monkey.com//qr/custom";

export async function fetchQRCode({
    searchParams,
    qrCodeObject,
  }: {
    searchParams: URLSearchParams;
    qrCodeObject: QRCodeObjectType
  }) {
    const createSearchParamsString = (params: Record<string, string>): string => {
      return new URLSearchParams(params).toString();
    };
  
    const paramsObject: Record<string, string> = {};
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.forEach((value, key) => {
      paramsObject[key] = value;
    });
  
    const newUrl = createSearchParamsString(paramsObject);
  
    const url = `${baseUrl}?${newUrl.toString()}`;
    const newReqObj = { ...qrCodeObject, data: url };
  
    try {
      const response = await fetch(reqUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReqObj),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Response data:", data);
      return { ...data, reqUrl: url };
    } catch (error) {
      const data = { error };
      console.error("Error fetching data:", error);
      return data;
    }
  }