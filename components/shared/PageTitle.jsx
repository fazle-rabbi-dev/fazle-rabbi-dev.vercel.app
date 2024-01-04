const gradientEffect = {
  light: {
    purple: "from-fuchsia-600 to-blue-700",
    green: "from-[#04a09b] to-[#40a1e0]",
    pink: "from-pink-500 to-green-600",
    none: "from-black to-black"
  },

  dark: {
    purple: "from-fuchsia-300 to-blue-200",
    green: "from-lime-200 to-pink-300",
    pink: "from-pink-500 to-green-600",
    none: "from-black to-black"
  }
};

export const PageTitle = ({ title, effect }) => {
  return (
    <h1
      className={`w-fit text-4xl mb-4 font-ranade-bold bg-gradient-to-r ${gradientEffect.light[effect]} bg-clip-text text-transparent dark:from-[#0fffb9] dark:to-[#63d7ff]`}
    >
      {title}
    </h1>
  );
};
