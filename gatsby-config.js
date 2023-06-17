module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://crschnick.com`,
    // Your Name
    name: 'Christopher Schnick',
    // Main Site Title
    title: `Christopher Schnick | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Twitter account handle
    author: `@crschnick`,
    // Optional: Github account URL
    github: `https://github.com/crschnick`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/crschnick/`,
    // Content of the About Me section
    about: `I design, architect, and implement modern desktop applications that can make your life easier.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'XPipe',
        description:
          'A modern remote file browser and shell connection hub build for professionals.',
        link: 'https://github.com/xpipe-io/xpipe',
      },
      {
        name: 'Pdx-Unlimiter',
        description:
          'A savegame manager and editor for all grand strategy games from Paradox Interactive.',
        link: 'https://github.com/crschnick/pdx_unlimiter',
      },
      {
        name: 'PDX Tools',
        description:
          'A web-based savegame viewer and leaderboard for Europa Universalis 4 where I build the WebGL map.',
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
          'Java, C++, Python, HTML/CSS, Typescript, WebGL, SQL',
      },
      {
        name: 'Java',
        description:
            'Gradle, Maven, GraalVM AOT, JDBC, Jackson, JPMS, JavaFX',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, Ansible, Amazon Web Services (AWS), GitHub Actions, CI / CD',
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
