"use server"

export async function addDebitCard(formData: FormData) {
  const cardNumber = formData.get("cardNumber");
  const cardHolder = formData.get("cardHolder");
  const expiry = formData.get("expiry");
  const cvv = formData.get("cvv");

  if (!cardNumber || !cardHolder || !expiry || !cvv) {
    throw new Error("Missing card information");
  }

  return {
    cardNumber,
    cardHolder,
    expiry,
  };
}
