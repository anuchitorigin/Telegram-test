import dotenv from 'dotenv';
import { TelegramClient } from './telegramClient';

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!botToken || !chatId) {
  console.error('Error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables are required');
  process.exit(1);
}

async function runTests() {
  const client = new TelegramClient(botToken as string);

  console.log('🧪 Starting Telegram Bot Tests...\n');

  try {
    // Test 1: Get bot info
    console.log('Test 1: Getting bot information');
    const botInfo = await client.getMe();
    console.log(`✅ Bot ID: ${botInfo.id}`);
    console.log(`✅ Bot Username: @${botInfo.username}`);
    console.log(`✅ Bot Name: ${botInfo.first_name}\n`);

    // Test 2: Send simple message
    console.log('Test 2: Sending simple text message');
    await client.sendMessage(chatId as string, 'Test message from TypeScript Telegram bot');
    console.log('✅ Simple message sent\n');

    // Test 3: Send HTML formatted message
    console.log('Test 3: Sending HTML formatted message');
    const htmlMessage = `
<b>Bold Text</b>
<i>Italic Text</i>
<u>Underlined Text</u>
<code>Inline code</code>
<pre>Preformatted text</pre>
    `.trim();
    await client.sendMessage(chatId as string, htmlMessage, { parse_mode: 'HTML' });
    console.log('✅ HTML formatted message sent\n');

    // Test 4: Send Markdown message
    console.log('Test 4: Sending Markdown formatted message');
    const markdownMessage = `*Bold* _Italic_ \`Code\``;
    await client.sendMessage(chatId as string, markdownMessage, { parse_mode: 'Markdown' });
    console.log('✅ Markdown formatted message sent\n');

    console.log('🎉 All tests passed successfully!');
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

runTests();
