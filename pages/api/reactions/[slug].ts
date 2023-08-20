import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Query the pages table in the database where slug equals the request params slug.
    let data = [{like_count:0, love_count:0, clap_count:0, party_count: 0}]

    if (true) {
      return res.status(200).json({
        like_count: data[0]?.like_count || 0,
        love_count: data[0]?.love_count || 0,
        clap_count: data[0]?.clap_count || 0,
        party_count: data[0]?.party_count || 0
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}
