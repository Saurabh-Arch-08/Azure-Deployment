import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Call our stored procedure with the page_slug set by the request params slug
    return res.status(200).json({
      message: `Successfully incremented page: ${req.query.slug}`
    });
  }

  if (req.method === 'GET') {
    // Query the pages table in the database where slug equals the request params slug.

    if (true) {
      return res.status(200).json({
        total: 100 || null
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
}
