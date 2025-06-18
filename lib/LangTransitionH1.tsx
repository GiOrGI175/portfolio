'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

type LangTransitionH1Props = {
  title: string;
  className: string;
};
const LangTransitionH1: React.FC<LangTransitionH1Props> = ({
  title,
  className,
}) => {
  const locale = useLocale();

  const t = useTranslations();

  return (
    <AnimatePresence mode='wait'>
      <motion.h1
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {t(title)}
      </motion.h1>
    </AnimatePresence>
  );
};

export default LangTransitionH1;
