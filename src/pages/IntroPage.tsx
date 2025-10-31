import React from "react";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";
// IMPORT NEW COMPONENT
import TimelineSection from "../components/TimelineSection"; 
import AnalysisItem from "../components/AnalysisItem"; // Import AnalysisItem Component
// ===== ICONS (Chỉ giữ lại các icon cần thiết) =====
import {
  FaQuoteLeft,
  FaArrowUp,
  FaUsers,
} from "react-icons/fa6";

// ===== ASSETS (Dùng lại video) =====
const videoUrl = "/assets/video/bg-family.mp4"; // Dùng làm background mờ

// ====== ANIMATION VARIANTS ======
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const QuickNav: React.FC = () => {
  const items = [
    { href: "#duongloi", label: "Đường lối Lãnh đạo" },
    { href: "#tinhchat", label: "Tính chất & Tầm vóc" },
    { href: "#ketluan", label: "Kết luận" },
  ];
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-4 z-40 px-4">
        <div className="mx-auto w-full max-w-6xl">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-100 p-3 flex flex-wrap items-center gap-2 justify-center">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-indigo-700 transition-all hover:shadow-md"
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl hover:shadow-indigo-500/50 hover:scale-110 transition-all"
          aria-label="Lên đầu trang"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </>
  );
};

// Dữ liệu cho Mục II
const analysisData = [
    {
        id: 1,
        title: "1. Tính Chất Giải Phóng Dân Tộc và Thống Nhất",
        subtitle: "Cuộc chiến đấu hợp pháp của dân tộc Việt Nam chống lại sự xâm lược và âm mưu chia cắt đất nước.",
        content: "Mục tiêu Độc lập và Thống nhất là mục tiêu tối thượng, là chính nghĩa quốc gia không thể phủ nhận, được toàn dân hai miền đồng lòng ủng hộ. Thắng lợi bắt nguồn từ đường lối \"dựa vào sức mình là chính\" của Đảng, phát huy tối đa sức mạnh nội tại qua phong trào 'Xẻ dọc Trường Sơn đi cứu nước' và ý chí kiên cường của nhân dân.",
        imageSrc: "/src/assets/section1.jpg", // Hình ảnh Quốc hội/Biểu tượng chính quyền
        links: [
            { href: "#", label: "Mục tiêu Độc lập và Thống nhất (Giáo trình Lịch sử Đảng)" },
            { href: "#", label: "Sức mạnh Nội tại và Đường Trường Sơn (Dẫn chứng thực tế)" },
        ],
        reverse: false,
    },
    {
        id: 2,
        title: "2. Tầm Vóc Quốc Tế và Trận Tuyến Ý Thức Hệ",
        subtitle: "Chiến thắng là kết quả của sự kết hợp Sức mạnh Dân tộc với Sức mạnh Thời đại.",
        content: "Cuộc chiến Việt Nam là tâm điểm đối đầu giữa khối Xã hội Chủ nghĩa (XHCN) và Chủ nghĩa Đế quốc. Đảng đã thành công khi thực hiện nguyên tắc 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại'. Viện trợ quân sự, kỹ thuật và kinh tế khổng lồ từ các nước XHCN là đòn bẩy chiến lược. Thắng lợi trở thành biểu tượng cổ vũ phong trào giải phóng dân tộc toàn cầu.",
        imageSrc: "/src/assets/3ng.png", // Hình ảnh Marx-Engels-Lenin (Biểu tượng XHCN)
        links: [
            { href: "https://www.jstor.org/stable/2007886", label: "Carlyle A. Thayer: Viện trợ XHCN là nhân tố then chốt." },
            { href: "https://chomsky.info/americanpower01/", label: "Noam Chomsky và Phong trào Phản chiến Quốc tế." },
        ],
        reverse: true,
    }
];

// Component chính
const IntroPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover opacity-20 blur-sm"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30" />
      </div>

      <div className="pt-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
           <QuickNav />
        </motion.div>
      </div>

      {/* Hero Section - Lời Mở Đầu */}
      <header className="relative container mx-auto px-4 pt-16 pb-12 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-semibold text-sm mb-6 shadow-md"
          >
            <FaUsers /> Phân tích Lịch sử Đảng (1965 – 1975)
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-4 pb-1"
          >
            Bản Chất Cuộc Kháng Chiến Chống Mỹ Cứu Nước
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
            Là cuộc chiến riêng của Việt Nam, hay là một phần của phong trào cách mạng thế giới?
          </motion.p>
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mt-6">
            <p className="text-base md:text-lg text-gray-700">
              Mỹ là cường quốc quân sự hàng đầu thế giới, nhưng đã thất bại trước Việt Nam – một dân tộc nhỏ bé. Bản chất của thắng lợi nằm ở sự kết hợp biện chứng giữa **ý chí tự lực** của dân tộc và **sự ủng hộ** của các lực lượng tiến bộ toàn cầu.
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-700 italic">
               Bài luận này sẽ trình bày đường lối lãnh đạo của Đảng và phân tích các dữ kiện lịch sử để khẳng định đây là sự kết hợp biện chứng giữa mục tiêu Giải phóng dân tộc và tinh thần Chủ nghĩa Quốc tế.
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Mục I: Đường Lối Lãnh Đạo Chiến Lược (Dùng Timeline Component) */}
        <section id="duongloi">
          <TimelineSection />
        </section>

        {/* Mục II: Phân Tích Tính Chất và Ý Nghĩa Phổ Quát */}
        <section id="tinhchat" className="pt-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center drop-shadow-md">
            II. Phân Tích Tính Chất và Ý Nghĩa Quốc Tế của Cuộc Kháng Chiến
          </h2>
          
          <div className="space-y-12">
              {analysisData.map((item) => (
                  <AnalysisItem
                      key={item.id}
                      title={item.title}
                      subtitle={item.subtitle}
                      content={item.content}
                      imageSrc={item.imageSrc}
                      links={item.links}
                      reverse={item.reverse}
                  />
              ))}
          </div>

        </section>

        {/* Kết Luận (Nổi bật hơn) */}
        <section
          id="ketluan"
          className="pt-8 relative text-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white rounded-3xl shadow-2xl p-8 md:p-16 overflow-hidden transform transition-transform hover:scale-[1.01]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 opacity-70" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6 border-b-2 border-white/50 inline-block pb-2">KẾT LUẬN CUỐI CÙNG</h2>

            <FaQuoteLeft className="text-5xl mb-4 opacity-50 mx-auto text-indigo-300" />
            <p className="max-w-5xl mx-auto text-2xl leading-relaxed tracking-wide font-medium">
              Bản chất của Cuộc kháng chiến chống Mỹ cứu nước là sự **thống nhất biện chứng** hoàn hảo. Chiến thắng vĩ đại năm 1975 là minh chứng lịch sử cho khả năng kết hợp **Sức mạnh Dân tộc** (Ý chí Độc lập) với **Sức mạnh Thời đại** (Chủ nghĩa Quốc tế), khẳng định chân lý:
              <br/><br/>
              <span className="font-extrabold text-yellow-300 text-3xl md:text-4xl block mt-4">
                "Không có gì quý hơn độc lập, tự do."
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IntroPage;
