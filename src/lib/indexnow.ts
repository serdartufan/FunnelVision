const INDEXNOW_KEY = 'fv-indexnow-2026';
const HOST = 'funnelvisionagency.com';

const urlList = [
  '/',
  '/diensten',
  '/diensten/meta-advertenties',
  '/diensten/google-ads',
  '/diensten/website-bouwen',
  '/cases',
  '/over-ons',
  '/contact',
  '/privacy-policy',
  '/algemene-voorwaarden',
  '/diensten/ai-oplossingen',
].map((path) => `https://${HOST}${path}`);

export async function pingIndexNow(): Promise<void> {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  if (!res.ok) {
    throw new Error(`IndexNow ping failed: ${res.status} ${res.statusText}`);
  }
}
