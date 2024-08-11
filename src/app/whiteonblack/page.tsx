import { fetchQRCode } from "@/lib/fetchQRCode";
import { getQrCodeObject } from "@/data/qrCodeObject";
import { Theme } from "@/types";
import ImageWithText from "@/components/imageCard";
import QRContainer from "@/components/qrContainer";

const theme: Theme = null;
const file = "svg";
const text = true;

const imgProps = { theme, text };

const blackonwhite = false;
const whiteonblack = !blackonwhite;

const fgColor = blackonwhite ? "#000" : "#fff";
const bgColor = blackonwhite ? "#fff" : "#000";

const qrCodeObject = getQrCodeObject({
  fgColor: fgColor,
  bgColor: bgColor,
});

export default async function Page({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const svg = await fetchQRCode({
    searchParams,
    qrCodeObject,
  });

  const imageUrl: string = svg.imageUrl || false;

  return (
    <QRContainer whiteonblack>
      {imageUrl && <ImageWithText whiteonblack src={imageUrl} {...imgProps} />}
    </QRContainer>
  );
}
