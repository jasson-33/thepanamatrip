export default function handler(req, res) {
  const body = req.body;

  const params = new URLSearchParams();
  params.append('first_name', body.first_name);
  params.append('last_name', body.last_name);
  params.append('email', body.email);
  params.append('duration', body.duration);
  params.append('number_travelers', body.number_travelers);
  params.append('date_month', body.date_month);
  params.append('date_day', body.date_day);
  params.append('date_year', body.date_year);
  params.append('style_travel', body.style_travel);
  params.append('style_accomodation', body.style_accomodation);
  params.append('style_destination', body.style_destination);
  params.append('message', body.message);

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  };
  fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer-full`,
    options
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
