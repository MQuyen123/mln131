import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";



// Giữ lại import co_dang từ bối cảnh người dùng cung cấp
import co_dang from "../assets/ava-co.gif"; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(false);
  const [step, setStep] = useState(0);

  const handleStart = () => {
    setShowIntro(true);
  };

  const handleNextStep = () => {
    if (step < introSteps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/intro"); // Navigate to intro page after the last step
    }
  };

  const introSteps = [
    {
      title: "Bản Chất Cuộc Kháng Chiến Chống Mỹ Cứu Nước (1965 – 1975)",
      subtitle: "Phân tích sự thống nhất giữa Ý chí Dân tộc và Tầm vóc Quốc tế",
      actionText: "Tiếp tục",
    },
    {
      title: "Nội dung chính của bài phân tích:",
      listItems: [
        "Đường lối lãnh đạo qua 3 giai đoạn chiến lược (1965-1975).",
        "Luận giải tính chất: Kháng chiến giải phóng dân tộc tối cao.",
        "Phân tích tầm vóc: Trận tuyến của Chủ nghĩa Quốc tế và phong trào tiến bộ.",
        "Dẫn chứng: Sử dụng nguồn học thuật và dữ kiện lịch sử (viện trợ, phản chiến).",
      ],
      actionText: "Bắt đầu bài phân tích",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hình ảnh GIF nền */}
      <img
        src={co_dang} 
        alt="Cờ Đảng và Dân tộc"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'grayscale(50%) brightness(50%)' }} // Làm mờ để chữ nổi bật
      />

      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Nội dung Landing Page & Intro */}
      <AnimatePresence mode="wait">
        {!showIntro ? (
          <motion.div
            key="landing"
            className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lịch Sử Đảng Cộng Sản Việt Nam
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-white/90 mb-8 font-medium drop-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Nghiên cứu đường lối lãnh đạo cách mạng cả nước (1965 – 1975)
            </motion.p>
            <motion.button
              onClick={handleStart}
              className="bg-[#6e7fdc] hover:bg-[#2a2e6e] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bắt đầu
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="intro"
            className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
              variants={itemVariants}
            >
              {introSteps[step].title}
            </motion.h1>

            {introSteps[step].subtitle && (
              <motion.p
                className="text-lg md:text-2xl text-white/90 mb-8 font-medium drop-shadow"
                variants={itemVariants}
              >
                {introSteps[step].subtitle}
              </motion.p>
            )}

            {introSteps[step].listItems && (
              <motion.ul
                className="text-left text-lg md:text-xl text-white/90 mb-8 font-medium space-y-2 max-w-xl mx-auto"
                variants={containerVariants}
              >
                {introSteps[step].listItems?.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="mr-2 text-green-400">✓</span> {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.button
              onClick={handleNextStep}
              className="bg-[#6e7fdc] hover:bg-[#2a2e6e] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow transition mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {introSteps[step].actionText}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
