"use client";

import { useEffect } from "react";

import { MobileSidebar, SideBar } from "@/components/Sidebar";
import { AboutMe } from "@/components/Aboutme";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Rewards } from "@/components/Rewards";
import { Educations } from "@/components/Educations";
import { Photo } from "@/components/Photo";
import { News } from "@/components/News";

export default function Home() {

  useEffect(() => {
    // 非 dev 环境才触发
    if (process.env.NODE_ENV !== "development") {
      const hostname = window.location.hostname;

      if (
        hostname !== "www.lulidong.com" &&
        hostname !== "lulidong.com"
      ) {
        window.location.href = "https://www.lulidong.com";
      }
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div
        className="hidden md:sticky md:self-start md:block"
        style={{ top: 'calc(4rem + 1.25rem)' }}
      >
        <SideBar />
      </div>
      <div className="block md:hidden">
        <MobileSidebar />
      </div>

      <div className="md:col-span-4">
        <AboutMe />
        <News />
        <Publications />
        <Projects />
        <Rewards />
        <Educations />
        <Photo />
      </div>
    </div>
  );
}