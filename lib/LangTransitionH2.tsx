'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

type LangTransitionH2Props = {
  title: string;
  className: string;
};
const LangTransitionH2: React.FC<LangTransitionH2Props> = ({
  title,
  className,
}) => {
  const locale = useLocale();

  const t = useTranslations();

  return (
    <AnimatePresence mode='wait'>
      <motion.h2
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {t(title)}
      </motion.h2>
    </AnimatePresence>
  );
};

export default LangTransitionH2;
