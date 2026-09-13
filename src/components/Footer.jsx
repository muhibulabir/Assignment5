import logo from '../assets/logo-text.png'

const LINK_GROUPS = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]
const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn']
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
              {SOCIALS.map((social) => (
                <a key={social} href={`#${social.toLowerCase()}`} className="hover:text-ink">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-ink">
              Privacy
            </a>
            <a href="#terms" className="hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
