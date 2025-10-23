
import { FaGamepad, FaLightbulb, FaHandsHelping, FaUsers } from "react-icons/fa";

const Mission = () => {
const features = [
    {
      id: 1,
      icon: <FaGamepad size={20} />,
      title: "Explore Games",
      body: "Curated library across genres — FPS, RPG, indie, and more. Discover your next favorite.",
    },
    {
      id: 2,
      icon: <FaLightbulb size={20} />,
      title: "Learn Before You Play",
      body: "Detailed descriptions, developer info, ratings, and quick links to download or learn more.",
    },
    {
      id: 3,
      icon: <FaHandsHelping size={20} />,
      title: "Support Developers",
      body: "Easily find ways to support indie creators and small studios you love.",
    },
    {
      id: 4,
      icon: <FaUsers size={20} />,
      title: "Community Focused",
      body: "A platform where feedback and recommendations help great games get noticed.",
    },
  ];


  return (
    <>
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
        <p className="text-gray-300 mt-4">
          To connect players with creativity — empowering developers and helping
          gamers discover meaningful experiences. We believe great games thrive
          when communities can easily find and support them.
        </p>
      </div>
    </section>

{/* Section: Features / What We Offer */}
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-xl text-primary font-semibold mb-6">What We Offer</h4>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article
              key={f.id}
              className="bg-gray-800 rounded-2xl p-5 hover:scale-[1.02] transition-shadow shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[rgba(221,22,59,0.08)] text-primary">
                {f.icon}
              </div>
              <h5 className="mt-3 font-semibold">{f.title}</h5>
              <p className="text-gray-300 text-sm mt-2">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Mission;