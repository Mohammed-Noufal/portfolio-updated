import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Icon from "./components/Icon.jsx";
import Footer from "./components/Footer.jsx";
import { useTheme } from "./hooks/useTheme.js";
import {
  navItems,
  profile,
  highlights,
  about,
  skills,
  dsa,
  experience,
  projects,
  achievements,
  education,
  contact,
} from "./data.js";

function formatTelHref(phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>

      <Nav items={navItems} name={profile.shortName} theme={theme} onToggle={toggleTheme} />

      <main id="top">
        <Hero profile={profile} highlights={highlights} />

        <Section id="about" title="About">
          {about.map((paragraph, idx) => (
            <p key={idx} className="prose">
              {paragraph}
            </p>
          ))}
          <p className="meta">
            <Icon name="pin" size={16} /> {profile.location}
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((category) => (
              <div key={category.group}>
                <dt>{category.group}</dt>
                <dd>
                  <ul className="chips">
                    {category.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <div className="card dsa">
            <h3>{dsa.title}</h3>
            <p>{dsa.summary}</p>
            <a className="link" href={dsa.href} target="_blank" rel="noreferrer">
              {dsa.linkLabel}
            </a>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.id}>
                <h3>{item.role}</h3>
                <p className="sub">
                  {item.org} ({item.mode}) · {item.period}
                </p>
                <ul className="bullets">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <div className="stack">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="bullets big">
            {achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          <div className="stack">
            {education.map((item) => (
              <div key={item.id}>
                <h3>{item.school}</h3>
                <p className="sub">
                  {item.degree} · {item.period}
                </p>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="prose">{contact.intro}</p>
          <ul className="contact">
            <li>
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={formatTelHref(profile.phone)}>
                <Icon name="phone" /> {profile.phone}
              </a>
            </li>
            {profile.social.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <Icon name={link.icon} /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <Footer name={profile.name} />
    </>
  );
}
