import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// IMPORT NEW COMPONENT
import TimelineSection from "../components/TimelineSection"; 
// ===== ICONS (Chỉ giữ lại các icon cần thiết) =====
import {
  FaQuoteLeft,
  FaLandmark,
  FaGlobe,
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

// Khối chứa các liên kết dẫn chứng (giữ lại và sửa cho đơn giản)
const CiteBox: React.FC<{ links: { href: string; label: string }[] }> = ({ links }) => {
  return (
    <div className={`mt-4 rounded-xl bg-white p-4 md:p-5 ring-1 ring-inset ring-indigo-100 shadow-sm`}>
      <div className="flex items-center gap-2">
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700 ring-1 ring-inset ring-indigo-100`}>
          <FaUsers className="text-base" />
        </span>
        <p className="text-[14px] md:text-base font-semibold text-slate-800">Nguồn Tham Khảo và Dẫn Chứng</p>
      </div>

      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href} className="group flex items-start gap-3">
            <FaUsers className={`mt-1 shrink-0 text-indigo-600`} />
            <div>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-indigo-300 hover:decoration-indigo-600 font-semibold text-indigo-600 hover:text-indigo-800 transition-all"
              >
                {l.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


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
        <QuickNav />
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
              Mỹ là cường quốc quân sự hàng đầu thế giới, nhưng đã thất bại trước Việt Nam – một dân tộc nhỏ bé. Bản chất của thắng lợi nằm ở sự kết hợp biện chứng giữa ý chí tự lực của dân tộc và sự ủng hộ của các lực lượng tiến bộ toàn cầu.
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
        <section id="tinhchat" className="pt-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center drop-shadow-md">
            II. Phân Tích Tính Chất và Ý Nghĩa Quốc Tế của Cuộc Kháng Chiến
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Cột 1: Tính Chất Giải Phóng Dân Tộc */}
            <motion.div
              className="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-8 border border-green-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 text-green-600">
                <FaLandmark className="text-3xl" />
                <h3 className="text-2xl font-bold text-gray-900">1. Tính Chất Giải Phóng Dân Tộc và Thống Nhất</h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="font-bold text-green-700">Chính nghĩa Quốc gia:</span> Đây là cuộc chiến đấu hợp pháp của dân tộc Việt Nam chống lại sự xâm lược và âm mưu chia cắt đất nước của Mỹ. Mục tiêu **Độc lập và Thống nhất** là mục tiêu chính nghĩa, được quốc tế thừa nhận.
                </li>
                <li>
                  <span className="font-bold text-green-700">Sức mạnh Nội tại:</span> Thắng lợi bắt nguồn từ đường lối **"dựa vào sức mình là chính"**. Sức mạnh toàn dân, thể hiện qua phong trào "Xẻ dọc Trường Sơn đi cứu nước" và ý chí kiên cường của nhân dân hai miền, là yếu tố cốt lõi quyết định kết cục chiến tranh.
                </li>
              </ul>
            </motion.div>

            {/* Cột 2: Tầm Vóc Quốc Tế */}
            <motion.div
              className="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-8 border border-blue-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                <FaGlobe className="text-3xl" />
                <h3 className="text-2xl font-bold text-gray-900">2. Tầm Vóc Quốc Tế và Thời Đại</h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="font-bold text-blue-700">Trận Tuyến Ý Thức Hệ:</span> Cuộc chiến Việt Nam là tâm điểm của Chiến tranh Lạnh, là nơi đối đầu trực diện giữa khối XHCN và khối TBCN.
                </li>
                <li>
                  <span className="font-bold text-blue-700">Trận Tuyến của Chủ Nghĩa Quốc Tế:</span> Đảng luôn nhấn mạnh **"Kết hợp sức mạnh dân tộc với sức mạnh thời đại"**. Viện trợ quân sự, kỹ thuật và kinh tế khổng lồ từ các nước XHCN (Liên Xô, Trung Quốc) là đòn bẩy chiến lược.
                </li>
                <li>
                  <span className="font-bold text-blue-700">Biểu Tượng Cổ Vũ Phong trào:</span> Thắng lợi trở thành biểu tượng chủ nghĩa anh hùng cách mạng, cổ vũ mạnh mẽ cho các phong trào đấu tranh chống đế quốc trên toàn thế giới, đồng thời thúc đẩy phong trào phản chiến quốc tế (như sự lên án của Noam Chomsky).
                </li>
              </ul>
              <CiteBox
                links={[
                  { href: "#", label: "Ví dụ Học thuật: Carlyle A. Thayer về Viện trợ XHCN" },
                  { href: "#", label: "Dẫn chứng Phong trào: Noam Chomsky và Phong trào Phản chiến" },
                ]}
              />
            </motion.div>
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
            {/* <div className="mt-8 text-sm text-indigo-200">
              *Tư liệu tham khảo: Giáo trình Lịch sử Đảng và các nguồn học thuật uy tín.*
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default IntroPage;
