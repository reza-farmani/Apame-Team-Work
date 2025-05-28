const API_URL = './api';

export async function getPrintingServices() {
  const res = await fetch(`${API_URL}/printingServices`);
  return res.json();
}

export async function getOffset() {
  const res = await fetch(`${API_URL}/offsetPrintingOptions`);
  return res.json();
}

export async function getWebServices() {
  const res = await fetch(`${API_URL}/webServices`);
  return res.json();
}

export async function getSocialMediaServices() {
  const res = await fetch(`${API_URL}/socialMediaServices`);
  return res.json();
}

export async function getBoardServices() {
  const res = await fetch(`${API_URL}/boardServices`);
  return res.json();
}

export async function getLazerServices() {
  const res = await fetch(`${API_URL}/lazerServices`);
  return res.json();
}

export async function getGraphicServices() {
  const res = await fetch(`${API_URL}/graphicServices`);
  return res.json();
}

export async function getShootingServices() {
  const res = await fetch(`${API_URL}/shootingServices`);
  return res.json();
}

export async function getCutServices() {
  const res = await fetch(`${API_URL}/cutServices`);
  return res.json();
}

export async function getMotionServices() {
  const res = await fetch(`${API_URL}/motionServices`);
  return res.json();
}

export async function getServices() {
  const res = await fetch(`${API_URL}/services`);
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

export async function getVisitCard() {
  const res = await fetch(`${API_URL}/visitCard`);
  return res.json();
}

export async function getDigitalp() {
  const res = await fetch(`${API_URL}/digitalPrinting`);
  return res.json();
}

export async function getSublimission() {
  const res = await fetch(`${API_URL}/sublimissionPrinting`);
  return res.json();
}

export async function getAfterPrint() {
  const res = await fetch(`${API_URL}/afterPrinting`);
  return res.json();
}

export async function getWebDesign() {
  const res = await fetch(`${API_URL}/webDesignServices`);
  return res.json();
}

export async function getSeoServices() {
  const res = await fetch(`${API_URL}/seoServices`);
  return res.json();
}

export async function getYoutubeServices() {
  const res = await fetch(`${API_URL}/youtubeServices`);
  return res.json();
}

export async function getInstagramServices() {
  const res = await fetch(`${API_URL}/instagramServices`);
  return res.json();
}

export async function getPhotoGraphy() {
  const res = await fetch(`${API_URL}/photoGraphyServices`)
}
