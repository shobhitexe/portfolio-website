type contactFormDataType = {
  name: string;
  email: string;
  message: string;
  find: string;
};

export async function sendContactForm(data: contactFormDataType) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  if (response.ok) {
    return true;
  } else return false;
}
