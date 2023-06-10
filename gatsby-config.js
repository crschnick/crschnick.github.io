module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://crschnick.com`,
    // Your Name
    name: 'Christopher Schnick',
    // Main Site Title
    title: `Christopher Schnick | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software developer`,
    // Optional: Twitter account handle
    author: `@crschnick`,
    // Optional: Github account URL
    github: `https://github.com/crschnick`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/christopher-schnick-0a13a0271/`,
    // Content of the About Me section
    about: `I primarily develop desktop applications that can make your life easier. This includes everything from the initial concept, over design and implementation, to distribution.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'XPipe',
        description:
          'A brand new type of remote file browser and shell connection hub.',
        link: 'https://github.com/xpipe-io/xpipe',
      },
      {
        name: 'Pdx-Unlimiter',
        description:
          'A smart savegame manager, editor, and toolbox for all current major Paradox Grand Strategy games.',
        link: 'https://github.com/crschnick/pdx_unlimiter',
      },
      {
        name: 'PDX Tools',
        description:
          'View maps, graphs, and tables of your save and compete in a casual, evergreen leaderboard of EU4 achievement speed runs. Upload and share your save with the world.',
        link: 'https://github.com/pdx-tools/pdx-tools',
      },
    ],
    posts: [
      {
        name: 'Unconventional Remote Process Control Without Libraries In Java',
        description:
            'Have you ever wanted to control a remote process from a Java application? With XPipe you can!',
        link: 'https://foojay.io/today/presenting-xpipe/',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // experience: [
    //   {
    //     name: 'Acme Corp',
    //     description: 'Full-Stack Developer, February 2020 - Present',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Globex Corp',
    //     description: 'Full-Stack Developer, December 2017 - February 2020',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Hooli',
    //     description: 'Full-Stack Developer, May 2015 - December 2017',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, C/C++, Python, HTML/CSS, Typescript, WebGL, SQL',
      },
      {
        name: 'Java',
        description:
            'Gradle, Maven, JPMS, JavaFX, GraalVM AOT, jlink/jpackage',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, Amazon Web Services (AWS), GitHub Actions, CI / CD',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
