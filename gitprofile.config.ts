// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'thomasckng', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Repositories',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Testing General Relativity with Null-Stream Polarization Analysis',
          description:
            "This project investigates the existence of gravitational wave polarizations beyond those predicted by general relativity by analyzing data from the LIGO-Virgo-KAGRA collaboration using the null stream method. Supervised by Dr. Isaac C. F. Wong, the work aims to identify subtle deviations from Einstein's theory through advanced data analysis and the study of potentially strongly-lensed events.",
          link: '',
        },
        {
          title: 'Jim: A Machine Learning Toolkit for Gravitational Wave Inference',
          description:
            "Jim is an open-source toolkit built on JAX for efficient and scalable gravitational wave inference. It leverages modern machine learning techniques to accelerate parameter estimation and is actively applied to the latest gravitational wave data. Supervised by Prof. Kaze W. K. Wong, I contributed to the development and application of Jim in this rapidly evolving field.",
          link: 'https://github.com/kazewong/jim',
        },
      ],
    },
  },
  seo: {
    title: 'Thomas C. K. Ng',
    description: 'Personal Website of Thomas Chi Kit Ng',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: 'thomas_ckng',
    mastodon: '',
    researchGate: 'Thomas-Ng-20',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://thomasckng.github.io/',
    phone: '',
    email: 'thomas.ng@link.cuhk.edu.hk',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Gravitational Waves',
    'Data Analysis',
    'Astrophysics',
    'Machine Learning',
    'Computational Physics',
    'Cosmology',
    'Astronomy',
  ],
  experiences: [
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'The Chinese University of Hong Kong',
      degree: 'Master of Philosophy, Physics',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'The Chinese University of Hong Kong',
      degree: 'Bachelor of Science, Physics',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Inferring cosmology from gravitational waves using non-parametric detector-frame mass distribution',
      conferenceName: '',
      journalName: 'arXiv preprint',
      authors: 'T. C. K. Ng, S. Rinaldi, O. A. Hannuksela',
      link: 'https://doi.org/10.48550/arXiv.2410.23541',
      description:
        'We present a non-parametric framework for inferring cosmological parameters from gravitational-wave population data, offering an alternative to traditional approaches and addressing technical challenges in the field.',
    },
    {
      title: 'Constraining gravitational wave amplitude birefringence with GWTC-3',
      conferenceName: '',
      journalName: 'Physical Review D',
      authors: 'T. C. K. Ng, M. Isi, K. W. K. Wong, W. M. Farr',
      link: 'https://doi.org/10.1103/PhysRevD.108.084068',
      description:
        'We investigate whether gravitational waves exhibit amplitude birefringence, which would indicate parity violation in gravity, by analyzing binary black hole signals with phenomenological waveforms inspired by modified gravity theories.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: 'G-0ZBPF5KPWR', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
