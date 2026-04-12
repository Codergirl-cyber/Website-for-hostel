import hostelExterior from '../assets/images/hostel_exterior.jpg';
import studentsPrayer from '../assets/images/students_prayer.jpg';
import studentsDining from '../assets/images/students_dining.jpg';
import studentsGroup from '../assets/images/students_group.jpg';

export const images = [
  {
    url: hostelExterior,
    title: "Hostel Exterior",
    category: "hostel"
  },
  {
    url: studentsPrayer,
    title: "Morning Prayer",
    category: "hostel"
  },
  {
    url: studentsDining,
    title: "Dining Area",
    category: "facilities"
  },
  {
    url: studentsGroup,
    title: "Students Group",
    category: "hostel"
  },
  {
    url: "/gallery-poster-1.jpg",
    title: "Hostel Features",
    category: "information"
  },
  {
    url: "/gallery-poster-2.jpg",
    title: "Study Point Info",
    category: "information"
  },
  {
    url: "/gallery-poster-3.jpg",
    title: "Admission Details",
    category: "information"
  }
];

export const videos = [
  {
    id: "prayer",
    url: new URL('../assets/videos/prayer.mp4', import.meta.url).href,
    type: "local"
  },
  {
    id: "yoga",
    url: new URL('../assets/videos/yoga.mp4', import.meta.url).href,
    type: "local"
  }
];



