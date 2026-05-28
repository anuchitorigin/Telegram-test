# Telegram Bot Message Sending - TypeScript

A TypeScript project for testing sending messages to Telegram using the Telegram Bot API.
Use AI Agents for all coding - Anuchit Butkhunthong

## Prerequisites

- Node.js 16+ 
- npm or yarn
- A Telegram Bot Token (get one from [@BotFather](https://t.me/botfather))
- A Telegram Chat ID (your personal chat ID or group chat ID)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Configure your credentials in `.env`:**
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

   ### How to get your credentials:

   **Bot Token:**
   - Chat with [@BotFather](https://t.me/botfather) on Telegram
   - Send `/newbot` and follow the prompts
   - Copy the token provided

   **Chat ID:**
   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response

## Usage

### Run the main demo:
```bash
npm run dev
```

### Run comprehensive tests:
```bash
npm run test
```

### Build and run compiled version:
```bash
npm run build
npm start
```

## Features

- ✅ Send simple text messages
- ✅ Send HTML formatted messages
- ✅ Send Markdown formatted messages
- ✅ Send photos with captions
- ✅ Get bot information
- ✅ Error handling with meaningful messages
- ✅ TypeScript type safety

## API Methods

### `TelegramClient`

```typescript
const client = new TelegramClient(botToken);

// Send a text message
await client.sendMessage(chatId, 'Hello!');

// Send formatted message
await client.sendMessage(chatId, '<b>Bold</b>', { parse_mode: 'HTML' });

// Send a photo
await client.sendPhoto(chatId, 'https://example.com/photo.jpg', 'Photo caption');

// Get bot information
const botInfo = await client.getMe();
```

## Project Structure

```
.
├── src/
│   ├── index.ts           # Main entry point with demo
│   ├── test.ts            # Comprehensive test suite
│   └── telegramClient.ts  # Telegram API client
├── dist/                  # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## License

MIT
