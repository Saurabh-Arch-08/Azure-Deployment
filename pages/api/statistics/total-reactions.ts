import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let likeCount = 0,
    loveCount = 0,
    clapCount = 0,
    partyCount = 0,
    totalReactions = 0;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({
    likeCount,
    loveCount,
    clapCount,
    partyCount,
    totalReactions
  });
}
