export const projectPageData = {
  intro:
    "Dive into my projects! See how I create cool web apps and tackle backend challenges using MERN stack. It's a journey of coding magic – join me in exploring innovation!",
  favourite_projects: [
    {
      id: 1,
      cover: "/images/cover_images/rainbownote_cover.jpg",
      name: "Rainbownote",
      desc: "A vibrant MERN note app with GitHub login, trash management, and public note sharing. Personalize notes with covers, icons, and enjoy the sleek TinyMCE editor. Powered by Vite React, Appwrite, React-Hook-Form, React-Query, and Tailwind CSS.",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "React-Query",
          style: "badge_react_query"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/rainbownote",
        live: "https://rainbownote.vercel.app"
      },
      details: {
        title: "Rainbownote",
        desc: "I created this note app to practice Appwrite and enhance my React-Query skills. Building this app supercharged my React-Query and Appwrite proficiency. I implemented various features, drawing inspiration from other note-taking apps. I thoroughly enjoyed this project-building journey.",
        features: [
          "🔐 Authentication with appwrite",
          "🌐 OAuth Provider (Social login with GitHub) ",
          "✅ Share note with public by publishing",
          "📝 CRUD operation with note",
          "❤️ Mark note as favourite",
          "🗑️ Move note to trash",
          "🔍 Search functionality",
          "⚙️ Logout functionality",
          "🖼️ Icon & cover adding functionality"
        ]
      }
    },
    {
      id: 2,
      cover: "/images/cover_images/tech-canvas.jpg",
      name: "Tech-Canvas",
      desc: "A Next.js-powered blog platform for exploring the latest in tech trends, tutorials, and insights. Optimized for SEO and user-friendly experience.",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "Next.js",
          style: "badge_nextjs"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/tech-canvas",
        live: "https://tech-canvas.vercel.app/"
      },
      details: {
        title: "Tech-Canvas",
        desc: "I created this blog platform to practice my web development skills, using Next.js for the project. Building this platform boosted my confidence in handling full-stack projects. I introduced a global search bar, allowing users to search throughout the entire application—a feature I implemented for the first time in this project. Additionally, I added a tag feature to each blog post and incorporated Firebase storage. The entire journey was enjoyable, and I gained valuable real-world project-building experience.",
        features: [
          "🔐 Secure admin panel",
          "🔍 Search functionality",
          "✅ Markdown support",
          "📝 CRUD operations for blogs",
          "🔄 SSR and SSG for enhanced performance",
          "🖼️ Firebase integration for file uploads",
          "📄 Pagination for a smooth browsing experience"
        ]
      }
    },
    {
      id: 3,
      cover: "/images/cover_images/dev-portfolio.jpg",
      name: "Dev-Portfolio",
      desc: "My personal portfolio website built with Next.js & Tailwind CSS. Explore my projects, skills, and journey as a MERN stack developer. Let's connect and build the future together",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "Next.js",
          style: "badge_nextjs"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/fazle-rabbi-dev.vercel.app",
        live: "https://fazle-rabbi-dev.vercel.app"
      },
      details: {
        title: "Dev-Portfolio",
        desc: "In my quest to design my portfolio, I faced the challenge of limited design knowledge. After exploring various portfolios for inspiration, I finally crafted mine using Next.js and Tailwind CSS. This journey taught me the importance of perseverance and adaptability, showcasing my commitment to enhancing both coding and design skills in the ever-evolving world of web development.",
        features: [
          "🏠 Home page for a welcoming introduction",
          "👤 About page to share my background and skills",
          "📧 Contact page for easy communication",
          "💼 Projects page showcasing my work",
          "📚 Blogs page to share insights and experiences"
        ]
      }
    },
    {
      id: 4,
      cover: "/images/cover_images/ichat.jpg",
      name: "iChat",
      desc: "Realtime chat app built with Next.js and Firebase, revolutionizing instant messaging with speed and precision!",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "Next.js",
          style: "badge_nextjs"
        },
        {
          name: "Firebase",
          style: "badge_firebase"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/ichat",
        live: "https://ichat-1343.netlify.app/"
      },
      details: {
        title: "iChat",
        desc: "I built this chat app out of excitement, leveraging the real-time sync power of Firebase. I thoroughly enjoyed the journey, and the excitement peaked when I finished the project. Being able to chat using my own app was a great achievement for me.",
        features: [
          "🔐 Authentication with firebase",
          "🚪 Logout functionality",
          "💬 Send and receive messages",
          "🔊 Sound play when new messages arrive",
          "🗣️ Chat capability with both myself and other users"
        ]
      }
    },
    {
      id: 5,
      cover: "/images/cover_images/phone-book.jpg",
      name: "Phone-Book",
      desc: "Phone-Book is an awesome contacts management web application. In this application you can create a free account and store contact information. By using this app you can create,edit,delete contact easily.",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "Next.js",
          style: "badge_nextjs"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/phone-book",
        live: "https://phone-b00k.vercel.app/"
      },
      details: {
        title: "Phone-Book",
        desc: "After learning Next.js, I had a plan to create a phone book web app for storing phone numbers from my contacts. As I started working on it, I realized the potential to make it a multi-user platform. I added account creation and login functionalities, allowing anyone to store and access their phone numbers from anywhere. Completing this project was a significant achievement for me, especially after learning Next.js 13.",
        features: [
          "🔐 Secure authentication with (email & password)",
          "📧 Email verification",
          "🔑 Forgot password functionality",
          "📇 Create, edit, and delete contacts effortlessly",
          "🔒 Enhanced privacy with secret key - As a Developer I can't access user phone numbers"
        ]
      }
    },
    {
      id: 6,
      cover: "/images/cover_images/codeswear.jpg",
      name: "Codeswear",
      desc: "Codes-Wear is a free and open source e-commerce website built with Next.js.You can use this project as a template for your own e-commerce website.",
      technologies: [
        {
          name: "React",
          style: "badge_react"
        },
        {
          name: "TailwindCSS",
          style: "badge_tailwind"
        },
        {
          name: "Next.js",
          style: "badge_nextjs"
        }
      ],
      links: {
        github: "https://github.com/fazle-rabbi-dev/codes-wear",
        live: "https://codes-wear2.vercel.app/"
      },
      details: {
        title: "Codeswear",
        desc: "I created this e-commerce project while learning Next.js. It served as my real-world project to grasp Next.js concepts. I learned how to handle authentication, build a full-stack app with Next.js, work with API routes, and create a cart in an e-commerce app. This project provided me with valuable hands-on experience.",
        features: [
          "👥 Create & Login account",
          "🔑 Forgot password functionality",
          "🔒 Change password securely",
          "🛒 Add items into the cart",
          "💳 Seamless checkout process",
          "📦 View & Manage orders",
          "🚪 Logout functionality"
        ]
      }
    }
  ],
  more_projects: "https://github.com/fazle-rabbi-dev?tab=repositories"
};
