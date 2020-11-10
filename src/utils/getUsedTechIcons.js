import React from 'react';
import { FaReact, FaNode, FaSass, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiStyledComponents } from 'react-icons/si';

export default function getUsedTechIcons(label) {

  const icons = [
    {
      match: ['chat-app', 'connect-four', 'date-picker', 'material-design', 'dropbox-clone', 'quiz-master', 'todo-app', 'trello-clone'],
      icon: <FaReact />
    },
    {
      match: ['trello-clone', 'chat-app'],
      icon: <FaNode />
    },
    {
      match: [],
      icon: <FaSass />
    },
    {
      match: ['chat-app', 'connect-four', 'material-design', 'dropbox-clone', 'quiz-master', 'todo-app', 'trello-clone'],
      icon: <SiStyledComponents />
    },
    {
      match:
        ['date-picker'],
      icon: <FaCss3Alt />
    },
    {
      match:
        [], icon:
        <SiJavascript />
    }
  ]

  return icons.reduce((acc, icon) => {
    let isMatch = icon.match.find(x => x === label);


    if (isMatch) {
      acc.push({ id: Math.random(), icon: icon.icon });
    }

    return acc;
  }, [])
}