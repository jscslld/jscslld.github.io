import { SideBar } from "@/components/Sidebar";
import { AboutMe } from "@/components/Aboutme";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Rewards } from "@/components/Rewards";
import { Educations } from "@/components/Educations";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div
        className="sticky self-start"
        style={{ top: 'calc(4rem + 1.25rem)' }}
      >
        <SideBar />
      </div>

      <div className="col-span-4">
        <AboutMe />
        <Publications />
        <Projects />
        <Rewards />
        <Educations />
      </div>
    </div>
  );
}
