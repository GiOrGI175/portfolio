'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

type LangTransitionH3Props = {
  title: string;
  className: string;
};
const LangTransitionH3: React.FC<LangTransitionH3Props> = ({
  title,
  className,
}) => {
  const locale = useLocale();

  const t = useTranslations();

  return (
    <AnimatePresence mode='wait'>
      <motion.h3
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {t(title)}
      </motion.h3>
    </AnimatePresence>
  );
};

export default LangTransitionH3;
