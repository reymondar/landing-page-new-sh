/**
 * Generates a WhatsApp link with a pre-filled message
 * @param phoneNumber - The phone number in international format (e.g., +34660926641)
 * @param message - The pre-filled message
 * @returns WhatsApp URL
 */
export function generateWhatsAppLink(phoneNumber: string = "+34660926641", message: string = "Hola, me gustaria conversar acerca de una idea que tengo en mente"): string {
  const cleanPhoneNumber = phoneNumber.replace(/\s+/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp chat with pre-filled message
 * @param phoneNumber - The phone number in international format
 * @param message - The pre-filled message
 */
export function openWhatsAppChat(phoneNumber: string = "+34660926641", message: string = "Hola, me gustaria conversar acerca de una idea que tengo en mente"): void {
  const whatsappUrl = generateWhatsAppLink(phoneNumber, message);
  window.open(whatsappUrl, '_blank');
}
