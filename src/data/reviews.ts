export interface Review {
  href: string;
  title: string;
  description: string;
  category: 'Gaming' | 'Software';
}

// Newest first.
export const reviews: Review[] = [
  {
    href: '/reviews/1password-vs-bitwarden-free-tier',
    title: "Does 1Password Even Have a Free Plan? What Bitwarden's Free Tier Actually Gives You",
    description:
      "One of these has no permanent free plan at all. What that actually means for your choice.",
    category: 'Software',
  },
  {
    href: '/reviews/windows-defender-vs-paid-antivirus',
    title: 'Do You Actually Need Paid Antivirus, or Is Windows Defender Enough?',
    description:
      "What independent lab tests actually show, the real gaps that remain, and who genuinely still needs to pay.",
    category: 'Software',
  },
  {
    href: '/reviews/best-cloud-storage-for-gamers-clips',
    title: 'Best Cloud Storage for Gamers Who Record and Share Clips',
    description:
      "General-purpose cloud drives fill up fast with game footage. Here's what actually works, and the free option most people overlook.",
    category: 'Software',
  },
  {
    href: '/reviews/free-alternatives-to-expensive-creative-software-for-streamers',
    title: 'Best Free Alternatives to Expensive Creative Software for Streamers',
    description:
      "What actually replaces a $50/month Adobe subscription, task by task — including one tool we tested ourselves.",
    category: 'Software',
  },
  {
    href: '/reviews/death-stranding-2-on-the-beach-pc-worth-it',
    title: 'Death Stranding 2: On the Beach — Is the PC Version Actually Worth Buying?',
    description:
      "What critics and independent PC performance reviews actually say, nine months after launch, plus where to buy it for less.",
    category: 'Gaming',
  },
  {
    href: '/reviews/does-a-vpn-reduce-gaming-lag',
    title: "Does a VPN Actually Lower Your Ping? Here's What's Really Going On",
    description:
      "The real technical answer, when a VPN genuinely helps, and the actual reason competitive gamers use one.",
    category: 'Gaming',
  },
  {
    href: '/reviews/best-screen-recording-software-for-gamers',
    title: 'Best Screen Recording & Clip-Saving Software for Gamers',
    description:
      "The free option most gamers should try first, and when OBS or Medal actually earn a spot on your PC instead.",
    category: 'Gaming',
  },
  {
    href: '/reviews/do-pc-optimizer-apps-actually-work',
    title: 'Do PC Optimizer Apps Actually Help Your Gaming Performance?',
    description:
      "What registry cleaners actually do (not much), a real cautionary tale, and the free tools that genuinely help.",
    category: 'Gaming',
  },
  {
    href: '/reviews/steam-key-resellers-safety-guide',
    title: 'Is Buying Steam Keys From Resellers Safe? The Honest Answer',
    description:
      "Where cheap keys actually come from, what can genuinely go wrong, and how to spot a safe reseller before you pay.",
    category: 'Gaming',
  },
  {
    href: '/reviews/kinguin-vs-green-man-gaming-vs-fanatical',
    title: 'Kinguin vs Green Man Gaming vs Fanatical: Which Digital Game Key Site Is Actually Safe?',
    description:
      "We compare how each site sources keys, what happens if one doesn't work, and which is worth using for different kinds of purchases.",
    category: 'Gaming',
  },
];
