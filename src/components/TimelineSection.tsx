import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFlag, FaMicrophone, FaStar, FaChevronDown } from "react-icons/fa6";
import binh_linh_my from "../assets/binh-linh-mi.png"; // Hình ảnh minh họa giai đoạn 1
import vua_danh_vua_dam from "../assets/vua-danh-vua-dam.jpg"; // Hình ảnh minh họa giai đoạn 2
import hoi_nghi_paris from "../assets/hoi-nghi-paris.jpg"; // Hình ảnh minh họa giai đoạn 3

// Định nghĩa màu sắc cho giao diện xịn hơn (Premium Look)
const COLOR_ACCENTS = [
  { text: "text-red-500", bg: "bg-red-500", lightBg: "bg-red-50", shadow: "shadow-red-600/30", line: "bg-red-500", gradient: "from-red-500 to-red-400" },
  { text: "text-blue-500", bg: "bg-blue-500", lightBg: "bg-blue-50", shadow: "shadow-blue-600/30", line: "bg-blue-500", gradient: "from-blue-500 to-cyan-400" },
  { text: "text-green-500", bg: "bg-green-500", lightBg: "bg-green-50", shadow: "shadow-green-600/30", line: "bg-green-500", gradient: "from-green-500 to-emerald-400" },
];

const phases = [
  {
    year: "1965 – 1968",
    title: "Xác Lập Quyết Tâm Chiến Lược (Chiến tranh cục bộ)",
    icon: <FaFlag />,
    colorIndex: 0, // Red
    summary:
      "Mỹ triển khai 'Chiến tranh cục bộ'. Đường lối (Hội nghị TW 11 & 12) giương cao hai ngọn cờ Độc lập dân tộc và Chủ nghĩa xã hội. Tiến hành Chiến tranh Nhân dân, toàn dân, toàn diện, lâu dài.",
    details: [
      { key: "Mục tiêu", value: "Thực hiện 'Đánh cho Mỹ cút' là trọng tâm, miền Bắc là hậu phương lớn chi viện." },
      { key: "Khẩu hiệu", value: "“Tất cả để đánh thắng giặc Mỹ xâm lược” (Trích Nghị quyết Hội nghị Trung ương 11, 12)." },
      { key: "Phân tích", value: "Xác định rõ mục tiêu chiến lược và phương pháp đối phó hiệu quả với chiến lược mới của Mỹ." },
    ],
    image: binh_linh_my, 
  },
  {
    year: "1968 – 1972",
    title: "Vừa Đánh Vừa Đàm và Mở Rộng Chiến Trường",
    icon: <FaMicrophone />,
    colorIndex: 1, // Blue
    summary:
      "Sau thất bại Mậu Thân, Mỹ chuyển sang 'Việt Nam hóa chiến tranh'. Đảng chuyển sang cục diện 'Vừa đánh vừa đàm' và củng cố khối Đoàn kết chiến đấu ba nước Đông Dương.",
    details: [
      { key: "Chuyển hướng", value: "Sử dụng ngoại giao (Hội nghị Paris) song song với quân sự." },
      { key: "Tư tưởng", value: "Tập trung 'Đánh cho Mỹ cút, đánh cho Ngụy nhào', giữ vững nguyên tắc Độc lập, Tự do, Thống nhất." },
      { key: "Phân tích", value: "Phá vỡ âm mưu chia rẽ và chiến lược 'dùng người Đông Dương đánh người Đông Dương' của Mỹ." },
    ],
    image: vua_danh_vua_dam, 
  },
  {
    year: "1973 – 1975",
    title: "Chủ Động Tiến Công và Kết Thúc Chiến Tranh",
    icon: <FaStar />,
    colorIndex: 2, // Green
    summary:
      "Mỹ rút quân nhưng chính quyền Sài Gòn phá hoại Hiệp định Paris. Hội nghị TW 21 (7/1973) khẳng định con đường bạo lực cách mạng và đặt tư tưởng 'Nắm vững thời cơ' lên hàng đầu.",
    details: [
      { key: "Quyết định chiến lược", value: "Phải tiến công giành thắng lợi hoàn toàn, chuyển sang thế chủ động tiến công toàn diện." },
      { key: "Thời cơ", value: "Tư tưởng 'Nắm vững thời cơ' tạo tiền đề cho Chiến dịch Hồ Chí Minh lịch sử." },
      { key: "Kết quả", value: "Giải phóng hoàn toàn miền Nam, thống nhất đất nước." },
    ],
    image: hoi_nghi_paris, 
  },
];

const TimelineItem: React.FC<{ phase: typeof phases[0], index: number, onToggle: (index: number) => void, isSelected: boolean }> = ({ phase, index, onToggle, isSelected }) => {
    const accent = COLOR_ACCENTS[phase.colorIndex];

    return (
        <div className="flex w-full">
            {/* Cột Dọc - Đường Line */}
            <div className="flex flex-col items-center mr-6">
                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center ${accent.text} text-lg shadow-xl ${accent.shadow} z-10 transition-transform duration-300 ${isSelected ? 'scale-125 ring-4 ring-white' : ''}`}>
                    {phase.icon}
                </div>
                <div className={`flex-1 w-0.5 ${index < phases.length - 1 ? 'bg-gray-300' : 'hidden'} my-1`}></div>
            </div>

            {/* Cột Nội Dung */}
            <div className="flex-1 pb-10">
                <motion.div
                    className={`bg-white/95 border border-gray-200 rounded-xl shadow-lg p-5 cursor-pointer transition-all duration-300 relative ${isSelected ? `shadow-2xl shadow-indigo-300/50 border-2 border-indigo-500` : 'hover:shadow-xl hover:border-indigo-200'}`}
                    onClick={() => onToggle(index)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="flex justify-between items-center">
                        <div className="text-left">
                            {/* Tiêu đề chính */}
                            <span className={`text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${accent.gradient}`}>{phase.year}</span>
                            <h4 className="text-lg font-extrabold text-gray-900 leading-tight mt-1">{phase.title}</h4>
                        </div>
                        <FaChevronDown className={`text-gray-500 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Nội dung chi tiết - Hiển thị khi được chọn */}
                    <AnimatePresence>
                        {isSelected && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-gray-100"
                            >
                                <motion.img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full aspect-video object-cover rounded-lg mb-4 shadow-md"
                                />
                                <p className="text-base italic text-gray-700 mb-4 border-l-4 border-indigo-500 pl-3">{phase.summary}</p>
                                <ul className="space-y-2 text-sm">
                                    {phase.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start text-gray-800">
                                            <span className="font-semibold mr-2 flex-shrink-0">{detail.key}:</span> <span className="flex-grow">{detail.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

const TimelineSection: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setCurrentPhase(currentPhase === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 mb-10 text-center drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        I. Đường Lối Lãnh Đạo Chiến Lược của Đảng (1965 – 1975)
      </motion.h2>

      <div className="flex flex-col items-start w-full">
        {phases.map((phase, index) => (
          <TimelineItem
            key={index}
            phase={phase}
            index={index}
            onToggle={handleToggle}
            isSelected={currentPhase === index}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
