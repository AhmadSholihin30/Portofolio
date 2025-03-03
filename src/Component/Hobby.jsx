const Hobby = () => {
  const hobbies = [
    {
      name: "table tennis",
      img: "/image/hobbyicon.png",
      description:
        "I love playing table tennis because it is a fast-paced and exciting sport that improves my reflexes and coordination. It requires focus, strategy, and quick movements, making every match challenging and fun. Whether playing casually with friends or competitively, table tennis is a great way to stay active and enjoy the game.",
    },
    {
      name: "Gaming",
      img: "/image/gaming.png",
      description:
        "I really enjoy gaming because it provides entertainment, challenges, and a way to escape into different worlds. I play various genres, from action and adventure to strategy and multiplayer games. Gaming also helps improve my reflexes, problem-solving skills, and teamwork when playing with others. Whether playing solo or with friends.",
    },
    {
      name: "Watching",
      img: "/image/yt.png",
      description:
        "Watching movies and series is one of my favorite hobbies. I enjoy exploring different genres, from action and adventure to drama and documentaries. It allows me to relax, experience new stories, and gain new perspectives. Whether watching alone or with friends, it’s always an enjoyable way to spend my time and unwind.",
    },
    {
      name: "Fishing",
      img: "/image/fishing.png",
      description:
        "Fishing is my favorite hobby because it allows me to relax and connect with nature. I enjoy the patience and skill required to catch fish, as well as the excitement of feeling a bite on the line. Whether by a river, lake, or sea, fishing gives me a sense of peace and accomplishment. It’s not just about catching fish but also about enjoying the experience and the outdoors.",
    },
  ];

  return (
    <div className="section" id="hobby">
      <div className="max-w-[1200px] mx-auto flex items-center mt-17 p-2 lg:mt-4 flex-col">
        <div className="text-3xl font-bold text-next mb-4 lg:mb-20">
          <h2>My Hobbies</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-full mx-auto">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
            >
              <img
                src={hobby.img}
                alt={hobby.name}
                className="w-24 h-24 mb-3 object-cover rounded-full border border-gray-300"
              />
              <p className="text-lg font-semibold text-gray-700">
                {hobby.name}
              </p>
              <p className="text-sm text-gray-500 mt-2">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobby;
