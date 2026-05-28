import dotenv from 'dotenv';
import { TelegramClient } from './telegramClient';

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!botToken || !chatId) {
  console.error('Error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables are required');
  console.error('Please copy .env.example to .env and fill in your credentials');
  process.exit(1);
}

async function main() {
  const client = new TelegramClient(botToken as string);

  try {
    console.log('Getting bot information...');
    const botInfo = await client.getMe();
    console.log(`Bot is running as: @${botInfo.username}`);

    console.log('\nSending test message...');
    await client.sendMessage(
      chatId as string,
      '✅ Hello from TypeScript! This is a test message from your Telegram bot.'
    );

    console.log('\nSending formatted message...');
    await client.sendMessage(
      chatId as string,
      '<b>Bold Text</b>\n<i>Italic Text</i>\n<code>Code Text</code>',
      { parse_mode: 'HTML' }
    );

    console.log('\n✅ All tests completed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
}

main();
