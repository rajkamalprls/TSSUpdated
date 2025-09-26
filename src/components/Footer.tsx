import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const forStudents = [
    { name: "Find Jobs", href: "#jobs" },
    { name: "Internships", href: "#internships" },
    { name: "Courses", href: "#courses" },
    { name: "Mentorship", href: "#mentorship" },
  ];

  const forBusinesses = [
    { name: "Hire Talent", href: "#hire" },
    { name: "Partner with Us", href: "#partner" },
    { name: "Post Jobs", href: "#post-jobs" },
    { name: "Campus Recruitment", href: "#campus" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-background/70 mb-6 max-w-2xl mx-auto">
              Get the latest job opportunities, course updates, and startup insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
              <span className="text-xl font-bold">The Student Spot</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Connecting students, startups, colleges, and companies in one comprehensive ecosystem for growth, learning, and opportunity.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-background/50" />
                <span className="text-background/70">hello@thestudentspot.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-background/50" />
                <span className="text-background/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-background/50" />
                <span className="text-background/70">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="font-semibold mb-4">For Students</h4>
            <ul className="space-y-2">
              {forStudents.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2">
              {forBusinesses.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/70 text-sm mb-4 md:mb-0">
              © 2024 The Student Spot. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-background/50 hover:text-background transition-smooth"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center space-x-4 text-sm">
                <a href="#privacy" className="text-background/70 hover:text-background transition-smooth">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-background/70 hover:text-background transition-smooth">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;