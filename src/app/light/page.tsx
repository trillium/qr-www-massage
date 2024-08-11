import { fetchQRCode } from "@/lib/fetchQRCode";
import { getQrCodeObject } from "@/data/qrCodeObject";
import { Theme } from "@/types";
import { colors } from "@/data/colors";
import ImageWithText from "@/components/imageCard";
import QRContainer from "@/components/qrContainer";

const theme: Theme = "light";
const file = "svg";
const text = true;

const imgProps = { theme, text };

const qrProps = {
  fgColor: colors.teal,
  bgColor: colors.white,
  eyeColor: colors.golden,
};

const qrCodeObject = getQrCodeObject(qrProps);

export default async function Page({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const svg = await fetchQRCode({ searchParams, qrCodeObject });

  const imageUrl: string = svg.imageUrl || false;

  return (
    <QRContainer theme="light">
      {imageUrl && <ImageWithText src={imageUrl} {...imgProps} />}
    </QRContainer>
  );
}
