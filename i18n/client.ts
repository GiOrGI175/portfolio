'use client';

import { useEffect, useState } from 'react';
import { FlatNamespace, KeyPrefix } from 'i18next';
import i18next from 'i18next';
import {
  useTranslation,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from 'react-i18next';

const runsOnServerSide = typeof window === 'undefined';

export function useT<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);

  useEffect(() => {
    const currentLang = i18next.language || 'en';
    if (currentLang !== activeLng) {
      i18next.changeLanguage(currentLang);
      setActiveLng(currentLang);
    }
  }, [activeLng]);

  return useTranslation(ns, options);
}
