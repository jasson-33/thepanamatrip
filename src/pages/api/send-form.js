export default function handler(req, res) {
  const FormData = require('form-data');
  const body = req.body;

  const formData = new FormData();
  formData.append('fname', body.fname);
  formData.append('femail', body.femail);
  formData.append('fmessage', body.fmessage);

  const options = {
    method: 'POST',
    body: formData,
  };
  fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer`,
    options
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
