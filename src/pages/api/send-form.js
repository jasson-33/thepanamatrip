export default function handler(req, res) {
  const body = req.body;

  const params = new URLSearchParams();
  params.append('fname', body.fname);
  params.append('femail', body.femail);
  params.append('fmessage', body.fmessage);

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  };
  fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer`,
    options
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
