# ShiftSync AI

**Intelligent Hospital Staffing & Shift Management**

ShiftSync AI is a next-generation workforce management platform designed specifically for healthcare environments. It leverages advanced AI to predict staffing shortages, automate shift coverage, and ensure hospitals run smoothly without burning out their critical staff.

By integrating real-time scheduling data with predictive models, ShiftSync AI proactively identifies "at-risk" shifts and recommends the best available replacements based on qualifications, fatigue levels, and past performance.

## 🚀 Key Features

- **🤖 AI-Powered Callout Prediction**
  - Uses Google Gemini to analyze historical data and predict potential staff callouts before they happen.
  - assigns probability scores to upcoming shifts to help managers prepare.

- **⚡ Smart Replacement Recommendations**
  - Instantaneously ranks available staff for emergency coverage.
  - Considers credentials, recent hours worked (fatigue management), and department preferences.

- **📊 Real-Time Dashboard**
  - Visual overview of current staffing levels, open shifts, and predicted risks.
  - Drag-and-drop interface for quick schedule adjustments.

- **🛡️ Enterprise-Grade Security**
  - Built on Supabase for secure, scalable authentication and database management.
  - Role-based access control for Administrators, Managers, and Staff.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & Auth:** [Supabase](https://supabase.com/)
- **AI Models:** Google Gemini 2.0 Flash
- **UI Components:** Radix UI, Lucide React, Sonner, Recharts

## 🏁 Getting Started

Follow these steps to set up ShiftSync AI locally.

### Prerequisites

- Node.js 18+ installed
- A [Supabase](https://supabase.com/) account
- A [Google AI Studio](https://aistudio.google.com/) API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shiftsync-ai.git
   cd shiftsync-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your credentials:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # AI
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Setup Database**
   Run the migration scripts found in `supabase/migrations` in your Supabase SQL Editor to create the necessary tables (`shifts`, `users`, `departments`, etc.).

5. **Run the Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 AI Configuration

This app uses **Google Gemini 2.0 Flash** for its predictive capabilities. Ensure your API key has access to this model version. The integration logic is located in `src/lib/ai/gemini.ts`.

## 📄 License

This project is licensed under the MIT License.
