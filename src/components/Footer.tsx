import { Linkedin, Mail, Phone } from "lucide-react";

const certifications = [
  "Six Sigma Green Belt",
  "Six Sigma Black Belt",
  "Six Sigma Master Black Belt",
  "Agile Scrum Master"
  "Certified Prince2 Professional (Foundation & Practitioner)",
  "TOGAF 10",
  "ITIL V3",
  "Business Analyst - RPA",
  "PMP Training Certification, 35 PDU",
  "Business Process Management Training",
  "Certified ISO 27001 and ", 
  
];
const Academy Educations = [
  "MBA",
  "PMP PDU",
  "ITILv3",
  "Prince2",
  "TOGAF 10",
  "Six Sigma MBB",
  "ISO 27001/27701",
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">V</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Vjaindra Sonawwane
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Strategic IT & Digital Transformation Leader with 20+ years of 
              international experience driving enterprise innovation and growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/vjaindra-sonawwane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vjaindra.sonawwane@gmail.com"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+971527451378"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Impact", "Capabilities", "Insights", "Publications", "Podcast", "Connect"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vjaindra Sonawwane. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Auckland, New Zealand • Dubai, UAE • Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
