export async function GeoIP () {
  const key = process.env.RADAR_SECRET_KEY!;
  const url = `https://api.radar.io/v1/geocode/ip`;

  const res = await fetch(url, {
    headers: {
      Authorization: key,
      'Content-Type': 'application/json',
    },
  });

  const json = await res.json();
   return json;
}