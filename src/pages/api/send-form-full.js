export default function handler(req, res) {
  const FormData = require('form-data');
  const body = req.body;

  const formData = new FormData();
  formData.append('first_name', body.first_name);
  formData.append('last_name', body.last_name);
  formData.append('email', body.email);
  formData.append('duration', body.duration);
  formData.append('number_travelers', body.number_travelers);
  formData.append('date_month', body.date_month);
  formData.append('date_day', body.date_day);
  formData.append('date_year', body.date_year);
  formData.append('style_travel', body.style_travel);
  formData.append('style_accomodation', body.style_accomodation);
  formData.append('style_destination', body.style_destination);
  formData.append('message', body.message);
  const options = {
    method: 'POST',
    body: formData,
  };
  fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer-full`,
    options
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
