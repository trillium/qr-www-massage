 export type Theme = "light" | "dark" | null;

 export type QRCodeObjectType = {
    config: ConfigType;
    size: number;
    download: string;
    file: string;
  };

  type ConfigType = {
    body: string;
    eye: string;
    eyeBall: string;
    erf1: string[];
    erf2: string[];
    erf3: string[];
    brf1: string[];
    brf2: string[];
    brf3: string[];
    bodyColor: string;
    bgColor: string;
    eye1Color: string;
    eye2Color: string;
    eye3Color: string;
    eyeBall1Color: string;
    eyeBall2Color: string;
    eyeBall3Color: string;
    gradientColor1: string;
    gradientColor2: string;
    gradientType: string;
    gradientOnEyes: boolean;
    logo: string;
    logoMode: string;
  };