import quizzy from '../assets/quizzy.png'
import currencyConverter from '../assets/currencyConverter.png'
import typewriter from '../assets/typewriter.png'
import hotelManagement from '../assets/hotelManagement.png'
import plagForm from '../assets/PlagForm.png'
import legoMosaic from '../assets/legoMosaic.png'
import Security from '../assets/CNS_IOT_Security.png'
import IOT from '../assets/IOT.png'
import Todo from '../assets/Todo.png'
import passgen from '../assets/PasswordGenerator.png'
export const projects = [
  {
    title: 'LegoMosaic',
    description:
      'Team project for Applied AI that turns an animal photo into a buildable Lego mosaic using real Lego colors. Uses OpenCV for preprocessing and color reduction, a genetic algorithm written from scratch, a Flask backend, and a React + Tailwind frontend that shows the original and result side by side.',
    link: 'https://youtu.be/uymYrE4deT8',
    image: legoMosaic,
    linkLabel: 'Watch Demo',
  },
  {
    title: 'Real-Time Traffic Monitoring System',
    description:
      'A Raspberry Pi and camera-based system that tracks real-time passenger counts on buses and can be adapted to monitor traffic at any doorway. Built with a TinyML (YOLO) model, Python, Firebase, and a React dashboard.',
    image: IOT,
    link: 'https://www.youtube.com/watch?v=CXEYt82gjqI',
    linkLabel: 'Watch Demo',
  },
  {
    title: 'Securing IoT Devices',
    description:
      'Extends the traffic monitoring system with a secure platform for data transfer between IoT devices and the cloud (Firebase), using rotating secure keys, rate limiting, and device blocking to protect low-power devices.',
    image: Security,
    link: 'https://www.youtube.com/watch?v=8OjqJszHSk4',
    linkLabel: 'Watch Demo',
  },
  {
    title: 'Quizzy- The Mobile App',
    description:
      'Developed an interactive quiz application using Android Studio (Java) with biometric and password-based authentication. Key features include score calculation, review attempts, and a secure login system.',
    image: quizzy,
    alt: 'Quizzy Mobile App',
    imgHeight: 'md:h-[420px]',
  },
  {
    title: 'Currency Converter',
    description:
      'Created a web-based currency converter that utilizes Frankfurter API to fetch real-time exchange rates and display converted values.',
    image: currencyConverter,
    alt: 'Currency Converter Icon',
    imgHeight: 'md:h-[438px]',
    link: 'https://ravi200603.github.io/currencyConverter/',
  },
  {
    title: 'Personal-TypeWriter',
    description:
      'A clean typing test web app with a 60s timer, real-time WPM tracking, and smart key handling built with vanilla JS and Tailwind CLI.',
    image: typewriter,
    alt: 'Personal-TypeWriter Icon',
    imgHeight: 'md:h-[438px]',
    link: 'https://ravi200603.github.io/personalTypeWriter/',
  },
  {
    title: 'Hotel Management Website',
    description:
      'Designed a hotel booking and facility management website featuring room availability, booking system, and a contact form',
    image: hotelManagement,
    alt: 'Hotel Management Website Icon',
    imgHeight: 'md:h-[420px]',
    textPadding: 'px-3',
    link: 'https://ravi200603.github.io/HotelModelWeb/',
  },
  {
    title: 'TRU Plagiarism Form',
    description:
      'Developed a Windows Form application using C# and .NET Framework with integrated SQL database for storing input data. Includes input validation and CRUD operations.',
    image: plagForm,
    alt: 'TRU Plagiarism Form Icon',
    imgHeight: 'md:h-[420px]',
  },
  {
    title: 'Todo App',
    description: 'A React to-do app built with hooks, localStorage persistence, and Tailwind CSS.',
    image: Todo,
    link: 'https://ravi200603.github.io/todoApp/',
  },
  {
    title: 'Password Generator',
    description: 'A random password generator built with React and Tailwind CSS.',
    image: passgen,
    link: 'https://ravi200603.github.io/password-generator/',
  },
]
