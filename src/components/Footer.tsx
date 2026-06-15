import { Mail, Phone, Code2 } from "lucide-react";

const GithubIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.8 5.8 0 0 0-1.6-4.03 5.5 5.5 0 0 0-.15-3.98s-1.3-.4-4 1.4a13.8 13.8 0 0 0-7 0c-2.7-1.8-4-1.4-4-1.4a5.5 5.5 0 0 0-.15 3.98 5.8 5.8 0 0 0-1.6 4.03c0 5.6 3.3 6.75 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4" /><path d="M9 20a5 5 0 0 1-5-1" /></svg>
const LinkedinIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-neutral-800 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="text-left">
          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Mukul Vaid</h3>
          <p className="text-neutral-400 text-sm max-w-md mb-4">
            B.Tech CSIT | Flutter & Full Stack Developer | AWS Certified Cloud Practitioner<br />
            Open to SDE / Backend Roles
          </p>
          <div className="text-neutral-500 text-xs">
            KIET Group of Institutions (2022-2026) • CGPA: 7.1
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="mailto:mukulvaid6@gmail.com" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">mukulvaid6@gmail.com</span>
            </a>
            <a href="tel:+917982622606" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">+91 7982622606</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2 sm:mt-0">
            <a href="https://github.com/mukulvaid1021" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
              <GithubIcon width={18} height={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/mukul-vaid-510a38293" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
              <LinkedinIcon width={18} height={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/mukulvaid7982" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
              <Code2 size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
