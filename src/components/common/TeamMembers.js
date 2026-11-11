
"use client";

import { useState } from "react";
import { teamMembers } from "@/data/team";

export default function TeamMembers() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!teamMembers?.length) return null;

  const total = teamMembers.length;

  const getMember = (index) => {
    return teamMembers[(index + total) % total];
  };

  const previous = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const getVisibleMembers = () => {
    if (total === 1) {
      return [{ member: getMember(0), position: 0, index: 0 }];
    }

    if (total === 2) {
      return [
        {
          member: getMember(activeIndex === 0 ? 1 : 0),
          position: -1,
          index: activeIndex === 0 ? 1 : 0,
        },
        {
          member: getMember(activeIndex),
          position: 0,
          index: activeIndex,
        },
        {
          member: getMember(activeIndex === 0 ? 1 : 0),
          position: 1,
          index: activeIndex === 0 ? 1 : 0,
        },
      ];
    }

    return [
      {
        member: getMember(activeIndex - 1),
        position: -1,
        index: (activeIndex - 1 + total) % total,
      },
      {
        member: getMember(activeIndex),
        position: 0,
        index: activeIndex,
      },
      {
        member: getMember(activeIndex + 1),
        position: 1,
        index: (activeIndex + 1) % total,
      },
    ];
  };

  const visibleMembers = getVisibleMembers();

  return (
    <section className="leadership-section relative overflow-hidden py-16 md:py-20">
      {/* Background effects */}
      <div className="leadership-glow leadership-glow-one" />
      <div className="leadership-glow leadership-glow-two" />

      <div className="gold-particles">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 17 + 7) % 100}%`,
              top: `${(index * 23 + 11) % 100}%`,
              animationDelay: `${(index % 6) * 0.8}s`,
              animationDuration: `${7 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="gold-streak streak-one" />
      <div className="gold-streak streak-two" />
      <div className="gold-streak streak-three" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <span className="mb-3 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
            <span className="h-px w-8 bg-[#C6A15B]" />
            The People Behind SSP
            <span className="h-px w-8 bg-[#C6A15B]" />
          </span>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Leadership That <span className="text-[#C6A15B]">Inspires</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/55">
            Guided by vision, driven by purpose, and committed to building
            lasting value.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          <div className="leadership-carousel">
            {visibleMembers.map(({ member, position, index }, i) => {
              const isActive = position === 0;

              return (
                <button
                  key={`${member.id}-${position}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${member.name}`}
                  aria-pressed={isActive}
                  className={`leadership-card ${
                    isActive ? "leadership-card-active" : "leadership-card-side"
                  }`}
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="leadership-photo-wrap">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${member.photo}`}
                      alt={member.name}
                      className="leadership-photo"
                    />

                    <div className="leadership-photo-shade" />

                    <div className="leadership-card-content">
                      <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-black/30 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E4C98F] backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
                        {isActive ? "Leadership" : "SSP"}
                      </span>

                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#D9B875] sm:text-xs">
                        {member.role}
                      </p>

                      {isActive && (
                        <p className="mt-3 line-clamp-3 text-xs leading-5 text-white/75">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  {isActive && <span className="leadership-active-border" />}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          {total > 1 && (
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous leader"
                className="carousel-arrow"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {teamMembers.map((member, index) => (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${member.name}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`carousel-dot ${
                      activeIndex === index ? "carousel-dot-active" : ""
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next leader"
                className="carousel-arrow"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}

          <p className="mt-4 text-center text-[10px] tracking-[0.25em] text-white/35">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>

      <style jsx>{`
        .leadership-section {
          background:
            radial-gradient(ellipse at 50% 40%, #244b3c 0%, transparent 55%),
            linear-gradient(135deg, #102c24 0%, #163d32 48%, #0d261f 100%);
          isolation: isolate;
        }

        .leadership-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.2;
          z-index: -1;
        }

        .leadership-glow-one {
          top: 5%;
          left: -180px;
          background: #c6a15b;
          animation: glowMove 12s ease-in-out infinite alternate;
        }

        .leadership-glow-two {
          right: -180px;
          bottom: 0;
          background: #8c713d;
          animation: glowMove 14s ease-in-out infinite alternate-reverse;
        }

        .gold-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .gold-particles span {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #e6c77f;
          box-shadow: 0 0 10px 2px #c6a15b;
          opacity: 0;
          animation: particleFloat linear infinite;
        }

        .gold-streak {
          position: absolute;
          width: 45%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #c6a15b,
            #f1dba8,
            transparent
          );
          opacity: 0.25;
          transform: rotate(-25deg);
          pointer-events: none;
          z-index: -1;
        }

        .streak-one {
          top: 25%;
          left: -10%;
          animation: streakMove 12s ease-in-out infinite;
        }

        .streak-two {
          top: 70%;
          right: -10%;
          animation: streakMove 15s ease-in-out infinite reverse;
        }

        .streak-three {
          top: 48%;
          left: 30%;
          width: 30%;
          opacity: 0.12;
          animation: streakMove 18s ease-in-out infinite;
        }

        .leadership-carousel {
          display: grid;
          grid-template-columns: 0.82fr 1.12fr 0.82fr;
          align-items: center;
          gap: clamp(8px, 2.5vw, 24px);
          min-height: 380px;
        }

        .leadership-card {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          overflow: hidden;
          border-radius: 14px;
          text-align: left;
          background: #102b23;
          cursor: pointer;
          transition:
            transform 550ms cubic-bezier(0.2, 0.8, 0.2, 1),
            opacity 450ms ease,
            filter 450ms ease,
            box-shadow 450ms ease;
          animation: cardEnter 700ms ease both;
        }

        .leadership-card-active {
          z-index: 2;
          transform: scale(1);
          opacity: 1;
          filter: none;
          box-shadow:
            0 18px 55px #00000055,
            0 0 0 1px #c6a15b99;
        }

        .leadership-card-side {
          z-index: 1;
          transform: scale(0.88);
          opacity: 0.65;
          filter: saturate(0.65) brightness(0.8);
        }

        .leadership-card-side:hover {
          transform: scale(0.93);
          opacity: 0.9;
          filter: saturate(0.9) brightness(0.95);
        }

        .leadership-photo-wrap {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #244337;
        }

        .leadership-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 700ms ease;
        }

        .leadership-card:hover .leadership-photo {
          transform: scale(1.045);
        }

        .leadership-photo-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 28%,
            #071a14a8 65%,
            #071a14f5 100%
          );
        }

        .leadership-card-content {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          padding: clamp(12px, 2vw, 22px);
        }

        .leadership-card-side .leadership-card-content {
          padding: 12px;
        }

        .leadership-card-side h3 {
          font-size: clamp(14px, 1.5vw, 19px);
        }

        .leadership-card-side .leadership-card-content > p {
          font-size: 9px;
        }

        .leadership-active-border {
          position: absolute;
          inset: 0;
          border: 1px solid #e1bd73;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: inset 0 0 22px #c6a15b22;
        }

        .carousel-arrow {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid #c6a15b66;
          border-radius: 50%;
          color: #e5c783;
          transition: 250ms ease;
        }

        .carousel-arrow svg {
          width: 19px;
          height: 19px;
        }

        .carousel-arrow:hover {
          color: #163d32;
          background: #c6a15b;
          box-shadow: 0 0 20px #c6a15b55;
        }

        .carousel-dot {
          width: 6px;
          height: 6px;
          border-radius: 20px;
          background: #ffffff45;
          transition: 300ms ease;
        }

        .carousel-dot-active {
          width: 25px;
          background: #c6a15b;
          box-shadow: 0 0 10px #c6a15b88;
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.94);
          }
          to {
            opacity: 1;
          }
        }

        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          30% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-90px);
          }
        }

        @keyframes glowMove {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(70px, -40px);
          }
        }

        @keyframes streakMove {
          0%, 100% {
            opacity: 0.08;
            transform: translateX(-20px) rotate(-25deg);
          }
          50% {
            opacity: 0.35;
            transform: translateX(30px) rotate(-25deg);
          }
        }

        @media (max-width: 640px) {
          .leadership-section {
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .leadership-carousel {
            grid-template-columns: 0.65fr 1.2fr 0.65fr;
            gap: 4px;
            min-height: 280px;
          }

          .leadership-card-side {
            transform: scale(0.88);
            opacity: 0.55;
          }

          .leadership-card-side .leadership-card-content {
            padding: 7px;
          }

          .leadership-card-side .leadership-card-content span {
            display: none;
          }

          .leadership-card-side h3 {
            font-size: 11px;
            overflow-wrap: anywhere;
          }

          .leadership-card-side .leadership-card-content > p {
            font-size: 7px;
            letter-spacing: 0.05em;
          }

          .leadership-card-active .leadership-card-content {
            padding: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leadership-section *,
          .leadership-section *::before,
          .leadership-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
