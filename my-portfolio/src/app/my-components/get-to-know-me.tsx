'use client'

import { useEffect, useRef } from "react";

const phases = [
  {
    role: "Secondary Education",
    tag: "Foundation",
    org: "Anuradhapura Central College",
    desc: "Completed A/Levels in the Biology Science stream — an early dive into analytical thinking that would later fuel a pivot into tech.",
    chips: [],
    active: false,
  },
  {
    role: "Undergraduate Studies",
    tag: "In progress",
    org: "Informatics Institute of Technology, Sri Lanka — affiliate of University of Westminster",
    desc: "Committed deeply to AI model architecture and backend engineering, encompassing network and distributed systems. Built a well-rounded foundation in system design and infrastructure.",
    chips: ["AI / ML Architecture", "Backend Engineering", "Distributed Systems", "System Design"],
    active: false,
  },
  {
    role: "Software Engineer Intern",
    tag: "Industry",
    org: "SLT Head Office — Industrial Placement Year",
    desc: "Gained hands-on industry exposure at Sri Lanka Telecom's headquarters, applying software engineering principles in a large-scale enterprise environment.",
    chips: ["Network Engineering", "Enterprise Systems"],
    active: false,
  },
  {
    role: "Web Developer & Digital Marketing Executive",
    tag: "Now",
    org: "Dual role — Growth Engineering focus",
    desc: "A unique double role bridging engineering and business. Built an understanding of how companies digitally scale — running data analysis to drive correct engineering and marketing decisions.",
    chips: ["Growth Engineering", "Data Analysis", "Digital Marketing", "Web Development"],
    active: true,
  },
];

const stats = [
  { num: "3+", label: "Years in tech" },
  { num: "2", label: "Industry roles" },
  { num: "∞", label: "Domains explored" },
];

export default function Me() {
  return (
    <section className="w-full p-20 mx-auto font-sans mt-40 z-2">
      {/* Header */}
      <p className="text-xs tracking-widest text-gray-400 uppercase font-mono mb-1">
        Get to know me
      </p>
      <h1 className="text-8xl font-semibold text-gray-900 leading-tight tracking-tight mb-1">
        Engineer.{" "}
        <span className="text-blue-600">Builder.</span>
        <br />
        Perpetual learner.
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Current standing — final year, IIT Sri Lanka
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Spine */}
        <div className="absolute left-[10px] top-0 bottom-0 w-px" />

        <div className="flex flex-col">
          {phases.map((phase, i) => (
            <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
              {/* Dot */}
              <div className="flex flex-col items-center z-10 mt-0.5" style={{ marginLeft: 1 }}>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white flex-shrink-0 ${
                    phase.active ? "border-blue-500" : "border-blue-300"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      phase.active
                        ? "bg-blue-500 ring-4 ring-blue-100"
                        : "bg-blue-400"
                    }`}
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`flex-1 rounded-xl border p-4 transition-colors ${
                  phase.active
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <span
                    className={`font-semibold text-sm leading-snug ${
                      phase.active ? "text-blue-700" : "text-gray-900"
                    }`}
                  >
                    {phase.role}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border whitespace-nowrap flex-shrink-0 ${
                      phase.active
                        ? "border-blue-300 text-blue-600 bg-white"
                        : "border-gray-200 text-gray-400 bg-white"
                    }`}
                  >
                    {phase.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{phase.org}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
                {phase.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {phase.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[11px] text-gray-500 bg-white border border-gray-200 rounded-md px-2 py-0.5"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer stats */}
      <div className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-6">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="text-center">
              <span className="block text-2xl font-bold font-mono text-gray-900 leading-none">
                {s.num}
              </span>
              <span className="block text-[11px] text-gray-400 mt-1">{s.label}</span>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-9 bg-gray-200" />
            )}
          </div>
        ))}
        <div className="w-px h-9 bg-gray-200" />
        <p className="flex-1 text-xs text-gray-400 italic leading-relaxed">
          From biology labs to distributed systems — always chasing the next layer of depth.
        </p>
      </div>
    </section>
  );
}