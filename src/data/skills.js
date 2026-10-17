import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import c from '../assets/c.jpg'
import csharp from '../assets/123.png'
import dsa from '../assets/dsa.jpg'
import sql from '../assets/SQL.png'
import vite from '../assets/vite.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'

// Full class strings are written out so Tailwind can detect them.
export const skillGroups = [
  {
    title: 'Programming Languages',
    containerClass:
      'w-[90%] my-[10vh] font-bold text-[1.5rem] rounded-4xl grid md:grid-cols-5 grid-cols-2 md:w-[45%] gap-x-3 gap-y-5 bg-[#ddecfd] mx-auto py-[30px] px-[20px]',
    titleClass: 'md:col-span-5 col-span-2 text-center mt-[20px]',
    itemTextSize: 'text-[1rem]',
    items: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JavaScript', icon: js },
      { name: 'Java', icon: java },
      { name: 'Python', icon: python },
      { name: 'C', icon: c, spacing: 'mb-4' },
      { name: 'C#', icon: csharp },
      { name: 'DSA', icon: dsa },
      { name: 'SQL', icon: sql },
    ],
  },
  {
    title: 'Frameworks',
    containerClass:
      'my-[10vh] font-bold text-[1.5rem] rounded-4xl grid md:grid-cols-3 grid-cols-2 w-[90%] md:w-[35%] gap-x-3 gap-y-5 bg-[#ede7fd] mx-auto py-[30px] px-[20px]',
    titleClass: 'md:col-span-3 col-span-2 text-center mt-[20px]',
    itemTextSize: 'text-[0.8rem]',
    items: [
      { name: 'Vite', icon: vite, spacing: 'mb-4' },
      { name: 'React', icon: react },
      { name: 'Node', icon: node },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Bootstrap', icon: bootstrap },
    ],
  },
]
