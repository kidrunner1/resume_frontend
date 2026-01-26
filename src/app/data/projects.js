/* Project Data */
const projects = [
    {
        id: 1,
        category: "Web Application",
        title: "CHEMIMONITORING",
        description:
            "ระบบติดตามและแสดงผลข้อมูลทางเคมีผ่าน Web Dashboard ที่ออกแบบมาเพื่อการใช้งานจริงในภาคสนาม",
        details: [
            "พัฒนา Front-End ด้วย React และ Tailwind CSS",
            "ออกแบบ Dashboard สำหรับแสดงผลข้อมูลแบบ Realtime",
            "โครงสร้างโค้ดแยกส่วนชัดเจน รองรับการขยายระบบ",
        ],
        images: [
            "/images/Project/CHEMI1.png",
            "/images/Project/CHEMI2.png",
            "/images/Project/CHEMI3.png",
        ],

        githubUrl: "https://github.com/atttyys/cemi-iot-mtr",
    },
    {
        id: 2,
        category: "Mobile Application",
        title: "Power Of Enrichment (POE)",
        description:
            "แอปพลิเคชันเพื่อการเรียนรู้ภาษาอังกฤษ ที่ออกแบบมาเพื่อช่วยพัฒนาทักษะการอ่าน (Reading Comprehension) สำหรับผู้เรียนทุกระดับ ตั้งแต่ระดับเริ่มต้น (A1) จนถึงระดับสูง (C2)",
        details: [
            "พัฒนาแอปด้วย React Native และ Expo Framework",
            "เน้นการฝึกทักษะการอ่านภาษาอังกฤษผ่านบทความสั้น พร้อมคำถามท้ายบท",
            "ช่วยให้ผู้ใช้ฝึกคิด วิเคราะห์ และประเมินผลการเรียนรู้ด้วยตนเอง",
            "ออกแบบ UI ให้ใช้งานง่าย เป็นมิตร เหมาะสำหรับนักเรียน ครู และบุคคลทั่วไป",
        ],
        images: [
            "/images/Project/M1.png",
            "/images/Project/M2.png",
            "/images/Project/M3.png",
            "/images/Project/M4.png",
            "/images/Project/M5.png",
            "/images/Project/M6.png",
        ],
        liveUrl: "",
        githubUrl: "https://github.com/kidrunner1/POE-EnglishTest",
    },
    {
        id: 3,
        category: "Web Application",
        title: "ENFA-Website",
        description:
            "การออกแบบและทดลองแนวคิด UI/UX สำหรับ Web Application",
        details: [
            "เน้นความเรียบง่ายและการใช้งานจริง",
            "ออกแบบตามหลัก Responsive Design",
            "ทดลอง Interaction และ Micro-animation",
        ],
        images: [
            "/images/Project/EN1.png",
            "/images/Project/EN2.png",
            "/images/Project/EN3.png",
            "/images/Project/EN4.png",
            "/images/Project/EN5.png",
            "/images/Project/EN6.png",

        ],
        liveUrl: "https://enfa-engineering-is3nelu6r-kidrunner1s-projects.vercel.app/",
        githubUrl: "https://github.com/kidrunner1/ENFA-Website",
    },
    {
        id: 4,
        category: "Web Application",
        title: "More Projects Coming Soon",
        description:
            "โปรเจกต์ใหม่ที่อยู่ระหว่างการพัฒนา โดยเน้น Performance และ UX",
        details: [
            "ทดลองโครงสร้าง App Router",
            "ออกแบบ UI สำหรับใช้งานบนทุกอุปกรณ์",
            "วางแนวทางรองรับระบบหลังบ้าน",
        ],
        images: [
            "https://placehold.co/900x600/10B981/FFFFFF?text=Coming+Soon+1",
            "https://placehold.co/900x600/059669/FFFFFF?text=Coming+Soon+2",
        ],
        liveUrl: "",
        githubUrl: "",
    },
];

export default projects; 
