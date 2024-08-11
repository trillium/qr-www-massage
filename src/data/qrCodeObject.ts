import { QRCodeObjectType } from "@/types";
import { colors } from "./colors";

export const qrCodeObject = {
  config: {
    body: "round",
    eye: "frame2",
    eyeBall: "ball2",
    erf1: ["fv"],
    erf2: [],
    erf3: [],
    brf1: ["fv"],
    brf2: [],
    brf3: [],
    bodyColor: colors.teal,
    bgColor: colors.slate,
    eye1Color: colors.teal,
    eye2Color: colors.teal,
    eye3Color: colors.teal,
    eyeBall1Color: colors.golden,
    eyeBall2Color: colors.golden,
    eyeBall3Color: colors.golden,
    gradientColor1: "",
    gradientColor2: "",
    gradientType: "linear",
    gradientOnEyes: false,
    logo: "",
    logoMode: "default",
  },
  size: 2000,
  download: "imageUrl",
  file: "svg",
};

export const getQrCodeObject = ({
  fgColor,
  bgColor,
  eyeColor,
  file,
}: {
  fgColor: string;
  bgColor: string;
  eyeColor?: string;
  file?: "png" | "svg";
}): QRCodeObjectType => ({
  ...qrCodeObject,
  config: {
    ...qrCodeObject.config,
    bodyColor: fgColor,
    bgColor: bgColor,
    eye1Color: fgColor,
    eye2Color: fgColor,
    eye3Color: fgColor,
    eyeBall1Color: eyeColor || fgColor,
    eyeBall2Color: eyeColor || fgColor,
    eyeBall3Color: eyeColor || fgColor,
  },
  file: file || qrCodeObject.file,
});
