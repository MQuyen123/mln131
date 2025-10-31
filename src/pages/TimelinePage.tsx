"use client"

import type React from "react"
import { useState } from "react"
import { ScrollReveal } from "../components/scroll-reveal"

interface Section {
  id: string
  title: string
  image: string
  accentColor: string
  content: React.ReactNode
}

const SECTIONS: Section[] = [
  {
    id: "domestic",
    title: "Bối Cảnh\nĐất Nước",
    accentColor: "from-cyan-400 to-cyan-300",
    image: "public/ban-do-viet-nam.jpg",
    content: (
      <div className="space-y-6">
        <ScrollReveal direction="up" delay={0}>
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Sự Tiếp Tục Cuộc Cách Mạng Dân Tộc Dân Chủ Nhân Dân
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Cuộc kháng chiến chống Mỹ, cứu nước của nhân dân ở miền Nam (1954-1975) là sự tiếp tục cuộc cách mang dân
              tộc dân chủ nhân dân dưới sự lãnh đạo của Đảng. Từ khi Đảng ra đời (3-2-1930), chúng ta đã chỉ rõ: đất
              nước ta vốn là một Tổ quốc thống nhất với truyền thống đoàn kết chống ngoại xâm bảo vệ bờ cõi.
            </p>
            <p className="leading-relaxed text-gray-300 mb-4">
              Nhưng từ khi thực dân Pháp xâm lược, chúng đã cùng bọn vua quan phong kiến thống trị nhân dân ta, tạo
              thành xã hội thuộc địa nửa phong kiến. Đảng ta gánh vác sứ mệnh giải quyết hai mâu thuẫn cơ bản:
            </p>
            <div className="bg-gradient-to-r from-cyan-950 to-cyan-900 p-5 rounded-xl border border-cyan-700 mb-4">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold text-lg">①</span>
                  <span className="text-gray-200">
                    <strong className="text-cyan-300">Mâu thuẫn dân tộc:</strong> Toàn thể dân tộc ta với đế quốc xâm
                    lược
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold text-lg">②</span>
                  <span className="text-gray-200">
                    <strong className="text-cyan-300">Mâu thuẫn xã hội:</strong> Nhân dân (chủ yếu nông dân) với giai
                    cấp địa chủ phong kiến
                  </span>
                </li>
              </ul>
            </div>
            <p className="leading-relaxed text-gray-300">
              Tháng 7-1954, miền Bắc được giải phóng, nhưng miền Nam còn dưới ách thống trị của đế quốc Mỹ và bọn tay
              sai Ngô Đình Diệm. Hai mâu thuẫn cơ bản trên vẫn tồn tại. Nhân dân ta tiến hành kháng chiến chống đế quốc
              Mỹ là tiếp tục cuộc cách mạng từ 1930, nhằm hoàn thành sự nghiệp giành độc lập dân tộc và thống nhất Tổ
              quốc.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="border-l-4 border-cyan-400 pl-6 py-4 my-6 bg-cyan-950/30 rounded-r-lg">
            <p className="italic text-gray-200 text-lg font-light">
              "Chúng ta thắng Mỹ là nhờ có những kinh nghiệm quý báu của Cách mạng tháng Tám và 9 năm kháng chiến chống
              Pháp. Không có Cách mạng tháng Tám, không có 9 năm kháng chiến chống Pháp thì không thể có thắng lợi của
              kháng chiến chống Mỹ."
            </p>
            <p className="text-cyan-400 text-sm mt-3 font-semibold">— Đồng chí Lê Duẩn</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Hai Miền Chia Cắt, Hai Chiến Lược Cách Mạng
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Cuộc kháng chiến diễn ra trong điều kiện đất nước bị chia làm hai miền, phải tiến hành đồng thời hai chiến
              lược cách mạng khác nhau dưới sự lãnh đạo thống nhất của Đảng. Đây là đặc điểm lớn nhất và cũng là nét độc
              đáo của cách mạng nước ta từ tháng 7 năm 1954 đến tháng 5 năm 1975.
            </p>
            <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 mb-4">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400"></span>
                Hai Nhiệm Vụ Chiến Lược (Đại hội III - 9/1960)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-950/40 p-4 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-cyan-300 font-bold mb-2">🔵 Miền Bắc:</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tiến hành cách mạng xã hội chủ nghĩa, trở thành căn cứ địa chung của cách mạng cả nước với vai trò
                    quyết định nhất.
                  </p>
                </div>
                <div className="bg-red-950/40 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-300 font-bold mb-2">🔴 Miền Nam:</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Giải phóng khỏi ách thống trị của đế quốc Mỹ và tay sai, có vai trò quyết định trực tiếp cho sự
                    nghiệp giải phóng.
                  </p>
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-gray-300">
              Việc tiến hành đồng thời hai chiến lược cách mạng khác nhau không mâu thuẫn, mà từng bước đưa cách mạng
              hai miền cùng phát triển, tạo ra sức mạnh tổng hợp đánh thắng hoàn toàn đế quốc Mỹ xâm lược.
            </p>
          </div>
        </ScrollReveal>
      </div>
    ),
  },
  {
    id: "international",
    title: "Bối Cảnh\nQuốc Tế",
    accentColor: "from-purple-400 to-pink-400",
    image: "public/cold-war-thumbnail.png.webp",
    content: (
      <div className="space-y-6">
        <ScrollReveal direction="up" delay={0}>
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Hệ Thống Xã Hội Chủ Nghĩa Thế Giới Đang Phát Triển
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Hệ thống xã hội chủ nghĩa thế giới lúc này đang ở thời kỳ phát triển mạnh mẽ, có tác động to lớn tới quá
              trình phát triển của thế giới. Hệ thống này nối liền từ châu Á sang châu Âu, không ngừng phát triển và
              củng cố về mọi mặt.
            </p>
            <p className="leading-relaxed text-gray-300 mb-4">
              Nếu miền Bắc là hậu phương trực tiếp cho cách mạng miền Nam, thì{" "}
              <strong className="text-purple-300">hệ thống xã hội chủ nghĩa thế giới</strong> lúc này lại nối liền với
              miền Bắc xã hội chủ nghĩa của Việt Nam, trở thành{" "}
              <strong className="text-purple-300">hậu phương rộng lớn đáng tin cậy</strong> - một thuận lợi chưa bao giờ
              có đối với cách mạng nước ta.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-gradient-to-r from-purple-950 to-pink-950 p-6 rounded-xl border border-purple-700 mb-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-400"></span>
              Phong Trào Giải Phóng Dân Tộc Cuồn Cuộn Dâng Cao
            </h4>
            <div className="space-y-3 text-gray-200">
              <p className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">→</span>
                <span>Phong trào giải phóng dân tộc cuồn cuộn dâng cao ở châu Á, châu Phi và Mỹ Latinh</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">→</span>
                <span>Hệ thống thuộc địa của chủ nghĩa đế quốc bị thu hẹp và đi vào quá trình tan rã</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">→</span>
                <span>
                  Cuộc đấu tranh cho dân sinh, dân chủ và hoà bình ở các nước tư bản chủ nghĩa phát triển rộng khắp
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Bốn Mâu Thuẫn Chủ Yếu Của Thời Đại
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-purple-950/40 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="font-bold text-purple-300 mb-1">① Mâu thuẫn hệ tư tưởng</p>
                <p className="text-gray-300 text-sm">
                  Giữa hệ thống xã hội chủ nghĩa và lực lượng tư bản chủ nghĩa thế giới
                </p>
              </div>
              <div className="bg-purple-950/40 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="font-bold text-purple-300 mb-1">② Mâu thuẫn chiến lược</p>
                <p className="text-gray-300 text-sm">Giữa các nước đế quốc với nhau trong cuộc chạy đua vũ trang</p>
              </div>
              <div className="bg-purple-950/40 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="font-bold text-purple-300 mb-1">③ Mâu thuẫn dân tộc</p>
                <p className="text-gray-300 text-sm">Giữa các dân tộc đòi độc lập với các lực lượng đế quốc thực dân</p>
              </div>
              <div className="bg-purple-950/40 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="font-bold text-purple-300 mb-1">④ Mâu thuẫn giai cấp</p>
                <p className="text-gray-300 text-sm">Giữa giai cấp vô sản với giai cấp tư sản trong các nước tư bản</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div>
            <h3 className="text-2xl font-bold text-pink-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              Mỹ - Lực Lượng Xâm Lược Chủ Yếu
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              So sánh lực lượng trên thế giới lúc đó ngày càng thay đổi có lợi cho chủ nghĩa xã hội và lực lượng cách
              mạng. Tuy chủ nghĩa đế quốc suy yếu, nhưng lực lượng xâm lược gây chiến chủ yếu trên thế giới là{" "}
              <strong className="text-pink-300">đế quốc Mỹ</strong>, đang dẫn đầu các thế lực đế quốc hiếu chiến.
            </p>
            <div className="bg-pink-950/30 p-5 rounded-xl border border-pink-700 mb-4">
              <p className="text-gray-300 leading-relaxed">
                Mỹ đang chạy đua vũ trang, củng cố các khối liên minh quân sự xâm lược, xây dựng các căn cứ quân sự,
                phục hồi chủ nghĩa phát xít ở Tây Đức và quân phiệt ở Nhật Bản. Nguy cơ chiến tranh thế giới vẫn tồn
                tại, nhân dân các nước đang đứng trước sự đe doạ hết sức nghiêm trọng của một cuộc chiến tranh hạt nhân.
              </p>
            </div>
            <p className="leading-relaxed text-gray-300">
              Trong bối cảnh này, đế quốc Mỹ thực hiện âm mưu xâm chiếm miền Nam Việt Nam, biến nơi đây thành căn cứ
              quân sự của chúng nhằm ngăn chặn "làn sóng" cộng sản và chuẩn bị tiến công các nước xã hội chủ nghĩa.
            </p>
          </div>
        </ScrollReveal>
      </div>
    ),
  },
  {
    id: "enemy",
    title: "Kẻ Thù\nChính",
    accentColor: "from-yellow-400 to-yellow-300",
    image: "public/images.jfif",
    content: (
      <div className="space-y-6">
        <ScrollReveal direction="up" delay={0}>
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Đế Quốc Mỹ - Thủ Đoạn Thực Dân Mới
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Kẻ thù chính, trực tiếp của cách mạng miền Nam là{" "}
              <strong className="text-yellow-300">đế quốc Mỹ với chính sách thực dân mới</strong>. Đây là điểm mới, mang
              tính đặc trưng của cách mạng miền Nam, khác các thời kỳ trước đây là chống chủ nghĩa thực dân cũ của đế
              quốc Pháp.
            </p>
            <p className="leading-relaxed text-gray-300 mb-4">
              Đế quốc Mỹ đã phá hoại Hiệp định Giơ-ne-vơ, hất cẳng thực dân Pháp, độc chiếm miền Nam nước ta, biến nơi
              đây thành thuộc địa kiểu mới và căn cứ quân sự. Từ đây, đế quốc Mỹ đã thành kẻ thù chủ yếu và nguy hiểm
              nhất của nhân dân ta.
            </p>
            <div className="border-l-4 border-yellow-400 pl-5 py-3 bg-yellow-950/30 rounded-r-lg">
              <p className="text-gray-200">
                <strong className="text-yellow-300">Từ tháng 7 năm 1954:</strong> Nghị quyết Ban chấp hành Trung ương
                Đảng xác định: "Đế quốc Mỹ là kẻ thù chính của nhân dân yêu chuộng hoà bình thế giới và hiện đang trở
                thành kẻ thù chính, trực tiếp của nhân dân Đông Dương".
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Chính Sách Thực Dân Mới: Bốn Mặt Chiến Lược
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Chính sách thực dân mới của Mỹ là con đẻ của chủ nghĩa tư bản lũng đoạn, ra đời trong cơn tổng khủng hoảng
              sau Chiến tranh thế giới thứ hai. Đặc điểm chính là Mỹ không trực tiếp cai trị mà thông qua chính quyền
              tay sai.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-yellow-950/40 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-bold text-yellow-300 mb-2">🏛️ MẶT CHÍNH TRỊ</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Lập chính quyền tay sai với chiêu bài "quốc gia độc lập, dân chủ giả hiệu" nhằm che đậy bản chất thực
                  dân xâm lược và khơi sâu tính chất nội chiến.
                </p>
              </div>
              <div className="bg-yellow-950/40 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-bold text-yellow-300 mb-2">⚔️ MẶT QUÂN SỰ</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Xây dựng đội quân ngụy đủ mạnh làm lực lượng chiến đấu chiến lược. Cột chế độ tay sai, áp bức nhân dân
                  lao động để bóc lột cho Mỹ.
                </p>
              </div>
              <div className="bg-yellow-950/40 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-bold text-yellow-300 mb-2">💰 MẶT KINH TẾ</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dùng viện trợ làm công cụ chủ yếu để cột giữ chế độ tay sai, đối lập miền Nam với miền Bắc, chia cắt
                  lâu dài nước ta trên con đường phát triển tư bản chủ nghĩa.
                </p>
              </div>
              <div className="bg-yellow-950/40 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-bold text-yellow-300 mb-2">🎭 MẶT VĂN HÓA - XÃ HỘI</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ra sức du nhập lối sống Mỹ, văn hóa Mỹ, hòng làm mất đi tất cả những gì là tinh hoa, truyền thống dân
                  tộc ta.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Quá Trình Mỹ Áp Đặt Thực Dân Mới
            </h3>
            <div className="space-y-2 bg-gray-800/40 p-5 rounded-xl">
              <div className="flex gap-4 items-start">
                <span className="bg-yellow-400 text-yellow-950 font-bold px-3 py-1 rounded-full text-sm min-w-fit">
                  7/7/1954
                </span>
                <p className="text-gray-300 pt-1">
                  Mỹ ép Pháp đưa Ngô Đình Diệm về giành ghế thủ tướng của Bửu Lộc - mở đầu quá trình Mỹ hất cẳng Pháp
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-yellow-400 text-yellow-950 font-bold px-3 py-1 rounded-full text-sm min-w-fit">
                  8/9/1954
                </span>
                <p className="text-gray-300 pt-1">
                  Mỹ lôi kéo các nước đế quốc lập ra khối SEATO, đặt miền Nam Việt Nam, Lào, Campuchia vào khu vực bảo
                  hộ
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-yellow-400 text-yellow-950 font-bold px-3 py-1 rounded-full text-sm min-w-fit">
                  2/12/1954
                </span>
                <p className="text-gray-300 pt-1">
                  Mỹ ép Pháp ký kết việc rút quân Pháp khỏi miền Nam, thiết lập quyền kiểm soát toàn toàn
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-yellow-400 text-yellow-950 font-bold px-3 py-1 rounded-full text-sm min-w-fit">
                  23/10/1955
                </span>
                <p className="text-gray-300 pt-1">Ngô Đình Diệm tổ chức "trưng cầu dân ý" phế truất Bảo Đại</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-yellow-400 text-yellow-950 font-bold px-3 py-1 rounded-full text-sm min-w-fit">
                  26/10/1955
                </span>
                <p className="text-gray-300 pt-1">
                  Diệm lên làm tổng thống, tuyên bố thành lập nhà nước "Việt Nam cộng hoà" - hoàn tất việc độc chiếm
                  miền Nam
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="bg-gradient-to-r from-yellow-950 to-yellow-900 p-6 rounded-xl border border-yellow-700">
            <p className="text-gray-200 leading-relaxed">
              Bằng tất cả các thủ đoạn ngoại giao, quân sự, chính trị, kinh tế, đế quốc Mỹ đã thực hiện được âm mưu hất
              cẳng thực dân Pháp, độc chiếm miền Nam, triển khai chính sách thực dân mới của chúng ở miền Nam nước ta
              trên các mặt. Từ đây, dân tộc ta phải trực tiếp đương đầu với chủ nghĩa thực dân mới của đế quốc Mỹ xâm
              lược.
            </p>
          </div>
        </ScrollReveal>
      </div>
    ),
  },
  {
    id: "forces",
    title: "Lực Lượng\nCách Mạng",
    accentColor: "from-green-400 to-emerald-400",
    image: "public/chu-tich-nguyen-huu-tho.jpg",
    content: (
      <div className="space-y-6">
        <ScrollReveal direction="up" delay={0}>
          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Sức Mạnh Tổng Hợp Của Toàn Dân Tộc
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Lực lượng cách mạng trong cuộc kháng chiến chống Mỹ là sức mạnh tổng hợp của toàn dân tộc, hoạt động trên
              cả hai miền Nam - Bắc và kết hợp chặt chẽ giữa đấu tranh chính trị và đấu tranh vũ trang.
            </p>
            <p className="leading-relaxed text-gray-300">
              Cơ cấu lực lượng cách mạng được xây dựng dựa trên nền tảng của Đảng Cộng sản Việt Nam, với sự tham gia của
              rộng rãi nhân dân từ nông dân, công nhân, trí thức cho đến các tầng lớp xã hội khác.
            </p>
          </div>
        </ScrollReveal>

        {/* MIỀN NAM - TIỀN TUYẾN */}
        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Lực Lượng Ở Miền Nam (Tiền Tuyến)
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Đây là nơi trực tiếp chiến đấu, kết hợp giữa "Tiến công" (quân sự) và "Nổi dậy" (chính trị). Miền Nam là
              chiến trường chính, nơi diễn ra những cuộc đụng độ quyết liệt giữa lực lượng cách mạng và kẻ thù.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-gradient-to-r from-green-950 to-emerald-950 p-6 rounded-xl border border-green-700 mb-6">
            <h4 className="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-400"></span>
              Lực Lượng Chính Trị (Quần Chúng)
            </h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Bao gồm đông đảo nhân dân yêu nước (nông dân, công nhân, học sinh, trí thức...) được tập hợp trong{" "}
              <strong className="text-green-300">Mặt Trận Dân Tộc Giải Phóng Miền Nam Việt Nam.</strong>
            </p>
            <div className="space-y-3">
              <div className="bg-gray-900/60 p-4 rounded-lg border-l-4 border-green-400">
                <p className="font-bold text-green-300 mb-2">📢 Vai Trò Chính Trị</p>
                <p className="text-gray-300 text-sm">
                  Thực hiện đấu tranh chính trị (biểu tình, bãi công), thực hiện công tác binh vận và tham gia "Nổi dậy"
                  để giành quyền làm chủ. Dân chúng là nền tảng của toàn bộ phong trào kháng chiến.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="bg-gradient-to-r from-green-950/60 to-emerald-950/60 p-6 rounded-xl border border-green-700/60 mb-6">
            <h4 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-400"></span>
              Lực Lượng Vũ Trang (Quân Sự)
            </h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Là lực lượng nòng cốt để thực hiện "Tiến công", bao gồm{" "}
              <strong className="text-emerald-300">ba thứ quân:</strong>
            </p>
            <div className="space-y-3">
              <div className="bg-gray-900/40 p-4 rounded-lg border-l-4 border-emerald-400">
                <p className="font-bold text-emerald-300 mb-2">① Bộ Đội Chủ Lực</p>
                <p className="text-gray-300 text-sm">
                  Các đơn vị chính quy (Quân Giải Phóng Miền Nam và các đơn vị Quân Đội Nhân Dân Việt Nam từ miền Bắc
                  chi viện) tác chiến trên các chiến trường lớn. Họ là xương sống của cuộc kháng chiến.
                </p>
              </div>
              <div className="bg-gray-900/40 p-4 rounded-lg border-l-4 border-emerald-400">
                <p className="font-bold text-emerald-300 mb-2">② Bộ Đội Địa Phương</p>
                <p className="text-gray-300 text-sm">
                  Lực lượng vũ trang của tỉnh, huyện, hoạt động trong phạm vi địa phương. Họ liên kết với dân chúng, bảo
                  vệ các căn cứ cách mạng.
                </p>
              </div>
              <div className="bg-gray-900/40 p-4 rounded-lg border-l-4 border-emerald-400">
                <p className="font-bold text-emerald-300 mb-2">③ Dân Quân Du Kích</p>
                <p className="text-gray-300 text-sm">
                  Lực lượng ở xã, ấp, bám đất, bám dân, thực hiện chiến tranh du kích. Họ là cầu nối giữa quân đội chính
                  quy và nhân dân.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* MIỀN BẮC - HẬU PHƯƠNG */}
        <ScrollReveal direction="up" delay={0.5}>
          <div>
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Lực Lượng Ở Miền Bắc (Hậu Phương Lớn)
            </h3>
            <p className="leading-relaxed text-gray-300 mb-4">
              Miền Bắc là <strong className="text-emerald-300">"căn cứ địa chung của cách mạng cả nước"</strong>, vừa
              xây dựng vừa chi viện cho miền Nam, đồng thời phải trực tiếp chiến đấu chống chiến tranh phá hoại của Mỹ.
              Đây là yêu cầu đặc thù của cuộc kháng chiến.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-cyan-950 to-teal-950 p-6 rounded-xl border border-cyan-700">
              <h4 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400"></span>
                Lực Lượng Sản Xuất, Xây Dựng
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Toàn dân miền Bắc tham gia lao động sản xuất, thực hiện các kế hoạch kinh tế (như Kế hoạch 5 năm) để
                  xây dựng cơ sở vật chất của chủ nghĩa xã hội.
                </p>
                <div className="bg-gray-900/60 p-3 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-cyan-300 font-bold text-sm mb-1">🏭 Vai Trò</p>
                  <p className="text-gray-300 text-sm">
                    Tạo ra nền tảng kinh tế, vật chất, lương thực... để chi viện cho tiền tuyến miền Nam
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950 to-indigo-950 p-6 rounded-xl border border-blue-700">
              <h4 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-400"></span>
                Lực Lượng Quốc Phòng
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bao gồm Quân Đội Nhân Dân Việt Nam (đặc biệt là quân chủng Phòng Không - Không Quân) và lực lượng tự
                  vệ.
                </p>
                <div className="bg-gray-900/60 p-3 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-300 font-bold text-sm mb-1">⚔️ Vai Trò Quốc Phòng</p>
                  <p className="text-gray-300 text-sm">
                    Bảo vệ miền Bắc, trực tiếp chiến đấu chống chiến tranh phá hoại của Mỹ ("Điện Biên Phủ trên không"),
                    huấn luyện và cung cấp bộ đội cho tiền tuyến
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ĐẶC ĐIỂM VÀ THẮNG LỢI */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="bg-gradient-to-r from-green-950 to-emerald-950 p-6 rounded-xl border border-green-700 mt-8">
            <h4 className="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-400"></span>
              Sức Mạnh Từ Sự Thống Nhất
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sự kết hợp giữa hai hệ thống lực lượng - miền Bắc làm hậu phương, miền Nam là tiền tuyến - tạo nên một sức
              mạnh tổng hợp chưa bao giờ có. Các thắng lợi của kháng chiến chống Mỹ là kết quả của:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3 items-start">
                <span className="text-green-400 font-bold text-lg">✓</span>
                <span>Lãnh đạo thống nhất của Đảng Cộng sản Việt Nam</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-400 font-bold text-lg">✓</span>
                <span>Chi viện toàn diện từ miền Bắc cho miền Nam</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-400 font-bold text-lg">✓</span>
                <span>Sự hy sinh và đấu tranh kiên cường của nhân dân hai miền</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-green-400 font-bold text-lg">✓</span>
                <span>Hỗ trợ từ hệ thống xã hội chủ nghĩa thế giới</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    ),
  },
  {
    id: "timeline",
    title: "Dòng Thời\nGian Chính",
    accentColor: "from-orange-400 to-red-400",
    image: "public/489463943_1180009614135806_6831365441873026343_n.jpg",
    content: (
      <div className="space-y-8">
        {/* PHASE 1: Diễn Biến Ở Miền Bắc */}
        <ScrollReveal direction="up" delay={0}>
          <div>
            <h3 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
              Diễn Biến Ở Miền Bắc (Hậu Phương)
            </h3>
            <p className="leading-relaxed text-gray-300 mb-6">
              Miền Bắc có hai nhiệm vụ chính: xây dựng chủ nghĩa xã hội và chi viện cho miền Nam, đồng thời phải trực
              tiếp chiến đấu chống chiến tranh phá hoại của Mỹ.
            </p>

            <div className="space-y-4">
              <div className="bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-orange-400 text-orange-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1954
                  </span>
                  <div>
                    <p className="font-bold text-orange-300 mb-1">Miền Bắc Bước Vào Xây Dựng CNXH</p>
                    <p className="text-gray-300 text-sm">
                      Sau Hiệp định Giơnevơ, miền Bắc được hoàn toàn giải phóng. Miền Bắc trở thành "căn cứ địa chung
                      của cách mạng cả nước" và bắt đầu công cuộc cải cách ruộng đất, khôi phục kinh tế, và xây dựng cơ
                      sở vật chất cho chủ nghĩa xã hội.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-orange-400 text-orange-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1960
                  </span>
                  <div>
                    <p className="font-bold text-orange-300 mb-1">Đại Hội III 1960 - Sự Kiện Cốt Lõi</p>
                    <p className="text-gray-300 text-sm mb-2">
                      Đại hội này chính thức vạch ra đường lối "tiến hành đồng thời hai chiến lược cách mạng":
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4">
                      <li>
                        • <strong>Miền Bắc:</strong> Cách mạng XHCN (vai trò "quyết định nhất")
                      </li>
                      <li>
                        • <strong>Miền Nam:</strong> Cách mạng dân tộc dân chủ nhân dân (vai trò "quyết định trực tiếp")
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-orange-400 text-orange-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1961-1965
                  </span>
                  <div>
                    <p className="font-bold text-orange-300 mb-1">Kế Hoạch 5 Năm Lần Thứ Nhất</p>
                    <p className="text-gray-300 text-sm">
                      Thực hiện nghị quyết của Đại hội III, nhằm xây dựng bước đầu cơ sở vật chất-kỹ thuật của CNXH, làm
                      cho miền Bắc đủ sức làm hậu phương cho miền Nam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-orange-400 text-orange-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1965-1968
                  </span>
                  <div>
                    <p className="font-bold text-orange-300 mb-1">Chống Chiến Tranh Phá Hoại Lần I</p>
                    <p className="text-gray-300 text-sm">
                      Khi Mỹ bắt đầu đưa quân ồ ạt vào miền Nam, họ cũng dùng không quân (Chiến dịch Rolling Thunder)
                      đánh phá miền Bắc. Miền Bắc phải chuyển từ "xây dựng" sang "vừa sản xuất vừa chiến đấu".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-orange-400 text-orange-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1972 (I & II)
                  </span>
                  <div>
                    <p className="font-bold text-orange-300 mb-1">
                      Chống Chiến Tranh Phá Hoại Lần II & Điện Biên Phủ Trên Không
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      Để gây sức ép trên bàn đàm phán tại Paris, Tổng thống Mỹ Nixon ra lệnh ném bom miền Bắc trở lại
                      (Chiến dịch Linebacker I & II), với cường độ tàn khốc.
                    </p>
                    <p className="text-gray-300 text-sm">
                      Chiến thắng 12 ngày đêm cuối tháng 12 năm 1972: Quân dân miền Bắc đánh bại cuộc tập kích chiến
                      lược bằng máy bay B-52 của Mỹ vào Hà Nội và Hải Phòng. Chiến thắng này buộc Mỹ phải ký Hiệp định
                      Paris vào tháng 1/1973.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* PHASE 2: Diễn Biến Ở Miền Nam */}
        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <h3 className="text-3xl font-bold text-red-300 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              Diễn Biến Ở Miền Nam (Tiền Tuyến)
            </h3>
            <p className="leading-relaxed text-gray-300 mb-6">
              Miền Nam là nơi trực tiếp diễn ra cuộc đụng đầu lịch sử với Mỹ và chính quyền Sài Gòn, trải qua các chiến
              lược chiến tranh khác nhau của Mỹ.
            </p>

            <div className="space-y-4">
              <div className="bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-red-400 text-red-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1954-1960
                  </span>
                  <div>
                    <p className="font-bold text-red-300 mb-1">Chống CL "Chiến Tranh Đơn Phương"</p>
                    <p className="text-gray-300 text-sm">
                      Mỹ dựng lên chính quyền Ngô Đình Diệm. Chính quyền Diệm, với sự hỗ trợ của Mỹ, thi hành chính sách
                      "tố cộng, diệt cộng" để đàn áp, khủng bố những người kháng chiến cũ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-red-400 text-red-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1959-1960
                  </span>
                  <div>
                    <p className="font-bold text-red-300 mb-1">Đồng Khởi - Bước Chuyển Quan Trọng</p>
                    <p className="text-gray-300 text-sm">
                      Trước sự đàn áp tàn khốc (sau Nghị quyết 15 của Đảng), phong trào đấu tranh của nhân dân miền Nam
                      bùng nổ. "Đồng Khởi", tiêu biểu ở Bến Tre, đánh dấu bước chuyển từ đấu tranh chính trị sang kết
                      hợp đấu tranh chính trị với đấu tranh vũ trang.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-red-400 text-red-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1961-1965
                  </span>
                  <div>
                    <p className="font-bold text-red-300 mb-1">Chống CL "Chiến Tranh Đặc Biệt"</p>
                    <p className="text-gray-300 text-sm">
                      Sau thất bại của "Chiến tranh đơn phương", Mỹ (dưới thời Kennedy) chuyển sang "Chiến tranh đặc
                      biệt". Mỹ "không trực tiếp cai trị mà thông qua chính quyền tay sai, dùng viện trợ kinh tế và quân
                      sự". Quân đội Sài Gòn là lực lượng chiến đấu chính.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-red-400 text-red-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1965-1968
                  </span>
                  <div>
                    <p className="font-bold text-red-300 mb-1">Chống CL "Chiến Tranh Cục Bộ"</p>
                    <p className="text-gray-300 text-sm">
                      "Chiến tranh đặc biệt" thất bại, Mỹ (dưới thời Johnson) phải ồ ạt đưa quân chiến đấu của Mỹ và
                      đồng minh vào trực tiếp tham chiến tại miền Nam. Đây là giai đoạn chiến tranh leo thang cao nhất.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-red-400 text-red-950 font-bold px-3 py-1 rounded text-sm min-w-fit">1968</span>
                  <div>
                    <p className="font-bold text-red-300 mb-1">Tổng Tiến Công Và Nổi Dậy Xuân Mậu Thân</p>
                    <p className="text-gray-300 text-sm">
                      Một đòn tấn công bất ngờ và đồng loạt vào các đô thị lớn trên toàn miền Nam. Mặc dù có nhiều tổn
                      thất, sự kiện này đã làm sụp đổ ý chí xâm lược của Mỹ, buộc Mỹ phải "xuống thang" chiến tranh.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-red-400 text-red-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1969-1973
                  </span>
                  <div>
                    <p className="font-bold text-red-300 mb-1">Chống CL "Việt Nam Hóa Chiến Tranh"</p>
                    <p className="text-gray-300 text-sm mb-2">
                      Sau Mậu Thân, Mỹ (dưới thời Nixon) thực hiện chiến lược "Việt Nam hóa", tức là rút dần quân Mỹ về
                      nước, tăng cường xây dựng quân đội Sài Gòn để họ tự gánh vác chiến tranh.
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-red-300">"Đông Dương Hóa Chiến Tranh":</strong> Mỹ mở rộng chiến tranh
                      sang Campuchia và Lào nhằm cắt đứt đường mòn Hồ Chí Minh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* PHASE 3: Thống Nhất - Kết Quả */}
        <ScrollReveal direction="up" delay={0.4}>
          <div>
            <h3 className="text-3xl font-bold text-green-300 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Thống Nhất (Kết Quả Cuối Cùng)
            </h3>
            <p className="leading-relaxed text-gray-300 mb-6">
              Các mốc sự kiện cuối cùng đánh dấu sự kết thúc của cuộc chiến và thống nhất đất nước.
            </p>

            <div className="space-y-4">
              <div className="bg-green-950/30 p-4 rounded-lg border-l-4 border-green-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-green-400 text-green-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1973
                  </span>
                  <div>
                    <p className="font-bold text-green-300 mb-1">Hiệp Định Paris</p>
                    <p className="text-gray-300 text-sm">
                      Được ký kết sau thất bại của Mỹ trong trận "Điện Biên Phủ trên không". Đây là một thắng lợi quyết
                      định: Mỹ buộc phải cam kết tôn trọng độc lập, chủ quyền của Việt Nam và rút toàn bộ quân đội Mỹ và
                      đồng minh ra khỏi miền Nam. Điều này thay đổi so sánh lực lượng căn bản trên chiến trường.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-950/30 p-4 rounded-lg border-l-4 border-green-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-green-400 text-green-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1973-1975
                  </span>
                  <div>
                    <p className="font-bold text-green-300 mb-1">Giai Đoạn "Giải Phóng Miền Nam"</p>
                    <p className="text-gray-300 text-sm">
                      Sau khi Mỹ rút quân, trên chiến trường chỉ còn lại quân đội Sài Gòn và lực lượng cách mạng. Việt
                      Nam tranh thủ thời cơ, củng cố lực lượng và tạo thế để tiến tới giải phóng hoàn toàn miền Nam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-950/30 p-4 rounded-lg border-l-4 border-green-400">
                <div className="flex gap-3 items-start">
                  <span className="bg-green-400 text-green-950 font-bold px-3 py-1 rounded text-sm min-w-fit">
                    1975
                  </span>
                  <div>
                    <p className="font-bold text-green-300 mb-1">Tổng Tiến Công Và Nổi Dậy Mùa Xuân 1975</p>
                    <p className="text-gray-300 text-sm mb-3">Cuộc tấn công cuối cùng, gồm:</p>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4">
                      <li>
                        • <strong>Chiến Dịch Tây Nguyên:</strong> Buôn Ma Thuột
                      </li>
                      <li>
                        • <strong>Chiến Dịch Huế - Đà Nẵng:</strong> Tiếp theo
                      </li>
                      <li>
                        • <strong>Chiến Dịch Hồ Chí Minh:</strong> Giải phóng Sài Gòn vào ngày{" "}
                        <strong className="text-green-300">30/4/1975</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-950 to-emerald-950 p-6 rounded-lg border border-green-700 mt-6">
                <p className="text-xl font-bold text-green-300 mb-3 flex items-center gap-2">
                  <span className="w-2 h-8 bg-green-400"></span>
                  THỐNG NHẤT ĐẤT NƯỚC
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Kết quả cuối cùng, hoàn thành sự nghiệp:{" "}
                  <strong className="text-green-300">
                    "Giải phóng miền Nam khỏi ách thống trị của đế quốc Mỹ và bọn tay sai, thực hiện thống nhất nước
                    nhà, hoàn thành độc lập và dân chủ trong cả nước."
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    ),
  },
  {
    id: "resistance",
    title: "Cuộc Kháng\nChiến Nổi Lên",
    accentColor: "from-red-500 to-rose-400",
    image: "public/mot-don-vi-quan-giai-phong-mien-nam.-anh-bao-tang-lich-su-viet-nam-600x340.jpg",
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-gray-300">
          Từ những năm cuối của thập niên 1950, phong trào kháng cự chính trị tại miền Nam đã dần chuyển sang hình thức
          vũ trang. Những cuộc tấn công nhỏ lẻ của lực lượng cách mạng nhằm vào các căn cứ của chế độ Diệm.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-bold mb-3 text-white">Phương thức kháng chiến:</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Tấn công các đơn vị quân sự và cảnh sát của chế độ Diệm.</li>
            <li>Thiết lập các căn cứ du kích ở khu vực nông thôn.</li>
            <li>Tuyên truyền kích động quần chúng chống lại chế độ áp bức.</li>
            <li>Hình thành các hạng kháng chiến có cơ cấu chính trị và quân sự.</li>
          </ul>
        </div>
        <p className="leading-relaxed text-gray-300 mt-4">
          Cuộc kháng chiến này được gọi là{" "}
          <strong className="text-rose-400">cuộc kháng chiến vũ trang của nhân dân miền Nam</strong>, là bước đột phá
          quan trọng trong đường lối cách mạng của Đảng Cộng sản Việt Nam.
        </p>
      </div>
    ),
  },
]

export default function TimelinePage() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSectionClick = (id: string) => {
    if (activeId === id) {
      setActiveId(activeId === id ? null : id)
      setIsClosing(false)
    } else if (activeId !== null && id !== activeId) {
      setIsTransitioning(true)
      const modalElement = document.querySelector('div[class*="modal-"]')
      if (modalElement) {
        modalElement.scrollTop = 0
      }
      setTimeout(() => {
        setActiveId(id)
        setIsTransitioning(false)
      }, 300)
    } else {
      setActiveId(activeId === id ? null : id)
      setIsClosing(false)
    }
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setActiveId(null)
    }, 400)
  }

  const activeSection = SECTIONS.find((s) => s.id === activeId)

  return (
    <div className="bg-gray-950 min-h-screen text-gray-200 overflow-x-hidden">
      <style>{`
        @keyframes scaleIn {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* Added smooth modal animations for open/close */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        @keyframes modalFadeOut {
          from {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
          to {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
        }

        @keyframes contentSlideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contentSlideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(60px);
          }
        }

        @keyframes contentFadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-enter {
          animation: modalFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .modal-exit {
          animation: modalFadeOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .content-enter {
          animation: contentSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .content-exit {
          animation: contentSlideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* add transition animations for switching between sections */
        .content-transitioning {
          animation: contentFadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .content-transitioning-in {
          animation: contentFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .image-enter {
          animation: contentSlideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
          opacity: 0;
        }

        .image-transitioning-in {
          animation: contentFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;
          opacity: 0;
        }

        .title-enter {
          animation: contentSlideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
          opacity: 0;
        }

        .title-transitioning-in {
          animation: contentFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
          opacity: 0;
        }

        .text-enter {
          animation: contentSlideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
          opacity: 0;
        }

        .text-transitioning-in {
          animation: contentFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
          opacity: 0;
        }
      `}</style>

      {activeSection && (
        <div
          className={`fixed inset-0 z-50 bg-gray-950/80 overflow-y-auto ${isClosing ? "modal-exit" : "modal-enter"}`}
          ref={(el) => {
            if (el && !isTransitioning) {
              el.scrollTop = 0
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="fixed top-20 right-6 z-50 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="Close detail view"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Content */}
          <div
            className={`pt-24 md:pt-32 px-4 md:px-6 pb-12 ${isClosing ? "content-exit" : isTransitioning ? "content-transitioning" : "content-enter"}`}
          >
            <div className="container mx-auto max-w-4xl">
              {/* Hero Image with Accent Line */}
              <div
                className={`relative mb-8 rounded-2xl overflow-hidden h-72 md:h-96 ${isTransitioning ? "opacity-0" : isClosing ? "" : "image-enter"} ${!isClosing && !isTransitioning ? "" : isTransitioning ? "" : ""}`}
              >
                <img
                  src={activeSection.image || "/placeholder.svg"}
                  alt={activeSection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950" />

                {/* Accent Line Animation */}
                <div
                  className={`absolute top-0 left-0 h-1 md:h-1.5 bg-gradient-to-r ${activeSection.accentColor}`}
                  style={{ animation: `scaleIn 0.8s ease-out ${isClosing ? "0s" : "0.2s"} forwards` }}
                />
              </div>

              {/* Title with Accent */}
              <div className={`mb-8 ${isTransitioning ? "opacity-0" : isClosing ? "" : "title-enter"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-1.5 bg-gradient-to-r ${activeSection.accentColor}`}
                    style={{
                      width: "40px",
                    }}
                  />
                  <h1
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${activeSection.accentColor} bg-clip-text text-transparent`}
                  >
                    {activeSection.title.replace("\n", " ")}
                  </h1>
                </div>
              </div>

              {/* Content */}
              <div
                className={`prose prose-invert max-w-none text-gray-300 prose-p:leading-relaxed ${isTransitioning ? "opacity-0" : isClosing ? "" : "text-enter"}`}
              >
                {activeSection.content}
              </div>

              {/* Navigation between sections */}
              <div
                className={`mt-16 pt-12 border-t border-gray-800 flex gap-4 justify-center flex-wrap transition-opacity duration-300 ${isTransitioning ? "opacity-50 pointer-events-none" : ""}`}
              >
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    disabled={isTransitioning}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium disabled:cursor-not-allowed ${
                      section.id === activeId
                        ? `bg-gradient-to-r ${section.accentColor} text-gray-950`
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {section.title.replace("\n", " ")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!activeSection && (
        <main className="pt-24 md:pt-32 px-4 md:px-6 pb-12">
          <ScrollReveal direction="up" delay={0}>
            <div className="container mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4 leading-tight">
                BỐI CẢNH LỊCH SỬ CỦA CUỘC KHÁNG CHIẾN
              </h1>
              <p className="text-center text-gray-400 text-sm md:text-base">Click to explore each historical context</p>
            </div>
          </ScrollReveal>

          <div className="container mx-auto max-w-7xl space-y-12">
            {/* Section Grid - First row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SECTIONS.slice(0, 3).map((section, index) => (
                <ScrollReveal key={section.id} direction="up" delay={index * 0.15} duration={0.8}>
                  <div className="group cursor-pointer" onClick={() => handleSectionClick(section.id)}>
                    {/* Card */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-gray-500 h-80 group-hover:scale-105">
                      {/* Image */}
                      <img
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

                      {/* Accent Line - animates on hover */}
                      <div
                        className={`absolute top-0 left-0 h-1 md:h-1.5 bg-gradient-to-r ${section.accentColor} transition-all duration-700 group-hover:w-full`}
                        style={{
                          width: "0%",
                        }}
                      />

                      {/* Title */}
                      <div className="absolute inset-0 flex items-end p-6 md:p-8">
                        <div>
                          <div
                            className={`h-1 bg-gradient-to-r ${section.accentColor} mb-4 transition-all duration-700 group-hover:w-12`}
                            style={{
                              width: "40px",
                            }}
                          />
                          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-pre-line leading-tight">
                            {section.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Divider */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            </ScrollReveal>

            {/* Section Grid - Second row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SECTIONS.slice(3).map((section, index) => (
                <ScrollReveal key={section.id} direction="up" delay={(index + 3) * 0.15} duration={0.8}>
                  <div className="group cursor-pointer" onClick={() => handleSectionClick(section.id)}>
                    {/* Card */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 transition-all duration-500 hover:shadow-2xl hover:border-gray-500 h-80 group-hover:scale-105">
                      {/* Image */}
                      <img
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

                      {/* Accent Line - animates on hover */}
                      <div
                        className={`absolute top-0 left-0 h-1 md:h-1.5 bg-gradient-to-r ${section.accentColor} transition-all duration-700 group-hover:w-full`}
                        style={{
                          width: "0%",
                        }}
                      />

                      {/* Title */}
                      <div className="absolute inset-0 flex items-end p-6 md:p-8">
                        <div>
                          <div
                            className={`h-1 bg-gradient-to-r ${section.accentColor} mb-4 transition-all duration-700 group-hover:w-12`}
                            style={{
                              width: "40px",
                            }}
                          />
                          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-pre-line leading-tight">
                            {section.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
