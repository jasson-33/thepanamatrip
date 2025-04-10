// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/getintouch`
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
