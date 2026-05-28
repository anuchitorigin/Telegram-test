import axios from 'axios';

interface SendMessageOptions {
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';
  reply_markup?: Record<string, unknown>;
}

export class TelegramClient {
  private baseUrl: string;

  constructor(botToken: string) {
    this.baseUrl = `https://api.telegram.org/bot${botToken}`;
  }

  async sendMessage(
    chatId: string | number,
    text: string,
    options?: SendMessageOptions
  ): Promise<void> {
    try {
      const response = await axios.post(`${this.baseUrl}/sendMessage`, {
        chat_id: chatId,
        text,
        ...options,
      });

      if (!response.data.ok) {
        throw new Error(`Telegram API error: ${response.data.description}`);
      }

      console.log('Message sent successfully');
      console.log(`Message ID: ${response.data.result.message_id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to send message:', error.response?.data || error.message);
        throw error;
      }
      throw error;
    }
  }

  async sendPhoto(
    chatId: string | number,
    photoUrl: string,
    caption?: string
  ): Promise<void> {
    try {
      const response = await axios.post(`${this.baseUrl}/sendPhoto`, {
        chat_id: chatId,
        photo: photoUrl,
        caption,
      });

      if (!response.data.ok) {
        throw new Error(`Telegram API error: ${response.data.description}`);
      }

      console.log('Photo sent successfully');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to send photo:', error.response?.data || error.message);
        throw error;
      }
      throw error;
    }
  }

  async getMe(): Promise<Record<string, unknown>> {
    try {
      const response = await axios.get(`${this.baseUrl}/getMe`);

      if (!response.data.ok) {
        throw new Error(`Telegram API error: ${response.data.description}`);
      }

      return response.data.result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to get bot info:', error.response?.data || error.message);
        throw error;
      }
      throw error;
    }
  }
}
