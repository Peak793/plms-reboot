import avatarPlaceholder from "@/assets/images/AvatarPlaceholder.png"

export const getClassNames = (classes, ...classNames) => classNames.map(className => classes[className]).join(' ');

export const dayColor = {
  "จันทร์": "var(--monday)",
  "อังคาร": "var(--tuesday)",
  "พุธ": "var(--wednesday)",
  "พฤหัสบดี": "var(--thursday)",
  "ศุกร์": "var(--friday)",
  "เสาร์": "var(--saturday)",
  "อาทิตย์": "var(--sunday)",
  "Monday": "var(--monday)",
  "Tuesday": "var(--tuesday)",
  "Wednesday": "var(--wednesday)",
  "Thursday": "var(--thursday)",
  "Friday": "var(--friday)",
  "Saturday": "var(--saturday)",
  "Sunday": "var(--sunday)",
}

export const groups = [
  { groupId: "22020401", groupNo: "401", year: "2022", semester: "1", classDate: "จันทร์, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
  { groupId: "22020402", groupNo: "402", year: "2022", semester: "1", classDate: "อังคาร, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
  { groupId: "22020403", groupNo: "403", year: "2022", semester: "1", classDate: "พุธ, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
  { groupId: "22020404", groupNo: "404", year: "2022", semester: "2", classDate: "พฤหัสบดี, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
  { groupId: "22020405", groupNo: "405", year: "2022", semester: "2", classDate: "ศุกร์, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
  { groupId: "22020406", groupNo: "406", year: "2022", semester: "2", classDate: "เสาร์, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
  { groupId: "22020407", groupNo: "407", year: "2022", semester: "2", classDate: "อาทิตย์, 09:00:00 - 12:00:00", students: 45, instructor: "ชรินดา สนธิดี" },
]

export const SemesterOptions = new Set(["1", "2"])
export const ClassDateOptions = new Set(["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"])
export const InstructorOptions = new Set(["ชรินดา สนธิดี"])

export const mockStudentsLabScores = [
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010202",
    name: "ชรินดา สนธิดี",
    scores: [10, 10, 9, 8, 7, 9, 10, 9, 10, 10, 10, 10, 8, 9, 9, 8, 10, 9, 10, 10]
  },
  {
    avatar: avatarPlaceholder,
    studentID: "63010224",
    name: "ชาญวนิษฐ์ นุชอยู่",
    scores: [10, 9, 9, 8, 7, 9, 10, 9, 10, 10, 9, 8, 9, 9, 8, 9, 10, 9, 9, 10]
  },
];

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: "600px",
  width: "fit-content",
  bgcolor: '#152343',
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};