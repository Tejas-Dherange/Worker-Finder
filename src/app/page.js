"use client";
import { motion } from "framer-motion";
export default function HomePage() {
  return (
    <div className=" mx-auto  dark:bg-slate-700 bg-green-100  h-full">

<section className="hero dark:bg-slate-700 py-7">
      <div className="container flex flex-col font-bold text-4xl   dark:text-gray-100 justify-center items-center">
        <motion.h1
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }} // Fading in and out
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} // Continuous loop
        >
          Find the right worker for your job
        </motion.h1>
        <motion.p
          className="mt-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1, 0.8] }} // Scaling up and down
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} // Continuous loop
        >
          Connect with skilled workers in your area
        </motion.p>
      </div>
    </section>


      <div className="cards">
        <section className="featured-workers flex justify-center items-center mt-5 p-10 dark:bg-slate-900 bg-emerald-200">
          <div className="container">
            <h1 className="text-5xl font-bold mt-2">Instant & Local</h1>
            <p className="text-2xl mt-2 font-bold">Labours  |  Workers</p>
            <p className="text-2xl mt-2 font-bold">Service Agencies</p>
            <p className="text-2xl mt-2 font-bold">Technicians</p>
            <p className="text-2xl mt-2 font-bold">Service Pofessionals</p>
          </div>
          <div className="grid grid-cols-2  mr-[100px] ml-[-100px]  border-2">
            <img className="w-96 h-52" src="https://www.jobboardfinder.com/news/wp-content/uploads/2017/10/builder.jpg" alt="" />
            <img className="w-96 h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8b4Nlz1uA5H6AdnxLjYoktoZ2Gh0OiOVpmQ&s" alt="" />
            <img className="w-96 h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EUzsc5EnGm-FwyHVHkn-EiqBfxjU9KIkSg&s" alt="" />
            <img className="w-96 h-52" src="https://www.constructionweekonline.in/cloud/2023/01/25/ASvaHYya-labourers-1200x720.jpg" alt="" />
          </div>
        </section>

        <section className="w-full dark:bg-slate-700 bg-green-500 text-white ">
          <div className="flex p-6 items-center justify-center gap-12 text-2xl w-full">
            <h1>One Time </h1>
            <h1> |    One Day  </h1>
            <h1> |    Part Time </h1>
            <h1> |    Service Provider</h1>
                </div>
        </section>

        <section className="call-to-action"></section>
      </div>
    </div>
  );
}

const featuredWorkers = [
  {
    id: 1,
    name: "John Doe",
    jobTitle: "Electrician",
    rating: 4.5,
    image: "worker1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    jobTitle: "Plumber",
    rating: 4.8,
    image: "worker2.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    jobTitle: "Carpenter",
    rating: 4.2,
    image: "worker3.jpg",
  },
];
