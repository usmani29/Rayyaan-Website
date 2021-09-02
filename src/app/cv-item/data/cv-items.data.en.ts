import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Rayyaan Usmani',
  position: 'Software Engineer',
  description: `Rayyaan graduated from the University of Wisconsin-Madison with degrees in Computer Science and Computer Engineering in 2019. He joined Visa as a full-time Software Engineer in July 2019 and has spent his time there developing new skills and gaining vast knowledge. He is a software engineer that yearns to write code that matters. Computer Science is a never-ending puzzle which can be used to make life better for everyone. Rayyaan is interested in using the skills and experience that he has gained to create and invest time in start-ups which transform the lives of people around the world.

  In his free-time, Rayyaan enjoys playing and watching sports, mainly basketball. So many lessons can be derived from the game of basketball, such as the importance of team work, working on your craft, and performing under pressure. Other hobbies include reading books (fiction, non-fiction, fantasy, anything really), spending time with the family watching movies and TV shows, and taking walks outside while listening to music and podcasts. Feel free to reach out for work opportunities, start-up ideas, or just to hang out and talk!
  `};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'Senior Software Engineer',
    subtitle: 'Visa, Inc.',
    begin: 'August 2021',
    end: '',
    thumbnail: 'visa-logo.png'
  },
  {
    title: 'Software Engineer',
    subtitle: 'Visa, Inc.',
    begin: 'July 2019',
    end: 'August 2021',
    description: 'Leading a team of engineers to develop and maintain an SSL certificate provisioning application.\n' + 
    'Performed tasks as a full stack developer, working on critical features from end-to-end using Java Spring and Angular.\n' +
    'Implemented an integration directly with Visa Certificate Authority servers to provision certificates and save Visa an average of $750,000/year (achieved multiple Visa GoBeyond awards for this effort).\n' +
    'Oversaw and assisted a team of interns who worked on creating an approvals application for CloudView.\n' +
    'Maintaining and improving environment request flow for Visa Private CloudView.\n' +
    'Recognized for strong collaboration and extending help and support at multiple avenues.\n',
    tags: ['Java', 'Spring', 'Git', 'Angular', 'HTML', 'CSS', 'React', 'MongoDB', 'MySQL', 'IntelliJ', 'Jira',
      'Scrum', 'Jenkins', 'BitBucket'],
    thumbnail: 'visa-logo.png',
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'Visa, Inc.',
    begin: 'May 2018',
    end: 'August 2018',
    description: 'Designed a daily automated synchronized job to change software packages to have the proper security classification.\n' +
    'Created a process which sends an email to the Visa Cloud Packaging Team if software packages have had their classification changed due to the synchronized job.\n' +
    'Researched and fixed security loopholes in the Cloud Packaging Team\'s code.',
    tags: ['Java', 'Spring', 'Git', 'MongoDB', 'IntelliJ', 'Jira', 'Scrum', 'Jenkins', 'BitBucket'],
    thumbnail: 'visa-logo.png',
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'Maverick Software Consulting/Thomson Reuters',
    begin: 'May 2017',
    end: 'September 2017',
    description: 'Worked with the legal technical team at Thomson Reuters to run a daily job to hit APIs and store information into MySQL database.\n' +
    'Redesigned the data migration technique to OOD-related process.\n' +
    'Completed JUnit Testing to ensure various programs are working as intended.',
    tags: ['Java', 'MySQL', 'Spring'],
    thumbnail: 'maverick-logo.png',
  }
];

export const CERTIFICATES: CvItem[] = [
];

export const EDUCATION: CvItem[] = [
  {
    title: 'University of Wisconsin-Madison',
    subtitle: 'Double Major in Computer Engineering (BE) & Computer Science (BS)',
    begin: 'September 2015',
    end: 'May 2019',
    description: 'While at the University of Wisconsin-Madison, I took on a variety of roles. I was heavily involved' +
    ' in the school\'s Muslim Students Association, serving as treasurer in Spring 2017 and then vice president in the 2018-2019 academic year. ' +
    'We hosted many interesting events, ranging from informational sessions on current events to comedy nights. I also took on the social chair role of the ' +
    ' Institute of Electrical and Electronics Engineers, as we built a variety of objects, such as drones.',
    thumbnail: 'wisconsin-logo.png',
  },
  {
    title: 'Eagan High School',
    subtitle: 'GED',
    begin: 'September 2011',
    end: 'June 2015',
    description: '',
    tags: ['National Honor Society', 'National Language Honor Society', 'Advanced Placement Scholar with Honor', 
    'Business Professionals of America Club Officer', '2x Business Professionals of America National Qualifier', 'LINK Leader', 'School Newspaper Sports Writer', 'Honors Precalculus Tutor', 'Honors Chemistry Tutor'],
    thumbnail: 'eagan-high-logo.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'English', level: '100' },
  { title: 'Hindi', level: '60' },
  { title: 'Urdu', level: '60' },
  { title: 'Spanish', level: '40' }
];

export const PROJECTS: CvItem[] = [
  
];

export const VOLUNTEERING: CvItem[] = [
];

export const CONTACT = {
  city: 'Austin, Texas',
  phone: '',
  mail: 'rayyaan.usmani@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rayyaan-usmani-546945b4/',
  github: 'https://github.com/usmani29',
  facebook: 'https://www.facebook.com/rayyaan.usmani',
  instagram: 'https://www.instagram.com/usmani03/',
};

export const INTERESTS = [
  {
    title: 'Playing Basketball'
  },
  {
    title: 'Playing Football'
  },
  {
    title: 'Building Software'
  },
  {
    title: 'Reading'
  },
  {
    title: 'Watching Movies'
  }
];

export const PUBLICATIONS: CvItem[] = [
];

export const TALKS: CvItem[] = [
];
