"use client"
import Link from "next/link"
import { BookOpen, Clock, ArrowRight } from "lucide-react"

export default function Stories() {
  const storiesData = [
    {
      id: "s1",
      title: "The Physics of Ice Cores",
      summary: "How deep ice core samples reveal Earth's climate history over 800,000 years and what it means for our future.",
      readTime: "8 min read",
      category: "Climate Science"
    },
    {
      id: "s2",
      title: "Arctic Wildlife Today",
      summary: "Adapting to a rapidly changing polar environment: A close look at keystone species survival strategies.",
      readTime: "12 min read",
      category: "Biology"
    },
    {
      id: "s3",
      title: "Mapping the Subglacial Lakes",
      summary: "Using advanced radar to uncover a hidden world of liquid water beneath the Antarctic ice sheet.",
      readTime: "6 min read",
      category: "Geology"
    }
  ]

  return (
    <section className="py-24 bg-polaris-navy min-h-screen relative overflow-hidden">
      <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-polaris-teal/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-polaris-cyan" />
            <span className="text-polaris-cyan font-mono text-sm tracking-widest uppercase">Editorial</span>
          </div>
          <h2 className="text-5xl font-extrabold text-polaris-ice mb-6">
            Science Stories
          </h2>
          <p className="text-xl text-polaris-muted max-w-2xl">
            In-depth editorial stories explaining complex polar science concepts and field research findings.
          </p>
        </div>

        <div className="space-y-8">
          {storiesData.map((story, i) => (
            <div key={story.id} className="group relative rounded-3xl overflow-hidden glass border-white/5 transition-all duration-500 hover:-translate-y-1 hover:glow-border-hover cursor-pointer flex flex-col md:flex-row">
              <div className="relative md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden bg-polaris-navy">
                <div className={`absolute inset-0 gradient-placeholder-${(i % 3) + 1}`} />
                <div className="absolute inset-0 bg-polaris-card/40 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full glass-light flex items-center justify-center text-polaris-cyan group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                    <BookOpen className="w-8 h-8 opacity-80" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 md:w-3/5 relative z-10 bg-polaris-card/60 backdrop-blur-md flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full glass-light text-polaris-cyan border-polaris-cyan/30">
                    {story.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-polaris-muted font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {story.readTime}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-polaris-ice mb-4 group-hover:text-white transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-polaris-muted text-lg mb-8 leading-relaxed">
                  {story.summary}
                </p>

                <div className="flex items-center text-polaris-cyan font-bold text-sm tracking-wider">
                  READ STORY 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}