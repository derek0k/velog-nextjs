import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "Invalid format" }), {
      status: 400,
    });
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "Email sent successfully" }), {
          status: 200,
        })
    )
    .catch((err) => {
      console.error(err);
      return new Response(JSON.stringify({ message: "Fail to send Email" }), {
        status: 500,
      });
    });
}
