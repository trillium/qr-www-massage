import { QRCodeObjectType } from "@/types";

const baseUrl = "https://www.trilliummassage.la/";
const reqUrl = "https://api.qrcode-monkey.com//qr/custom";

/**
 * Fetches a QR code from the QR Code Monkey API.
 *
 * @param {Object} params - The parameters object.
 * @param {URLSearchParams} params.searchParams - The search parameters to be included in the QR code URL.
 * @param {QRCodeObjectType} params.qrCodeObject - The QR code object containing customization options.
 * @returns {Promise<Object>} The response data from the API, including the generated QR code and request URL.
 * @throws {Error} If the HTTP request fails.
 */
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