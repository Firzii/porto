export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  links: {
    demo?: string;
    repo?: string;
  };
  image?: string;
  isExternal?: boolean;
};

export const projects: Project[] = [
  {
    slug: "labterpadu",
    title: "Laboratorium & Fasilitas Digital FEB UNDIP",
    summary: "Sistem informasi jadwal dan manajemen penggunaan laboratorium dan fasilitas digital secara terintegrasi di Fakultas Ekonomika dan Bisnis Universitas Diponegoro.",
    description:
      "Laboratorium dan Fasilitas Digital FEB UNDIP adalah platform manajemen terpadu yang memfasilitasi mahasiswa dan dosen dalam peminjaman laboratorium, barang/fasilitas, data riset, serta akses Bloomberg Terminal secara real-time. Sistem ini meminimalisir bentrokan jadwal praktikum dan mengotomatiskan alur kerja administrasi laboratorium secara komprehensif.",
    year: "2026",
    role: "Fullstack Developer",
    tags: ["Academic", "Management System", "Web App"],
    stack: ["Laravel", "Tailwind CSS", "MySQL"],
    highlights: [
      "Mengintegrasikan fitur peminjaman terpadu untuk laboratorium, barang/fasilitas, data riset, dan Bloomberg Terminal.",
      "Mendesain sistem penjadwalan real-time untuk mencegah konflik penggunaan fasilitas laboratorium.",
      "Membangun dashboard admin terpusat dengan Laravel untuk efisiensi pemantauan status dan persetujuan peminjaman."
    ],
    links: {
      demo: "https://labterpadu.labterpadufeb.com",
    },
    isExternal: true,
  },
];

export const featuredProjects = projects.slice(0, 3);

export const projectTags = [
  "All",
  "Laravel",
  "Tailwind CSS",
  "MySQL",
] as const;
