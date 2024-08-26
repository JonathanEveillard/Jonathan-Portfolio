"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function RecentProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent : Activity
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Visit My
                <span>
                  {" "}
                  <a
                    href="https://github.com/JonathanEveillard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub.
                  </a>
                </span>
              </span>{" "}
              Keep it simple and friendly for the user experience.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "Stulligent, Prepare for college with ease.",
    src: "/Student.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Pantry Management, create and modify accessible lists.",
    src: "/Pantry.png",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "Chat with the latest AI model.",
    src: "/Chatbot.png",
    content: <DummyContent />,
  },
  {
    category: "Education",
    title: "Flash Card made easy for students.",
    src: "/FlashCard.png",
    content: <DummyContent />,
  },
  {
    category: "Finance Service (Coming Soon)",
    title: "POCKETKR, all in one financial dashboard.",
    src: "/Pocketkr.png",
    content: <DummyContent />,
  },
];
