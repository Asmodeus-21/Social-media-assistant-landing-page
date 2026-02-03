import React from 'react';
import { Section } from './components/Section';
import { ListItem } from './components/ListItem';
import { CheckIcon, XCircleIcon } from './components/icons';

const GOOGLE_FORM_URL = "#"; // Placeholder for the actual Google Form URL

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 sm:pb-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            goodtimez.lab
          </h1>
          <p className="mt-2 text-lg text-gray-600">is hiring a</p>
          <h2 className="mt-1 text-4xl sm:text-5xl font-bold text-indigo-600 tracking-tight">
            Social Media Manager Assistant (On-Site)
          </h2>
        </header>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mb-12" role="alert">
          <p className="font-bold text-lg">This is NOT a remote job.</p>
          <p>Please read all requirements carefully before applying. This is a full-time, on-site role requiring daily attendance.</p>
        </div>

        <div className="space-y-10">
          <Section title="About The Role">
            <p className="text-gray-600">
              Goodtimez.lab is a dynamic creative agency, and we're looking for a dedicated assistant to join our social media team. This is a hands-on role designed for someone eager to gain real-world experience in digital content creation and marketing, working directly with our core team.
            </p>
          </Section>

          <Section title="Job Responsibilities">
            <ul className="space-y-3">
              <ListItem icon={<CheckIcon />} text="Assisting with daily content posting for Instagram, Facebook, and other platforms." />
              <ListItem icon={<CheckIcon />} text="Actively helping with on-ground content creation, including photo/video shoots and reels." />
              <ListItem icon={<CheckIcon />} text="Handling basic coordination, scheduling, and execution of content plans." />
              <ListItem icon={<CheckIcon />} text="Providing direct support to the main Social Media Manager." />
            </ul>
          </Section>

          <Section title="Requirements">
             <ul className="space-y-3">
              <ListItem icon={<CheckIcon />} text="Prior experience managing social media accounts (personal or professional)." />
              <ListItem icon={<CheckIcon />} text="Must be highly disciplined, punctual, and reliable." />
              <ListItem icon={<CheckIcon />} text="Must be available to work 6 days a week." />
              <ListItem icon={<CheckIcon />} text="Must be comfortable working on-location in our office daily (this is not a remote position)." />
              <ListItem icon={<CheckIcon />} text="Must be willing to travel locally for shoots and events as required." />
            </ul>
          </Section>

          <Section title="Why This Is A Great Opportunity">
            <ul className="space-y-3">
                <ListItem icon={<CheckIcon />} text="Monthly earnings potential of ₹20,000 – ₹25,000." />
                <ListItem icon={<CheckIcon />} text="Gain real, practical industry experience that matters." />
                <ListItem icon={<CheckIcon />} text="Clear growth opportunities within the company for high performers." />
                <ListItem icon={<CheckIcon />} text="Direct exposure to content strategy, branding, and digital marketing." />
                <ListItem icon={<CheckIcon />} text="An ideal entry-level role for someone serious about a career in media." />
            </ul>
          </Section>

           <Section title="Who Should NOT Apply">
             <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="space-y-4">
                  <ListItem variant="negative" icon={<XCircleIcon />} text="Anyone looking for a work-from-home or remote job." />
                  <ListItem variant="negative" icon={<XCircleIcon />} text="Freelancers or individuals who cannot commit to a daily, full-time schedule." />
                  <ListItem variant="negative" icon={<XCircleIcon />} text="Candidates who are unwilling to travel locally or show up physically to the office." />
                </ul>
             </div>
          </Section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:static sm:bg-transparent sm:border-none sm:p-0 sm:mt-12">
        <div className="max-w-3xl mx-auto text-center">
            <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
                Apply Now
            </a>
            <p className="mt-3 text-sm text-gray-500">
                If you meet all the requirements, click the button to apply.
            </p>
        </div>
      </div>
    </div>
  );
};

export default App;