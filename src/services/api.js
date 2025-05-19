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
