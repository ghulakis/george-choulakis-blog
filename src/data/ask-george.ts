// Answers for the "Ask George" chat on the home page.
// Edit freely: `q` is the suggested-question label, `keywords` catch typed questions,
// `a` is the answer (plain text; {base} is replaced with the site base path).
export const intro = "Hi! I'm George — or at least a scripted version of him. Pick a question or type your own.";
export const fallback = "Good question — that one isn't in my script yet. Try one of the suggestions, or ask the real George on LinkedIn.";

export const answers = [
  {
    q: 'What do you do?',
    keywords: ['do', 'job', 'role', 'current', 'now', 'position', 'new yorker'],
    a: "I'm a Sales Data & Integration Specialist at NEW YORKER in Braunschweig, Germany. I work on sales data, integrations, reporting processes and internal tools in a large retail environment.",
  },
  {
    q: "What's your stack?",
    keywords: ['stack', 'tools', 'tech', 'skills', 'sql', 'power bi', 'python', 'powershell', 'dax', 'sap', 'excel'],
    a: 'Power BI & DAX, SQL Server / T-SQL, Python, Power Query, PowerShell, Excel automation and SAP analytics. Plus a rubber duck for debugging.',
  },
  {
    q: 'Where have you worked?',
    keywords: ['worked', 'before', 'previous', 'previously', 'past', 'career', 'experience', 'companies', 'history', 'background', 'ey', 'pmi', 'philip', 'jack', 'wolfskin', 'sky'],
    a: 'Philip Morris International (e-commerce, reporting & systems, e-business), EY as a Junior Data Engineer, Jack Wolfskin in FP&A reporting, freelance revenue control for SKY express, and now NEW YORKER. The full story is on the timeline: {base}/timeline/',
  },
  {
    q: 'How do you approach a problem?',
    keywords: ['approach', 'think', 'process', 'method', 'problem', 'solve', 'way'],
    a: "Understand first, build second. I separate symptoms from the real business question, collect the right information, analyse deeply, agree on a solution, then implement and verify it. More here: {base}/how-i-think/",
  },
  {
    q: 'Where did you study?',
    keywords: ['study', 'studied', 'education', 'university', 'degree', 'school', 'aueb'],
    a: 'Athens University of Economics and Business — information systems, organizational management and commercial data analysis.',
  },
  {
    q: 'What do you write about?',
    keywords: ['write', 'blog', 'posts', 'articles', 'writing', 'notes'],
    a: 'Data, automation, reporting systems, and the surprisingly human problems behind technical work. The notes are here: {base}/blog/',
  },
  {
    q: 'What do you do for fun?',
    keywords: ['fun', 'hobby', 'hobbies', 'free time', 'cat', 'music', 'guitar', 'coffee'],
    a: 'Guitar, coffee, reading, music in my ears most of the day — and a cat who has opinions about my keyboard.',
  },
  {
    q: 'How can I reach you?',
    keywords: ['contact', 'reach', 'email', 'linkedin', 'hire', 'talk', 'connect', 'available', 'open'],
    a: 'LinkedIn is best: https://www.linkedin.com/in/george-choulakis/',
  },
];
