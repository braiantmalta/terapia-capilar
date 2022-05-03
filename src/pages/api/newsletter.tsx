import type { NextApiRequest, NextApiResponse } from 'next';
import Axios from 'axios';

type Data = {
  name: string;
  email: string;
  error?: string;
};

function getRequestParams(email) {
  const API_KEY = process.env.API_KEY;
  const LIST_ID = process.env.LIST_ID;

  const DATA_CENTER = process.env.API_KEY.split('-')[1];

  const url = `http://${DATA_CENTER}.api.mailchimp.com/3.0/list/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const baste64ApiKey = Buffer.from(
    `anystring:${API_KEY}`,
  ).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${baste64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { name, email } = req.body;
  // const { name, email } = JSON.parse(req.body);

  if (!email || !email.length) {
    return res.status(400).json({
      error: `Esqueceu de adicionar o email?`,
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await Axios.post(url, data, {
      headers,
    });
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error:
        'Ops houve algo de errado, contate a equipe de suporte',
    });
  }
}
