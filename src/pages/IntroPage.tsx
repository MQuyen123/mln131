import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

// ===== ICONS =====
import {
  FaQuoteLeft,
  FaScaleBalanced,
  FaChartLine,
  FaLightbulb,
  FaChevronDown,
  FaUpRightFromSquare,
  FaTag,
  FaXmark,
  FaNewspaper,
  FaArrowUp,
  FaUsers,
  FaHeart,
  FaHandshake,
  FaGraduationCap,
} from "react-icons/fa6";

// ===== ASSETS =====
// TODO: Đảm bảo bạn có file ảnh và video này trong thư mục /src/assets
import familyImage from "../assets/family-hero.png";
const videoUrl = "/assets/video/bg-family.mp4";

// ====== CONFIG & DATA ======
type ArticleItem = {
  id: string;
  title: string;
  sourceName: string;
  href: string;
  cover?: string;
  summary?: string;
  tags?: string[];
};

const ARTICLES: ArticleItem[] = [
  {
    id: "a1",
    title: "Hơn 2,2 triệu người ly hôn/ly thân: tỉnh thành nào cao nhất?",
    sourceName: "Người Lao Động",
    href: "https://nld.com.vn/hon-22-trieu-nguoi-ly-hon-ly-than-tinh-thanh-nao-cao-nhat-196250301165652065.htm",
    cover: familyImage,
    tags: ["Ly hôn", "Đô thị", "25–35"],
    summary: "Bài viết điểm hiện trạng ly hôn tăng ở nhóm dân cư trẻ tại các đô thị lớn; gợi mở các nguyên nhân & hệ quả xã hội.",
  },
  {
    id: "a2",
    title: "Các nhóm bạo lực gia đình & nguyên nhân",
    sourceName: "Hội Liên hiệp Phụ nữ Việt Nam",
    href: "https://vwu.vn/web/guest/tin-chi-tiet/-/chi-tiet/cac-nhom-bao-luc-gia-%C4%91inh-nguyen-nhan-49367-7.html",
    cover: familyImage,
    tags: ["Bạo lực", "Tinh thần", "Kinh tế"],
    summary: "Nhận diện dạng bạo lực tinh thần, kiểm soát trên mạng xã hội, và bạo lực kinh tế trong đời sống gia đình.",
  },
  {
    id: "a3",
    title: "Áp lực kinh tế & chi phí y tế của già hoá dân số",
    sourceName: "Báo Đầu tư",
    href: "https://baodautu.vn/ap-luc-kinh-te-va-chi-phi-y-te-cua-gia-hoa-dan-so-d202825.html",
    cover: familyImage,
    tags: ["Phúc lợi", "Người cao tuổi", "Chi phí"],
    summary: "Phân tích áp lực kinh tế – y tế trong bối cảnh già hoá dân số, liên hệ tới chất lượng thời gian gia đình.",
  },
  {
    id: "a3-1",
    title: "Thực trạng và giải pháp chăm sóc người cao tuổi ở Việt Nam hiện nay",
    sourceName: "VHU",
    href: "https://vhu.edu.vn/Resources/Docs/SubDomain/xhtt/2021/Th%E1%BB%B1c%20tr%E1%BA%A1ng%20v%C3%A0%20gi%E1%BA%A3i%20ph%C3%A1p%20ch%C4%83m%20s%C3%B3c%20ng%C6%B0%E1%BB%9Di%20cao%20tu%E1%BB%95i%20%E1%BB%9F%20Vi%E1%BB%87t%20Nam%20hi%E1%BB%87n%20nay.pdf",
    cover: familyImage,
    tags: ["Chăm sóc", "Người cao tuổi"],
    summary: "Chương trình chăm sóc sức khỏe người cao tuổi đến năm 2030 đặt mục tiêu: 100% người cao tuổi được khám sức khỏe định kỳ, 50% xã phường có mô hình chăm sóc ban ngày.",
  },
  {
    id: "a4",
    title: "Thanh thiếu niên & mạng xã hội: rủi ro và định hướng",
    sourceName: "Tài liệu học thuật, báo chí",
    href: "https://scholar.dlu.edu.vn/thuvienso/bitstream/DLU123456789/209913/1/CVv39S212023087.pdf",
    cover: familyImage,
    tags: ["Mạng xã hội", "Giá trị", "Thanh niên"],
    summary: "Tổng hợp góc nhìn về ảnh hưởng của mạng xã hội đến nhận thức, chuẩn mực và hành vi của giới trẻ.",
  },
  {
    id: "a4-1",
    title: "Làn sóng đen trên mạng xã hội: nguy cơ khó lường và giải pháp ngăn chặn",
    sourceName: "Báo Dân tộc",
    href: "https://baodantoc.vn/lan-song-den-tren-mang-xa-hoi-nguy-co-kho-luong-va-giai-phap-ngan-chan-1740716792922.htm",
    cover: familyImage,
    tags: ["Mạng xã hội", "Rủi ro"],
    summary: "Việt Nam có 76.95 triệu người dùng mạng xã hội (chiếm 78.1% dân số). Hơn 60% thanh thiếu niên từng tiếp xúc với nội dung không lành mạnh trên mạng xã hội.",
  },
  {
    id: "a4-2",
    title: "Thanh niên thế hệ Z trước sự phát triển của mạng xã hội ở Việt Nam hiện nay",
    sourceName: "Thanh niên Việt",
    href: "https://thanhnienviet.vn/thanh-nien-the-he-z-truoc-su-phat-trien-cua-mang-xa-hoi-o-viet-nam-hien-nay-209241001111330009.htm",
    cover: familyImage,
    tags: ["Mạng xã hội", "Thanh niên"],
    summary: "Mạng xã hội ảnh hưởng đến nhận thức xã hội qua niềm tin, thái độ cộng đồng và kiến thức người dùng.",
  },
];


// ====== ANIMATION VARIANTS ======
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ====== HELPER COMPONENTS ======
const LinkOut: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-indigo-300 hover:decoration-indigo-600 font-semibold text-indigo-600 hover:text-indigo-800 transition-all"
  >
    {children}
    <FaUpRightFromSquare className="text-xs" />
  </a>
);

type CollapsibleProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  idAnchor?: string;
  children: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  subtitle,
  icon,
  defaultOpen = false,
  idAnchor,
  children,
}) => {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <motion.div
      id={idAnchor}
      className="bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 text-left px-6 md:px-8 py-6 md:py-7 hover:bg-indigo-50/50 transition-colors"
      >
        <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl shadow-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <FaChevronDown
          className={`text-gray-600 text-xl transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-8 text-gray-800 leading-relaxed space-y-4 border-t border-indigo-100 pt-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ArticleModal: React.FC<{
  article: ArticleItem;
  onClose: () => void;
}> = ({ article, onClose }) => (
  <div
    className="fixed inset-0 bg-black/75 z-[1000] flex items-center justify-center p-4"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {article.cover ? (
        <img
          src={article.cover}
          alt={article.title}
          className="w-full h-56 md:h-64 object-cover"
        />
      ) : (
        <div className="w-full h-56 md:h-64 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500" />
      )}

      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <FaNewspaper className="text-indigo-600" />
          {article.sourceName}
        </p>
        {article.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {article.summary && (
          <p className="text-gray-700 mt-5 leading-relaxed">{article.summary}</p>
        )}

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition"
          >
            Đóng
          </button>
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium inline-flex items-center gap-2 shadow-lg transition"
          >
            Đọc bài gốc <FaUpRightFromSquare />
          </a>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-xl bg-black/50 text-white hover:bg-black/70 transition backdrop-blur"
        aria-label="Đóng"
      >
        <FaXmark className="text-xl" />
      </button>
    </motion.div>
  </div>
);


const QuickNav: React.FC = () => {
  const items = [
    { href: "#coso", label: "Cơ sở lý luận" },
    { href: "#thuctien", label: "Thực tiễn VN" },
    { href: "#giaiphap", label: "Giải pháp" },
    { href: "#articles", label: "Thư viện" },
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


// ====== MAIN PAGE COMPONENT ======
const IntroPage: React.FC = () => {
  const [articleModal, setArticleModal] = React.useState<ArticleItem | null>(null);

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

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 pt-16 pb-20 text-center">
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
            <FaUsers /> Nghiên cứu triết học Mác – Lênin
          </motion.span>
          
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6"
          >
            Gia đình Việt Nam<br />trong thời kỳ quá độ
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Từ quan điểm duy vật lịch sử, khám phá vai trò then chốt của gia đình
            trong xây dựng con người mới và xã hội CNXH
          </motion.p>
        </motion.div>
      </header>
      
      {/* Key Principles Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: FaScaleBalanced, title: "Vật chất – Ý thức", desc: "Kết hợp điều kiện vật chất và giá trị văn hoá – đạo đức", delay: 0.4, colors: "from-blue-500 to-indigo-600", border: "border-indigo-100" },
              { icon: FaHeart, title: "Bình đẳng – Hạnh phúc", desc: "Bảo đảm quyền con người và bình đẳng giới trong gia đình", delay: 0.5, colors: "from-purple-500 to-pink-600", border: "border-purple-100" },
              { icon: FaHandshake, title: "Phối hợp – Liên kết", desc: "Gia đình – Xã hội – Nhà nước cùng trách nhiệm", delay: 0.6, colors: "from-pink-500 to-rose-600", border: "border-pink-100" },
            ].map(card => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: card.delay }}
                className={`bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl ${card.border} hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.colors} flex items-center justify-center mb-4 shadow-lg`}>
                  <card.icon className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="relative max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8 md:p-10 text-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <FaQuoteLeft className="text-5xl mb-4 opacity-50" />
            <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-6">
              "Gia đình là tế bào của xã hội. Đó là môi trường đầu tiên hình thành phẩm chất, 
              đạo đức và năng lực công dân, là cầu nối giữa điều kiện vật chất và ý thức – văn hoá."
            </p>
            <p className="text-indigo-100 italic">
              — Quan điểm Mác – Lênin về vai trò gia đình
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-12 space-y-8">
        <Collapsible
          idAnchor="coso"
          title="Cơ sở lý luận triết học"
          subtitle="Các nguyên lý nền tảng theo quan điểm Mác – Lênin"
          icon={<FaScaleBalanced />}
          defaultOpen
        >
            <div className="space-y-6">
              {[
                { title: "Quan hệ vật chất – ý thức", items: ["<b>Nền tảng vật chất</b> (điều kiện lao động, thu nhập,...) quy định khả năng khách quan.", "<b>Ý thức xã hội</b> (giá trị, chuẩn mực,...) định hướng hành vi, tạo đồng thuận.", "<b>Tính thống nhất biện chứng:</b> vật chất là điều kiện cần; ý thức – đạo đức là điều kiện đủ."], color: "indigo" },
                { title: "Con người – xã hội: môi trường xã hội hóa", items: ["<b>Chức năng gia đình:</b> tái sản xuất, giáo dục, kinh tế, văn hoá, chăm sóc.", "<b>Con người</b> là chủ thể, mục tiêu & động lực; gia đình nuôi dưỡng năng lực chủ thể."], color: "purple" },
                { title: "Sự phát triển biện chứng của gia đình", items: ["Cấu trúc & vai trò gia đình biến đổi theo trình độ lực lượng sản xuất.", "Gia đình Việt Nam tiếp thu giá trị hiện đại đồng thời kế thừa bản sắc dân tộc."], color: "pink" },
              ].map((section, index) =>(
                <div key={section.title} className={`bg-gradient-to-r from-${section.color}-50 to-gray-50 rounded-2xl p-6 border-l-4 border-${section.color}-600`}>
                  <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                    <span className={`w-8 h-8 rounded-lg bg-${section.color}-600 text-white flex items-center justify-center text-sm font-bold`}>{index + 1}</span>
                    {section.title}
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    {section.items.map(item => (
                       <li key={item} className="flex gap-3">
                         <span className={`text-${section.color}-600 mt-1`}>•</span>
                         <span dangerouslySetInnerHTML={{ __html: item }} />
                       </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </Collapsible>

        <Collapsible
          idAnchor="thuctien"
          title="Thực tiễn Việt Nam hiện nay"
          subtitle="Những vấn đề nổi bật và thách thức đương đại"
          icon={<FaChartLine />}
        >
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <p><b className="text-red-700">Ly hôn gia tăng ở nhóm trẻ đô thị:</b> Do xung đột vai trò (nghề nghiệp, thu nhập, chăm sóc con). 60% các vụ ly hôn ở thành thị liên quan đến mâu thuẫn này.</p>
            </div>
             <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <p><b className="text-orange-700">Bạo lực gia đình chuyển dạng:</b> Không chỉ thể chất mà còn là tinh thần, kiểm soát qua mạng xã hội, và "bạo lực kinh tế" (kiểm soát tài chính).</p>
            </div>
             <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p><b className="text-blue-700">Áp lực kinh tế:</b> Chi phí nhà ở, dịch vụ chăm sóc người cao tuổi (cao gấp 7-10 lần người trẻ) làm suy giảm chất lượng thời gian gia đình.</p>
            </div>
             <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <p><b className="text-purple-700">Ảnh hưởng mạng xã hội:</b> Lan truyền chuẩn mực tiêu dùng, tạo so sánh và khủng hoảng giá trị ở thanh thiếu niên.</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">⚠️</span>
                Vấn đề cụ thể: Kiểm soát qua công nghệ
              </h4>
              <p><b>Biểu hiện:</b> Yêu cầu mật khẩu, theo dõi vị trí, kiểm tra điện thoại. <b>Hệ quả:</b> Mất niềm tin, căng thẳng, nguy cơ bạo lực, ảnh hưởng sức khỏe tinh thần gia đình.</p>
            </div>
          </div>
        </Collapsible>

        <Collapsible
          idAnchor="giaiphap"
          title="Giải pháp triết học"
          subtitle="Định hướng chính sách và hành vi từ tư duy biện chứng"
          icon={<FaLightbulb />}
        >
          <div className="space-y-6">
             <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-600">
               <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                 <FaGraduationCap className="text-green-600 text-xl" />
                 Tư duy biện chứng & giải pháp tổng hợp
               </h4>
               <p>Kết hợp <b>vật chất</b> (an sinh, dịch vụ, nhà ở) với <b>tinh thần</b> (giá trị, pháp luật, văn hoá) để giải quyết gốc rễ mâu thuẫn giữa kỳ vọng vai trò và điều kiện thực tế.</p>
             </div>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-600">
               <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                 <FaHeart className="text-pink-600 text-xl" />
                 Bình đẳng giới & Hạnh phúc
               </h4>
               <p>Tái phân công lao động công bằng, ghi nhận giá trị việc chăm sóc. Giáo dục kỹ năng giao tiếp bất bạo lực, quản trị cảm xúc và tài chính minh bạch.</p>
             </div>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-600">
               <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-3">
                 <FaHandshake className="text-indigo-600 text-xl" />
                 Cơ chế phối hợp: Gia đình – Xã hội – Nhà nước
               </h4>
               <ul className="list-disc list-inside space-y-2 mt-2">
                 <li><b>Nhà nước:</b> Hoàn thiện pháp luật, chính sách thai sản, dịch vụ tư vấn.</li>
                 <li><b>Xã hội:</b> Trường học, đoàn thể, truyền thông kiến tạo môi trường văn hóa số lành mạnh.</li>
                 <li><b>Gia đình:</b> Xây dựng quy ước "5 tôn trọng" (pháp luật, riêng tư, thời gian chung, ngôn từ, tài chính) và "3 không" (không bạo lực, không định kiến, không im lặng).</li>
               </ul>
             </div>
          </div>
        </Collapsible>
        
        {/* Articles Library */}
        <section id="articles" className="bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur p-6 md:p-8">
           <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl shadow-lg">
                <FaNewspaper />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Thư viện bài báo & Nguồn tham khảo
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">
                  Nhấn vào từng bài để xem tóm tắt và truy cập nguồn gốc
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.map(article => (
                <motion.button
                  key={article.id}
                  onClick={() => setArticleModal(article)}
                  className="text-left bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={article.cover} alt={article.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 leading-tight mb-2">{article.title}</h4>
                    <p className="text-xs text-indigo-600 font-semibold">{article.sourceName}</p>
                  </div>
                </motion.button>
              ))}
            </div>
        </section>
        
        {/* Conclusion */}
        <section id="ketluan" className="relative text-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
           <div className="relative">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Kết luận</h2>
             <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-indigo-100">
              Để xây dựng gia đình Việt Nam trong thời kỳ quá độ, cần kết hợp đồng bộ <b>điều kiện vật chất</b> với xây dựng <b>ý thức–đạo đức</b>, bảo đảm <b>bình đẳng giới</b>, và thiết kế cơ chế phối hợp <b>gia đình–xã hội–Nhà nước</b>. Vận dụng vào các vấn đề thực tiễn như kiểm soát công nghệ, bộ giải pháp “pháp luật–giáo dục–văn hóa số” giúp chuyển hóa lý luận thành thay đổi hành vi cụ thể.
             </p>
           </div>
        </section>

      </main>

      <AnimatePresence>
        {articleModal && (
          <ArticleModal article={articleModal} onClose={() => setArticleModal(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroPage;