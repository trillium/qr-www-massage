import { fetchQRCode } from "@/lib/fetchQRCode";
import { qrCodeObject } from "@/data/qrCodeObject";
import { Theme } from "@/types";
import ImageWithText from "@/components/imageCard";
import QRContainer from "@/components/qrContainer";

const theme: Theme = "dark";
const file = "svg";
const text = true;

const imgProps = { theme, text };

export default async function Page({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const svg = await fetchQRCode({ searchParams, qrCodeObject });

  const imageUrl: string = svg.imageUrl || false;

  return (
    <QRContainer theme="dark">
      {imageUrl && <ImageWithText src={imageUrl} {...imgProps} />}
    </QRContainer>
  );
}
