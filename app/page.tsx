import { MobileSidebar, SideBar } from "@/components/Sidebar";
import { AboutMe } from "@/components/Aboutme";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Rewards } from "@/components/Rewards";
import { Educations } from "@/components/Educations";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div
        className="hidden md:sticky md:self-start md:block"
        style={{ top: 'calc(4rem + 1.25rem)' }}
      >
        <SideBar />
      </div>
      <div
        className="block md:hidden"
      >
        <MobileSidebar />
      </div>

      <div className="md:col-span-4">
        <AboutMe />
        <Publications />
        <Projects />
        <Rewards />
        <Educations />
      </div>
    </div>
  );
}
