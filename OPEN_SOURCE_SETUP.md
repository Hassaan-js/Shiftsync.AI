# Open Source Setup Guide for ShiftSync AI

Welcome to ShiftSync AI! This guide will help you set up the environment and run the application locally.

## 1. Prerequisites
- Node.js 18+
- npm
- A [Supabase](https://supabase.com) account
- (Optional) Google Gemini API Key
- (Optional) xAI (Grok) API Key

## 2. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in the following values:

   ### Supabase (Required)
   These keys are found in your Supabase Project Settings > API.
   - `NEXT_PUBLIC_SUPABASE_URL`: Your project URL (e.g., `https://xyz.supabase.co`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your project `anon` / public key.
   - `SUPABASE_SERVICE_ROLE_KEY`: Your project `service_role` key (keep this secret!).

   ### AI Features (Optional)
   Required for "Predict Callouts" and "Generate Notification" features.
   - `GEMINI_API_KEY`: Get from [Google AI Studio](https://aistudio.google.com/).
   - `XAI_API_KEY`: Get from xAI Console.

## 3. Database Setup

1. Run the migration scripts located in `supabase/migrations` against your Supabase instance using the SQL Editor or Supabase CLI.
2. Ensure you have the `shifts`, `users`, `departments`, `user_profiles`, and `callout_history` tables created.

## 4. Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the app.
