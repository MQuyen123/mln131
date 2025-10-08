import React from "react";

import {
  FaRobot,
  FaUsers,
  FaTriangleExclamation,
  FaBookOpen,
} from "react-icons/fa6";

// Import AI images (assume these are in assets folder)
import grokImage from "../assets/musicheroai.png";
import chatgptImage from "../assets/chatgptImage.webp";


const CaseStudyPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="w-full max-w-3xl bg-white/95 rounded-3xl shadow-2xl border border-indigo-100 backdrop-blur-md overflow-hidden">
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-indigo-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl shadow-lg mb-4">
              <FaRobot />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI Usage Report
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              (Minh bạch – Trách nhiệm)
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 space-y-8">
          {/* Section 1: Mục đích */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-3">
              <FaBookOpen className="text-indigo-600" />
              Mục đích sử dụng AI
            </h2>
            <p className="text-gray-700 leading-relaxed pl-8">
              Hỗ trợ cấu trúc nội dung theo Chương 7, chuẩn hóa thuật ngữ, gợi ý
              câu hỏi tương tác và bộ chỉ số đánh giá.
            </p>
          </div>

          {/* Section 2: Quy trình */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
              <FaUsers className="text-indigo-600" />
              Quy trình biên tập
            </h2>
            <ul className="space-y-4 pl-8">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">Xác định khung sườn</h3>
                  <p className="text-gray-700">
                    Nhóm xác định dàn ý và lựa chọn vấn đề thực tiễn (kiểm soát
                    công nghệ, quyền riêng tư).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">AI tạo bản thảo</h3>
                  <p className="text-gray-700">
                    AI tạo bản thảo học thuật theo tinh thần Mác – Lênin – Hồ
                    Chí Minh, gắn với khung “gia đình – xã hội – Nhà nước”.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* New Section: AI Tools Used */}
          <div>
  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
    <FaRobot className="text-indigo-600" />
    Các AI đã sử dụng
  </h2>

  {/* thêm items-stretch; nếu chỉ có 2 thẻ thì nên để lg:grid-cols-2 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
    <div className="h-full text-center p-6 rounded-xl bg-indigo-50 border border-indigo-200 hover:shadow-md transition-all flex flex-col">
      <img
        src={grokImage}
        alt="MUSICHERO AI"
        className="w-16 h-16 mx-auto mb-3 rounded-lg shadow-lg"
        loading="lazy"
      />
      <h3 className="font-semibold text-gray-800 mb-1">MUSICHERO AI</h3>
      <p className="text-sm text-gray-600 mt-auto">Hỗ trợ trình tạo nhạc bằng AI.</p>
    </div>

    <div className="h-full text-center p-6 rounded-xl bg-green-50 border border-green-200 hover:shadow-md transition-all flex flex-col">
      <img
        src={chatgptImage}
        alt="ChatGPT"
        className="w-16 h-16 mx-auto mb-3 rounded-lg shadow-lg"
        loading="lazy"
      />
      <h3 className="font-semibold text-gray-800 mb-1">ChatGPT</h3>
      <p className="text-sm text-gray-600 mt-auto">Tạo dàn ý nội dung và chuẩn hóa thuật ngữ học thuật.</p>
    </div>
  </div>
</div>


          {/* Section 3: Giới hạn */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-3">
              <FaTriangleExclamation className="text-amber-500" />
              Giới hạn
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-800 p-4 rounded-r-lg">
              <p className="leading-relaxed">
                AI không thay thế khảo sát thực địa; số liệu cụ thể cần được
                nhóm cập nhật từ nguồn chính thống.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
