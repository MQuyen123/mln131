import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUpRightFromSquare } from 'react-icons/fa6';

type AnalysisItemProps = {
  title: string;
  subtitle: string;
  content: string;
  imageSrc: string;
  links: { href: string; label: string }[];
  reverse?: boolean; // Để đảo ngược bố cục (ảnh trái/phải)
};

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


const AnalysisItem: React.FC<AnalysisItemProps> = ({ title, subtitle, content, imageSrc, links, reverse = false }) => {
  const isReverse = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  const textMotion = reverse ? { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } } : { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } };
  const imageMotion = reverse ? { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } } : { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } };


  return (
    <div className={`flex flex-col ${isReverse} gap-8 items-center pt-12`}>
      {/* Cột Nội dung */}
      <motion.div
        className="md:w-1/2 w-full p-6 bg-white/90 rounded-2xl shadow-xl border border-indigo-100"
        {...textMotion}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className={`text-3xl font-extrabold mb-2 ${reverse ? 'text-blue-700' : 'text-green-700'}`}>{title}</h3>
        <p className="text-xl font-semibold text-gray-700 mb-4 border-l-4 border-gray-300 pl-3">{subtitle}</p>
        <p className="text-lg text-gray-800 leading-relaxed">{content}</p>
        
        {/* Dẫn chứng */}
        <div className="mt-6">
          <p className="font-bold text-gray-900 flex items-center gap-2 mb-2">
            <FaUsers className="text-indigo-500" /> Dẫn chứng Học thuật và Thực tiễn:
          </p>
          <ul className="space-y-1.5 text-sm">
            {links.map((l, index) => (
              <li key={index} className="pl-3 border-l-2 border-indigo-200">
                {l.label.includes('http') ? <LinkOut href={l.href}>{l.label}</LinkOut> : l.label}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Cột Hình ảnh */}
      <motion.div
        className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-2xl"
        {...imageMotion}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default AnalysisItem;
