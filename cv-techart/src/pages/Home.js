// Home.js
import React from 'react';
import Section from '../components/section';
import ListItem from '../components/listitem';

function Home() {
  return (
    <div className="p-6">
      <Section title="About Me">
        <p className="text-gray-700">
          Hello! I’m John Doe, a passionate software developer with expertise in building responsive web applications using React, JavaScript, and CSS. I love solving complex problems and continuously improving my skills in the latest technologies.
        </p>
      </Section>

      <Section title="Skills">
        <div className="grid grid-cols-2 gap-4">
          <ListItem title="JavaScript" details="Proficient in ES6+, functional programming, and asynchronous code." />
          <ListItem title="React" details="Experienced in building reusable components and managing state." />
          <ListItem title="CSS & Tailwind" details="Skilled in responsive design with Tailwind CSS and CSS modules." />
          <ListItem title="Git & GitHub" details="Comfortable with version control and collaborative workflows." />
        </div>
      </Section>

      <Section title="Quick Links">
        <div className="flex flex-col space-y-2">
          <a href="/experience" className="text-blue-500 hover:underline">Experience</a>
          <a href="/education" className="text-blue-500 hover:underline">Education</a>
        </div>
      </Section>
    </div>
  );
}

export default Home;