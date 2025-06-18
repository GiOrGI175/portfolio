'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

type LangTranstionPProps = {
  title: string;
  className: string;
};
const LangTranstionP: React.FC<LangTranstionPProps> = ({
  title,
  className,
}) => {
  const locale = useLocale();

  const t = useTranslations();

  return (
    <AnimatePresence mode='wait'>
      <motion.p
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {t(title)}
      </motion.p>
    </AnimatePresence>
  );
};

export default LangTranstionP;
