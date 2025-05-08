import { about } from '@/data/about';
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>My name is {about.name}</p>
      <p>I am a {about.role}</p>
      <p>I live in {about.location}</p>
    </div>
  );
}
