import { Particles } from "@/components/magicui/particles";
import React from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";

const WhyMe = () => {
  const features = [
    {
      icon: "💻",
      title: "SOLUTION-FOCUSED DEVELOPMENT",
      description:
        "I BUILD SOLUTIONS, NOT JUST CODE. Your project isn't just another job for me. I treat it like my own. Every line of code I write is focused on making your business faster, stronger, and more profitable.",
    },
    {
      icon: "🔄",
      title: "EXCEPTIONAL COMMUNICATION",
      description:
        " COMMUNICATION THAT DOESN'T SUCK. You'll never wonder, What's the status? because I keep things clear, transparent, and to the point. (Also, I reply fast—like, really fast.)",
    },
    {
      icon: "💎",
      title: "QUALITY-DRIVEN APPROACH",
      description:
        "AFFORDABLE, BUT NOT CHEAP. You'll find freelancers charging rock-bottom prices, but let's be honest—cheap work ends up costing more in the long run. I deliver high-quality work at a rate that makes sense. No surprises, no hidden fees.",
    },
    {
      icon: "🛠️",
      title: "PROBLEM-SOLVING EXPERT",
      description:
        "I FIX MESSES. Have a broken app? Code that looks like it was written by a sleep-deprived raccoon? I clean up disasters and make things run smoothly Bottom line: If you want a developer who gets it—someone who delivers quality, meets deadlines, and makes your life easier—you're in the right place",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative bg-zinc-900/60 ">
      <div className="absolute inset-0 w-full h-full">
        <Particles className="w-full h-full" quantity={100} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <BoxReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-100 sm:text-6xl animate-fade-in">
              Why Choose Me As Your Developer? 🚀
            </h2>
          </div>
        </BoxReveal>
        <div className="grid gap-8">
          <BoxReveal>
            <div className="prose prose-lg text-gray-300 mx-auto">
              <p className="text-xl leading-relaxed bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm">
                Let's be real... Finding a good developer is like finding a decent
                show after Game of Thrones ended (yeah, it's tough). You need
                someone who actually knows what they're doing—someone who won't
                ghost you, overcomplicate things, or burn your budget on
                unnecessary fluff. Well, good news—you just found that developer.
              </p>
              <div className="grid gap-6 mt-12">
                {features.map((feature, index) => (
                  <BoxReveal key={index}>
                    <div
                      className="flex items-start bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 border border-zinc-800"
                    >
                      <span className="text-4xl mr-6 bg-zinc-800 p-4 rounded-lg">
                        {feature.icon}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </BoxReveal>
                ))}
              </div>
              <BoxReveal>
                <div className="mt-16 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">⭐</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-4">Your Success Is My Priority:</h3>
                      <p className="text-lg mb-6">
                        I combine technical expertise with business acumen to deliver solutions
                        that exceed expectations and drive real results. My commitment
                        to excellence ensures that your project receives the attention
                        to detail it deserves, while my strategic approach helps
                        identify and capitalize on opportunities for innovation and
                        improvement.
                      </p>
                      <p className="text-2xl font-bold text-gray-100 hover:text-blue-400 transition-colors cursor-pointer">
                        🚀 Ready to Transform Your Ideas Into Reality? Let's Connect and
                        Create Something Extraordinary Together!
                      </p>
                    </div>
                  </div>
                </div>
              </BoxReveal>
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;