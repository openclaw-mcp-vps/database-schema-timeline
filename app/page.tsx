export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize Your{" "}
          <span className="text-[#58a6ff]">Database Schema</span>{" "}
          Evolution
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload SQL migration files or schema dumps and instantly see an interactive timeline of every change — additions, modifications, deletions — with full dependency and impact analysis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["SQL Migration Parsing", "Interactive Timeline", "Impact Analysis", "Dependency Tracking", "Schema Diffing"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Timeline preview */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-[#8b949e] text-sm">schema_timeline.sql</span>
          </div>
          <div className="relative pl-6 border-l-2 border-[#30363d] space-y-6">
            {[
              { date: "2024-01-15", label: "Added users table", type: "add", detail: "id, email, created_at" },
              { date: "2024-02-03", label: "Modified orders table", type: "modify", detail: "Added foreign key → users.id" },
              { date: "2024-03-20", label: "Dropped legacy_logs", type: "delete", detail: "Removed 3 dependent views" },
              { date: "2024-04-11", label: "Added products table", type: "add", detail: "id, sku, price, stock" },
            ].map((item) => (
              <div key={item.date} className="relative">
                <div className={`absolute -left-[1.65rem] w-3 h-3 rounded-full border-2 border-[#0d1117] ${
                  item.type === "add" ? "bg-[#3fb950]" : item.type === "modify" ? "bg-[#d29922]" : "bg-[#f85149]"
                }`}></div>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm font-semibold">{item.label}</span>
                    <span className="text-[#8b949e] text-xs">{item.date}</span>
                  </div>
                  <span className="text-[#8b949e] text-xs">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">Everything you need to track schema evolution.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited schema uploads",
              "Interactive visual timeline",
              "Impact & dependency analysis",
              "SQL diff viewer",
              "Export reports as PDF",
              "Priority support",
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats are supported?",
              a: "You can upload standard SQL migration files (.sql), schema dumps from PostgreSQL, MySQL, and SQLite, as well as migration files from tools like Flyway, Liquibase, and Rails."
            },
            {
              q: "How does impact analysis work?",
              a: "The tool parses foreign keys, indexes, views, and stored procedures to build a dependency graph. When a table or column changes, it highlights every downstream object that may be affected."
            },
            {
              q: "Is my schema data kept private?",
              a: "Yes. Your uploaded files are processed in-memory and never stored on our servers. All analysis happens ephemerally and is discarded after your session ends."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Database Schema Timeline. All rights reserved.
      </footer>
    </main>
  )
}
