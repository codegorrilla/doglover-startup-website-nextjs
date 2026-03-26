import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const filePath = resolve('src/components/Contact.jsx');
const source = readFileSync(filePath, 'utf8');

const checks = [
  {
    name: 'name input has required + minLength=2',
    pattern: /<input[\s\S]*?id="name"[\s\S]*?required[\s\S]*?minLength=\{2\}/,
  },
  {
    name: 'email input has required + type=email',
    pattern: /<input[\s\S]*?type="email"[\s\S]*?id="email"[\s\S]*?required/,
  },
  {
    name: 'phone input has required + type=tel + pattern',
    pattern: /<input[\s\S]*?type="tel"[\s\S]*?id="phone"[\s\S]*?required[\s\S]*?pattern="\[0-9\(\)\\-\\s\+\]\{10,\}"/,
  },
  {
    name: 'description textarea has required + minLength=10',
    pattern: /<textarea[\s\S]*?id="description"[\s\S]*?required[\s\S]*?minLength=\{10\}/,
  },
];

const failures = checks.filter(({ pattern }) => !pattern.test(source));

if (failures.length > 0) {
  console.error('Form validation checks failed:');
  failures.forEach(({ name }) => console.error(`- ${name}`));
  process.exit(1);
}

console.log(`All ${checks.length} contact form validation checks passed.`);
